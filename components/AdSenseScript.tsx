import Script from "next/script";

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

export default function AdSenseScript() {
  if (!CLIENT) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(CLIENT)}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
