import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SBFFWK1L0M"
      ></Script>
      <Script id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SBFFWK1L0M');
          `}
      </Script>
    </head>
  );
};
