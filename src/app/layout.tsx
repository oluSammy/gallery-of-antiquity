import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Providers from "../providers/Providers";

const raleway = Raleway({ subsets: ["latin"] });

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
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
