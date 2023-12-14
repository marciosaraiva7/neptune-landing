export default function Header() {
  const navItems = [
    { name: 'Serviços', href: '#services' },
    { name: 'Abordagem', href: '#approach' },
    { name: 'Sobre nós', href: '#about' },
  ];

  return (
    <header className="header-gradient text-white py-4 fixed flex w-full top-0 left-0 h-28 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="images/logo.svg" alt="Neptune Lab logo" className="mr-4" />
        </div>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-white px-4 inline-block"
            >
              {item.name}
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-90 transform transition-transform ease-out duration-300"
              ></span>
            </a>
          ))}
          <a
            href="#contact"
            className="relative text-white bg-[#FF465D] px-4 py-2 transition-all rounded hover:bg-red-900 ml-4"
          >
            Entre em contato
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform ease-out duration-300"
            ></span>
          </a>
        </nav>
      </div>
    </header>
  );
}
