// Dependencies
import Head from "next/head";

// Components
import Header from "../components/Header/Header";
import HeroSection from "../components/PageSections/HeroSection/HeroSection";
import QuienesSomosSection from "../components/PageSections/QuienesSomosSection/QuienesSomosSection";
import QueTeOfrecemosSection from "../components/PageSections/QueTeOfrecemosSection/QueTeOfrecemosSection";
import HemosTrabajadoSection from "../components/PageSections/HemosTrabajadoSection/HemosTrabajadoSection";
import ContactSection from "../components/PageSections/ContactoSection/ContactoSection";
import NosAdaptamosSection from "../components/PageSections/NosAdaptamosSection/NosAdaptamosSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-whiteBlue max-w-[100vw] overflow-hidden">
      <Head>
        <title>Qcode</title>
        <meta property="og:title" content="Qcode" />
      </Head>
      <div className="mx-3 md:mx-16 py-6 2xl:mx-36">
        <Header />
        <HeroSection />
        <div className="flex flex-col gap-36 mt-24 md:gap-52 md:mt-72">
          <QuienesSomosSection />
          <QueTeOfrecemosSection />
          <NosAdaptamosSection />
          <HemosTrabajadoSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
