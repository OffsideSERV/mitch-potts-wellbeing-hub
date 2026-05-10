import { useEffect, useState } from "react";

const WelcomeReportPopup = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("welcome") !== "1") return;

    setOpen(true);
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(interval);
          setOpen(false);
          document.body.style.overflow = "";
          // Clean the URL so a refresh won't re-trigger the popup
          const url = new URL(window.location.href);
          url.searchParams.delete("welcome");
          window.history.replaceState({}, "", url.pathname + url.search + url.hash);
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-report-title"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-border animate-scale-in overflow-hidden">
        <div className="h-2 bg-primary" />
        <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
          <h2
            id="welcome-report-title"
            className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-4"
          >
            Thank You For Your Interest In Our Report!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            We've just sent you an email to access it, enjoy!
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
              <span className="text-3xl font-bold text-primary tabular-nums">{count}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Closing in {count} second{count === 1 ? "" : "s"}…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeReportPopup;
