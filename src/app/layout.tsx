import { Metadata } from "next";
import Script from "next/script";
import "./global.css";

export const metadata: Metadata = {
  title: "Yash Shrivastava | Full-Stack Developer",
  description:
    "Explore the portfolio of Yash Shrivastava, a skilled Full-Stack Developer specializing in modern web technologies, scalable applications, and elegant UI/UX.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
