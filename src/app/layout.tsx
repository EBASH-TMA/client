import type { Metadata } from "next";
import './globals.css'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const blackout = localFont({
  src: [
    {
      path: '../../public/fonts/Blackout Sunrise.ttf'
    },
  ],
  variable: '--font-blackout'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackout.variable} font-sans`}>{children}</body>
    </html>
  );
}
