import Script from "next/script";

import { ADSENSE_PUBLISHER_ID } from "@/lib/adsense-config";

export default function AdSenseScript() {
  if (!ADSENSE_PUBLISHER_ID) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_PUBLISHER_ID)}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
