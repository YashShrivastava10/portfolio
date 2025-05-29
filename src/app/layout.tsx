import { Footer } from "@/components/common/Footer/Footer";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { Header } from "@/components/common/Header/Header";
import { PageTransition } from "@/components/common/PageTransition";
import { SendMail } from "@/components/common/SendMail";
import { StairTransition } from "@/components/common/StairTransition";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

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
