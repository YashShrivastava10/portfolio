import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NDMPSME9CS"
      ></Script>
      <Script id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-NDMPSME9CS');
          `}
      </Script>

      <meta property="og:site_name" content="Yash Shrivastava" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Yash Shrivastava",
          url: "https://www.yashshrivastava.in",
        })}
      </script>
    </head>
  );
};
