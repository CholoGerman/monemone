"use client";

import { useEffect, useRef } from "react";

type AdVariant = "intro" | "mid" | "preFaq" | "home" | "default";

type AdSlotProps = {
  label?: string;
  /** Maps to NEXT_PUBLIC_ADSENSE_SLOT_* env vars for placement reporting in AdSense. */
  variant?: AdVariant | string;
  className?: string;
};

const PUB = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

function slotForVariant(variant: string): string | undefined {
  const v = variant as AdVariant;
  const pick = (value: string | undefined) =>
    value && value.trim().length > 0 ? value.trim() : undefined;

  const byVariant: Record<AdVariant, string | undefined> = {
    intro: pick(process.env.NEXT_PUBLIC_ADSENSE_SLOT_INTRO),
    mid: pick(process.env.NEXT_PUBLIC_ADSENSE_SLOT_MID),
    preFaq: pick(process.env.NEXT_PUBLIC_ADSENSE_SLOT_PRE_FAQ),
    home: pick(process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME),
    default: pick(process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT),
  };

  return byVariant[v] ?? byVariant.default;
}

export default function AdSlot({
  label = "Ad placement",
  variant = "default",
  className = "",
}: AdSlotProps) {
  const slotId = slotForVariant(variant);
  const filled = useRef(false);

  useEffect(() => {
    if (!PUB || !slotId || filled.current) {
      return;
    }
    filled.current = true;
    try {
      const w = window as unknown as { adsbygoogle?: Record<string, unknown>[] };
      w.adsbygoogle = w.adsbygoogle ?? [];
      w.adsbygoogle.push({});
    } catch {
      /* ignore */
    }
  }, [slotId]);

  if (PUB && slotId) {
    return (
      <aside
        className={`my-8 flex w-full justify-center ${className}`}
        aria-label={label}
      >
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: "120px",
            width: "100%",
            maxWidth: "728px",
          }}
          data-ad-client={PUB}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  return (
    <aside
      className={`my-8 rounded-xl border border-dashed border-zinc-300 bg-zinc-100 p-4 text-center ${className}`}
      aria-label={label}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Sponsored
      </p>
      <p className="mt-1 text-sm text-zinc-600">{label}</p>
      <p className="mt-2 text-xs text-zinc-500">
        Set{" "}
        <code className="rounded bg-zinc-200 px-1">NEXT_PUBLIC_ADSENSE_CLIENT</code>{" "}
        and slot env vars to show live ads. See{" "}
        <code className="rounded bg-zinc-200 px-1">.env.example</code>.
      </p>
    </aside>
  );
}
