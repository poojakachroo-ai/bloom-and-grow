import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom & Grow | Corporate Events & Workshops | Bangalore",
  description:
    "Unforgettable team experiences, beautifully crafted. Team building, festival events, wellness & CSR activities in Bangalore.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
