/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { MenuMobile } from "./menumobile";

export default function Header() {
  const navItems = [
    { name: "Serviços", href: "#approach" },
    { name: "Abordagem", href: "#transformation" },
  ];

  return (
    <header className="header-gradient-light fixed left-0 top-0 z-50 flex h-[7.563rem] w-full font-graphik text-white md:h-28 md:py-4">
      <div className="container mx-auto flex items-start justify-between px-4 py-4 md:items-center">
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
        <nav className="hidden items-center md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative inline-block px-4 text-white"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-white transition-transform duration-500 ease-out group-hover:scale-x-90"></span>
            </a>
          ))}
          <Link href={"#contact"}>
            <button className="relative ml-4 flex rounded-[20px] border border-stone-50 bg-transparent px-4 py-1 text-white backdrop-blur-[20px] transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
              Contato{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="fill-current"
              >
                <path d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z" />
              </svg>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
