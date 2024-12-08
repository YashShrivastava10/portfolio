import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Yash Shrivastava",
  description: "",
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
