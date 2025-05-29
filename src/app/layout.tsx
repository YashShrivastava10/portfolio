import { Footer } from "@/components/common/Footer/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Header } from "@/components/common/Header/Header";
import { PageTransition } from "@/components/common/PageTransition";
import { StairTransition } from "@/components/common/StairTransition";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Shrivastava | Web Developer",
  description:
    "Explore the portfolio of Yash Shrivastava, a skilled Web Developer specializing in modern web technologies, scalable applications, and elegant UI/UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="antialiased">
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
