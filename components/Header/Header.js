export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <span className="text-navyBlue font-bold">LOGO</span>
      <nav className="flex gap-12">
        <a className="text-navyBlue">Quienes somos</a>
        <a className="text-navyBlue">Servicios</a>
        <a className="text-navyBlue">Clientes</a>
      </nav>
    </header>
  );
}
