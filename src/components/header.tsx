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
    <header className="header-gradient text-white md:py-4 fixed flex w-full top-0 left-0 h-[7.563rem] md:h-28 z-50">
      <div className="container mx-auto flex justify-between items-start px-4 py-4 md:px-0 md:py-0 md:items-center">
        <div className="flex items-center">
          <Link href="#banner" className="scroll-smooth">
            <img
              src="images/logo.svg"
              alt="Neptune Lab logo"
              className="w-[8.75rem] md:w-auto mr-4"
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
              className="group relative text-white px-4 inline-block"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-90 transform transition-transform ease-out duration-300"></span>
            </a>
          ))}
          <Button className="relative text-white bg-[#FF465D] transition-all rounded hover:text-white hover:bg-red-900 ease-in-out duration-300 ml-4">
            Entre em contato
          </Button>
        </nav>
      </div>
    </header>
  );
}
