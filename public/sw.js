// Minimal service worker — required to meet PWA install criteria on Chrome/Edge.
// Network-first passthrough: never serves stale HTML, no offline caching.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Pass through to network. No caching to avoid stale content issues.
  return;
});
