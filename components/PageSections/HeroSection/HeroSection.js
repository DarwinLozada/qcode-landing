// Dependencies
import Image from "next/image";
import useScrollTo from "../../../hooks/useScrollTo/useScrollTo";

// Drawing Components
import HeroSectionDrawing from "../../DrawingComponents/HeroSectionDrawing/HeroSectionDrawing";
import HeroSectionWave from "../../DrawingComponents/BackgroundDrawings/HeroSectionWave/HeroSectionWave";

// Icon Components
import {
  ServicesIcon,
  MessagesIcon,
} from "../../IconComponents/IconComponents";

export default function HeroSection() {
  const scrollToElement = useScrollTo();

  return (
    <div className="flex flex-col justify-between items-center md:flex-row md:mt-8 md:gap-24">
      <section className="mb-16 md:max-w-lg z-[3] 3xl:max-w-2xl">
        <h1 className="text-navyBlue font-bold text-5xl lg:max-w-2xl 3xl:text-8xl 3xl:max-w-none 2xl:text-7xl md:text-6xl text-center md:text-left mt-16">
          Desarrollamos el software que necesitas{" "}
        </h1>
        <p className="text-navyBlue mt-12 text-center md:text-left 2xl:text-xl">
          Et senectus erat et nulla pulvinar. Leo pellentesque egestas turpis
          cras id dui, enim, sit cras. Augue gravida non sem euismod.
        </p>
        <div className="flex justify-between mt-12 gap-4 md:max-w-md">
          <button
            onClick={() => scrollToElement("servicios")}
            className="transition-all duration-200 flex rounded-brand text-lg items-center gap-3 px-5 py-2 bg-starCommandBlue outline-none focus:outline-none filter hover:brightness-125 text-whiteBlue font-bold"
          >
            Lo que ofrecemos
            <ServicesIcon className="w-6" />
          </button>
          <button
            onClick={() => scrollToElement("contacto")}
            className="transition-all duration-200 flex rounded-brand px-6 py-2 gap-3 text-lg items-center text-starCommandBlue outline-none focus:outline-nonefilter hover:brightness-125 font-bold border-starCommandBlue border-2"
          >
            Háblanos
            <MessagesIcon className="w-6" />
          </button>
        </div>
      </section>
      <div>
        <Image
          src="/assets/images/heroSection-drawing.png"
          layout="intrinsic"
          width="701"
          height="453"
          className="z-[2] absolute"
        />
      </div>
      <HeroSectionWave className="absolute left-0 w-[99vw] -bottom-16" />
    </div>
  );
}
