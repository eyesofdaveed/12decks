import { useEffect } from "react";
import Script from "next/script";

const GoogleTag = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-710701541");
    }
  }, []);

  return (
    <>
      {/* Load Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-710701541"
      />

      {/* Initialize Google Analytics */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-710701541');
                    `,
        }}
      />
    </>
  );
};

export default GoogleTag;
