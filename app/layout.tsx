import type { Metadata } from "next";
import { inter } from "./fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "GreenSys",
  description: "Transportation Corporation Management Network Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
