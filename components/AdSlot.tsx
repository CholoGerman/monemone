type AdSlotProps = {
  label?: string;
  className?: string;
};

export default function AdSlot({
  label = "Ad placement",
  className = "",
}: AdSlotProps) {
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
        Replace this placeholder with your AdSense component/script.
      </p>
    </aside>
  );
}
