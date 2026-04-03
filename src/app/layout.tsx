import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INEOS Automotive Americas Hub",
  description: "Central dashboard for INEOS Automotive Americas tools and applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
