import type { Metadata } from "next";
import { Teko, Roboto } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ExitButton from "@/components/Buttons/exitButton";

const teko = Teko({
  weight: '400',
  variable: '--font-teko',
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Torchlight Foundation",
  description: "This is the client website of Torchlight Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-pt-[125px] lg:scroll-pt-[144px]">
        <body
          className={`${roboto.className} ${teko.variable} antialiased`}
          >
          <Header/>
          {children}
          <ExitButton/>
          <Footer/>
        </body>
      </html>
  );
}
