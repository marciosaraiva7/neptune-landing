/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "./menu";
import { MenuMobile } from "./menumobile";

export default function Header() {
  const navItems = [
    { name: "Serviços", href: "#services" },
    { name: "Abordagem", href: "#approach" },
    { name: "Sobre nós", href: "#about" },
  ];

  return (
    <header className="header-gradient fixed left-0 top-0 z-50 flex h-[7.563rem] w-full text-white md:h-28 md:py-4">
      <div className="container mx-auto flex items-start justify-between px-4 py-4 md:items-center md:px-0 md:py-0">
        <div className="flex items-center">
          <Link href="#banner" className="scroll-smooth">
            <img
              src="images/logo.svg"
              alt="Neptune Lab logo"
              className="mr-4 w-[8.75rem] md:w-auto"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>
        <nav className="hidden md:block">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative inline-block px-4 text-white"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-white transition-transform duration-300 ease-out group-hover:scale-x-90"></span>
            </a>
          ))}
          <Button className="relative ml-4 rounded bg-[#FF465D] text-white transition-all duration-300 ease-in-out hover:bg-red-900 hover:text-white">
            Entre em contato
          </Button>
        </nav>
      </div>
    </header>
  );
}
