import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} PhoneCash Guide. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="hover:underline">
            Cookie Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/affiliate-disclosure" className="hover:underline">
            Affiliate Disclosure
          </Link>
        </nav>
      </div>
    </footer>
  );
}
