/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neptune Lab",
  description: "Consultoria e desenvolvimento digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <GoogleTagManager gtmId="GTM-M3R82KK5" />


      </head>
      <body className={inter.className}>
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3R82KK5"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
