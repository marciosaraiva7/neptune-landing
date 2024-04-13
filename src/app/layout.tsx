/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { GoogleTagManager } from "@next/third-parties/google";
import FloatButton from "@/components/floatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neptune Lab",
  description:
    "Neptune Lab é especializada no desenvolvimento de aplicativos, sistemas customizados, sites, plataformas de e-commerce e dashboards interativos. Descubra como nossas soluções tecnológicas personalizadas podem transformar sua operação digital e otimizar seus processos de negócio. Conecte-se com as soluções ideais para crescer seu negocio com um ambiente digital moderno.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <title>Neptune Lab</title>
        <meta
          name="description"
          content="Neptune Lab é especializada no desenvolvimento de aplicativos, sistemas customizados, sites, plataformas de e-commerce e dashboards interativos. Descubra como nossas soluções tecnológicas personalizadas podem transformar sua operação digital e otimizar seus processos de negócio. Conecte-se com as soluções ideais para crescer seu negocio com um ambiente digital moderno."
          key={"desc"}
        />
        <meta
          property="og:title"
          content="Neptune Lab | Desenvolvimento de apps e sistemas"
        />
        <meta
          property="og:description"
          content="Neptune Lab é especializada no desenvolvimento de aplicativos, sistemas customizados, sites, plataformas de e-commerce e dashboards interativos. Descubra como nossas soluções tecnológicas personalizadas podem transformar sua operação digital e otimizar seus processos de negócio. Conecte-se com as soluções ideais para crescer seu negocio com um ambiente digital moderno."
        />
        <meta property="og:image" content="/images/favicon.ico" />
        <GoogleTagManager gtmId="GTM-M3R82KK5" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <FloatButton />
      </body>
    </html>
  );
}
