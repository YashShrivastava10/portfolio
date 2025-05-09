import { Metadata } from "next";
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
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
