// Native PWA install trigger.
// - Android/Chrome/Edge/Desktop: captures `beforeinstallprompt` and fires the
//   browser's native install dialog on the first user gesture (click/touch).
// - iOS Safari: no programmatic install API exists. We do nothing here
//   (per requirements: no custom modals). The user can still use the native
//   Share → "Add to Home Screen" action.
//
// Safe for SSR (vite-react-ssg) and Lovable preview iframes.

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function initPwaInstall(): void {
  if (typeof window === "undefined") return;

  // Don't interfere with the Lovable editor preview (iframe sandboxes).
  // IMPORTANT: don't match the bare "lovable.app" — published apps like
  // multinivel.lovable.app must register the SW so the install icon appears.
  const host = window.location.hostname;
  const isPreviewHost =
    host.includes("id-preview--") ||
    host.includes("lovableproject.com") ||
    host.endsWith(".sandbox.lovable.dev");


  let inIframe = false;
  try {
    inIframe = window.self !== window.top;
  } catch {
    inIframe = true;
  }

  // Register service worker (required for Chrome install criteria) — skip in preview/iframe.
  if (
    !isPreviewHost &&
    !inIframe &&
    "serviceWorker" in navigator &&
    window.location.protocol === "https:"
  ) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* ignore */
      });
    });
  }

  // Clean up any old SW registrations inside preview/iframe to avoid stale shells.
  if ((isPreviewHost || inIframe) && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations?.().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
    return;
  }

  let deferredPrompt: BeforeInstallPromptEvent | null = null;
  let promptShown = false;

  // Already installed (standalone)? Nothing to do.
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // @ts-expect-error iOS Safari only
    window.navigator.standalone === true;
  if (isStandalone) return;

  window.addEventListener("beforeinstallprompt", (e: Event) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });

  const tryPrompt = async () => {
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
    } catch {
      /* user gesture lost or already handled */
    } finally {
      deferredPrompt = null;
      removeGestureListeners();
    }
  };

  const onGesture = () => {
    void tryPrompt();
  };

  const removeGestureListeners = () => {
    window.removeEventListener("click", onGesture, true);
    window.removeEventListener("touchend", onGesture, true);
    window.removeEventListener("keydown", onGesture, true);
  };

  // Trigger on the FIRST user gesture (required by browser policy).
  window.addEventListener("click", onGesture, true);
  window.addEventListener("touchend", onGesture, true);
  window.addEventListener("keydown", onGesture, true);

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    removeGestureListeners();
  });
}
