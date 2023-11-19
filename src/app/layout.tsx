import type { Metadata } from "next";
import "./globals.css";
import { Raleway, Nunito_Sans } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
// Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daps",
  description: "Daps | Musuem...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
