import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kentai Radiquum",
  description: "Developer, Amateur Photographer, Self-Hosting Admirer",
  openGraph: {
    images: [
      {
        url: "https://radiquum.wah.su/images/opengraph.png",
        width: 1200,
        height: 675,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
