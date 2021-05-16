import useScrollTo from "../../hooks/useScrollTo/useScrollTo";

export default function Header() {
  const scrollToElement = useScrollTo();

  return (
    <header className="flex justify-between w-full">
      <span className="text-navyBlue font-bold text-lg">LOGO</span>
      <nav className="flex gap-4 md:gap-16">
        <a
          onClick={() => scrollToElement("quienes-somos")}
          className="transition-all duration-200 text-navyBlue cursor-pointer hover:text-starCommandBlue"
        >
          Quienes somos
        </a>
        <a
          onClick={() => scrollToElement("servicios")}
          className="transition-all duration-200 text-navyBlue cursor-pointer hover:text-starCommandBlue"
        >
          Servicios
        </a>
        <a
          onClick={() => scrollToElement("clientes")}
          className="transition-all duration-200 text-navyBlue cursor-pointer hover:text-starCommandBlue"
        >
          Clientes
        </a>
      </nav>
    </header>
  );
}
