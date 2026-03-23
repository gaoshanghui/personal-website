import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gaoshanghui.com"),
  title: {
    default: "Gao Shanghui",
    template: "%s | Gao Shanghui",
  },
  description:
    "Personal website for Gao Shanghui, a designer with a systems and implementation mindset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
