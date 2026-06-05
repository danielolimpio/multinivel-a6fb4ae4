#!/usr/bin/env node
/**
 * Build-time link & sitemap validator.
 *
 * - Parses src/routes.tsx for declared SPA routes (static + dynamic + getStaticPaths).
 * - Adds dynamic slugs from src/data/quizData.ts (quiz pages).
 * - Scans src/**\/*.{ts,tsx} for internal links via <Link to="..."> and href="/...".
 * - Parses public/sitemap.xml entries.
 * - Fails (exit 1) on:
 *     • internal link pointing to an unknown route
 *     • sitemap URL pointing to an unknown route
 *     • indexable static route missing from sitemap (warning-only by default)
 *
 * Run: `node scripts/check-links.mjs` (wired into `prebuild`).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..');
const SRC = join(ROOT, 'src');
const SITEMAP = join(ROOT, 'public', 'sitemap.xml');
const ROUTES_FILE = join(SRC, 'routes.tsx');
const QUIZ_FILE = join(SRC, 'data', 'quizData.ts');

const BASE_URL = 'https://www.universidademultinivel.com';

// ---------- helpers ----------
const norm = (p) => {
  if (!p) return '/';
  let s = p.split('#')[0].split('?')[0];
  if (!s.startsWith('/')) s = '/' + s;
  if (s.length > 1 && s.endsWith('/')) s = s.slice(0, -1);
  return s;
};

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(tsx?|jsx?)$/.test(name)) out.push(full);
  }
  return out;
};

// ---------- 1. Parse routes ----------
const routesSrc = readFileSync(ROUTES_FILE, 'utf8');
const staticRoutes = new Set(['/']);
const dynamicPatterns = []; // { re, raw }

// Collect plain `path: 'xxx'` entries.
for (const m of routesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g)) {
  const p = m[1];
  if (p === '*') continue;
  if (p.includes(':')) {
    // convert :slug -> [^/]+
    const re = new RegExp('^' + p.replace(/:[A-Za-z_]+/g, '[^/]+') + '$');
    dynamicPatterns.push({ re, raw: '/' + p });
  } else {
    staticRoutes.add(norm('/' + p));
  }
}

// Collect getStaticPaths slug lists from companySlugs & articleSlugs arrays.
const arrayMatches = [...routesSrc.matchAll(/const\s+(\w+Slugs)\s*=\s*\[([\s\S]*?)\];/g)];
const slugBuckets = {};
for (const [, name, body] of arrayMatches) {
  slugBuckets[name] = [...body.matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
}
for (const slug of slugBuckets.companySlugs || []) staticRoutes.add(`/empresa/${slug}`);
for (const slug of slugBuckets.articleSlugs || []) staticRoutes.add(`/artigo/${slug}`);

// Quiz slugs from quizData.ts
const quizSrc = readFileSync(QUIZ_FILE, 'utf8');
for (const m of quizSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)) {
  staticRoutes.add(`/quiz/${m[1]}`);
}
staticRoutes.add('/quiz/resultado');
staticRoutes.add('/quiz/relatorio-final');

const isKnownRoute = (path) => {
  const p = norm(path);
  if (staticRoutes.has(p)) return true;
  return dynamicPatterns.some(({ re }) => re.test(p));
};

// ---------- 2. Scan source for internal links ----------
const files = walk(SRC);
const linkIssues = [];
const seenInternal = new Set();

const linkRegexes = [
  /\bto=\{?["'`](\/[^"'`}\s]*)["'`]\}?/g,
  /\bhref=\{?["'`](\/[^"'`}\s]*)["'`]\}?/g,
];

// Paths to ignore (assets, anchors, externally-handled, etc.)
const IGNORE_PREFIXES = [
  '/lovable-uploads/',
  '/assets/',
  '/api/',
  '/auth/v1/',
  '/storage/v1/',
];

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  for (const re of linkRegexes) {
    for (const m of src.matchAll(re)) {
      const raw = m[1];
      if (raw.includes('${')) continue; // template expression
      if (IGNORE_PREFIXES.some((p) => raw.startsWith(p))) continue;
      if (/\.[a-z0-9]{2,5}(\?|$)/i.test(raw)) continue; // file asset
      const p = norm(raw);
      seenInternal.add(p);
      if (!isKnownRoute(p)) {
        linkIssues.push({ file: relative(ROOT, file), link: raw });
      }
    }
  }
}

// ---------- 3. Parse sitemap ----------
const sitemap = readFileSync(SITEMAP, 'utf8');
const sitemapPaths = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) =>
  m[1].replace(BASE_URL, '').replace(/^https?:\/\/[^/]+/, '')
);

const sitemapIssues = [];
const sitemapSet = new Set();
for (const url of sitemapPaths) {
  const p = norm(url);
  sitemapSet.add(p);
  if (!isKnownRoute(p)) sitemapIssues.push(url);
}

// ---------- 4. Indexable static routes missing from sitemap (warning) ----------
const NOT_INDEXABLE = new Set(['/auth', '/admin/auth', '/admin', '/dashboard', '/quiz/resultado']);
const missingFromSitemap = [];
for (const r of staticRoutes) {
  if (NOT_INDEXABLE.has(r)) continue;
  if (r.startsWith('/admin')) continue;
  if (!sitemapSet.has(r)) missingFromSitemap.push(r);
}

// ---------- Report ----------
const log = (...a) => console.log(...a);
log(`\n🔗 Link checker`);
log(`   • Routes known      : ${staticRoutes.size} static + ${dynamicPatterns.length} dynamic patterns`);
log(`   • Internal links    : ${seenInternal.size} unique`);
log(`   • Sitemap entries   : ${sitemapPaths.length}`);

if (linkIssues.length) {
  log(`\n❌ ${linkIssues.length} broken internal link(s):`);
  for (const { file, link } of linkIssues) log(`   - ${link}  (${file})`);
}
if (sitemapIssues.length) {
  log(`\n❌ ${sitemapIssues.length} sitemap URL(s) without a matching route:`);
  for (const u of sitemapIssues) log(`   - ${u}`);
}
if (missingFromSitemap.length) {
  log(`\n⚠️  ${missingFromSitemap.length} indexable route(s) missing from sitemap:`);
  for (const r of missingFromSitemap) log(`   - ${r}`);
}

const fail = linkIssues.length > 0 || sitemapIssues.length > 0;
if (fail) {
  log(`\n💥 Link check FAILED.\n`);
  process.exit(1);
}
log(`\n✅ Link check passed.\n`);
