import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or was moved.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-900">
        This page could not be found
      </h1>
      <p className="mt-3 text-zinc-600">
        The link may be broken or the content may have been removed.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
        >
          Back to home
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
        >
          Browse guides
        </Link>
      </div>
    </main>
  );
}
