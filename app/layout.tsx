import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaoshanghui.com"),
  title: "Shanghui Gao",
  description:
    "A designer with a systems and implementation mindset. My work spans product experience, design systems, and emerging AI workflows.",
  alternates: {
    canonical: "https://gaoshanghui.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shanghui Gao",
    description:
      "A designer with a systems and implementation mindset. My work spans product experience, design systems, and emerging AI workflows.",
    url: "https://gaoshanghui.com",
    siteName: "Shanghui Gao",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanghui Gao",
    description:
      "A designer with a systems and implementation mindset. My work spans product experience, design systems, and emerging AI workflows.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
