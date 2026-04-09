"use client";

import { useState } from "react";

const STORAGE_KEY = "cookie-consent-status";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.localStorage.getItem(STORAGE_KEY);
  });

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-300 bg-white/95 px-4 py-4 shadow-lg backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-700">
          We use cookies for analytics, ads, and affiliate tracking. By
          continuing, you agree to our cookie policy.
        </p>
        <button
          onClick={acceptCookies}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
}
