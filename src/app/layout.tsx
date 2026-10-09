import { Footer } from "@/components/common/Footer/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Header } from "@/components/common/Header/Header";
import { PageTransition } from "@/components/common/PageTransition";
import { SendMail } from "@/components/common/SendMail";
import { StairTransition } from "@/components/common/StairTransition";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import Script from "next/script";
// @ts-expect-error Next.js handles this global CSS import at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Shrivastava | Sr. Software Engineer Portfolio",
  description:
    "Explore the full-stack web developer portfolio of Yash Shrivastava. Discover innovative web projects, technical skills, and professional experience. Based in Madhya Pradesh, India",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const savedTheme = localStorage.getItem("theme");
            const theme =
              savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : "system";
            const resolvedTheme =
              theme === "system"
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
                : theme;
            const savedColorPalette = localStorage.getItem("colorPalette");
            const colorPalette =
              savedColorPalette === "blue" ||
              savedColorPalette === "purple" ||
              savedColorPalette === "red"
                ? savedColorPalette
                : "default";

            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(resolvedTheme);
            document.documentElement.dataset.color = colorPalette;
          })();`}
        </Script>
        <GoogleAnalytics />
      </head>
      <body className="antialiased">
        <SendMail />
        <Toaster
          richColors
          position="bottom-center"
          toastOptions={{
            style: { minWidth: "fit-content" },
          }}
        />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
