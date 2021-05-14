// Drawing Components
import HeroSectionDrawing from "../DrawingComponents/HeroSectionDrawing/HeroSectionDrawing";
import HeroSectionWave from "../DrawingComponents/BackgroundDrawings/HeroSectionWave/HeroSectionWave";

export default function HeroSection() {
  return (
    <div className="flex">
      <section>
        <h1 className="text-navyBlue font-bold text-6xl">
          Desarrollamos el software que necesitas{" "}
        </h1>
        <p className="text-navyBlue">
          Et senectus erat et nulla pulvinar. Leo pellentesque egestas turpis
          cras id dui, enim, sit cras. Augue gravida non sem euismod.
        </p>
        <div>
          <button className="rounded-brand bg-starCommandBlue text-whiteBlue font-bold">
            Lo que ofrecemos
          </button>
          <button className="rounded-brand">Hánblanos</button>
        </div>
      </section>
      <HeroSectionDrawing className="" />
      <HeroSectionWave className="absolute left-0 z-[-10] w-screen" />
    </div>
  );
}
