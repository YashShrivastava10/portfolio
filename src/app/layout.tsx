import { Footer } from "@/components/common/Footer/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Header } from "@/components/common/Header/Header";
import { PageTransition } from "@/components/common/PageTransition";
import { SendMail } from "@/components/common/SendMail";
import { StairTransition } from "@/components/common/StairTransition";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Shrivastava | Full-Stack Web Developer Portfolio",
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
    <html lang="en">
      <GoogleAnalytics />
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
