// Components
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import QuienesSomosSection from "../components/QuienesSomosSection/QuienesSomosSection";

export default function Home() {
  return (
    <div className="mx-16">
      <Header />
      <HeroSection />
      <QuienesSomosSection />
    </div>
  );
}
