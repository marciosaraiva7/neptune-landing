import type { Metadata } from "next";
import "./globals.css";
import "../../styles/fonts.css";
import Header from "@/components/header";
import FloatButton from "@/components/floatButton";

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
      <body>
        <Header />
        {children}
        <FloatButton />
      </body>
    </html>
  );
}
