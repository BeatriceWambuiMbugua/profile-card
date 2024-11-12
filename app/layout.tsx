import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";


const font = Noto_Sans(
  {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
  }
)


export const metadata: Metadata = {
  title: "Create Profile Card",
  description: "GreatFrontEnd Projects created with Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased text-wrap bg-gradient-to-r from-[#F9FAFB] to-[#D2D6DB] to-100%`}
      >
        {children}
      </body>
    </html>
  );
}
