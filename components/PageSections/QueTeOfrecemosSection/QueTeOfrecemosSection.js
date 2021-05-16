// Dependencies
import Image from "next/image";

// Drawing Components
import BackgroundRectangle from "../../DrawingComponents/BackgroundDrawings/BackgroundRectangle/BackgroundRectangle";

// Icon Components
import {
  WebDevelopmentIcon,
  DataAnalisisIcon,
  MobileDevelopmentIcon,
} from "../../IconComponents/IconComponents";

export default function QueTeOfrecemosSection() {
  return (
    <section id="servicios">
      <div className="flex flex-col md:justify-start gap-2">
        <div className="flex md:inline-flex justify-center md:justify-start">
          <div className="relative inline-flex gap-2 flex-col">
            <h2 className="text-4xl z-20 text-center md:inline text-navyBlue font-bold md:text-left">
              ¿Qué te ofrecemos?
            </h2>
            <hr className="border-starCommandBlue z-20 h-[2px] bg-starCommandBlue" />
            <p className="text-center z-20 md:inline md:max-w-xs md:text-left">
              Lo que más nos importa es que el cliente obtenga lo que espera.
            </p>
            <BackgroundRectangle className="hidden md:block absolute z-10 w-[1900px] max-h-60 -top-16 -left-96" />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-32 mt-24 md:mt-36">
        <div className="flex flex-col items-center justify-center justify-items-center md:flex-row-reverse md:gap-32 md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <h3 className="text-2xl 2xl:text-3xl text-navyBlue font-bold text-center">
                Análisis de datos
              </h3>
              <DataAnalisisIcon className=" w-12" />
            </div>
            <p className="mt-6 mb-12 text-center md:text-right md:max-w-3xl">
              Fringilla semper id accumsan, fringilla pellentesque risus. Nisl
              quam purus aliquet bibendum placerat vitae id turpis viverra.
              Volutpat sagittis, posuere molestie dignissim est viverra
              scelerisque. Lacus odio eget egestas viverra odio. Pellentesque
              cursus nunc mi eu, at cras.
            </p>
          </div>
          <div className="mx-12 md:m-0 md:min-w-[300px] md:max-w-[400px]">
            <Image
              src="/assets/images/dataAnalisis-drawing.png"
              layout="intrinsic"
              width="800"
              height="560"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-32 md:items-center md:justify-between z-20">
          <div className="">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <h3 className="text-2xl 2xl:text-3xl  text-navyBlue font-bold text-center">
                Desarrollo Web
              </h3>
              <WebDevelopmentIcon className="w-12" />
            </div>
            <p className="relative z-20 mt-6 mb-12 text-center md:text-left md:max-w-3xl">
              Fringilla semper id accumsan, fringilla pellentesque risus. Nisl
              quam purus aliquet bibendum placerat vitae id turpis viverra.
              Volutpat sagittis, posuere molestie dignissim est viverra
              scelerisque. Lacus odio eget egestas viverra odio. Pellentesque
              cursus nunc mi eu, at cras.
            </p>
          </div>
          <div className="relative z-20 mx-12">
            <Image
              src="/assets/images/webDevelopment-drawing.png"
              layout="intrinsic"
              width="400"
              height="316"
            />
          </div>
        </div>{" "}
        <div className="flex relative flex-col md:flex-row-reverse md:gap-32 md:items-center md:justify-between">
          <BackgroundRectangle className="absolute transform rotate-90 w-[1000px] z-10 -right-96 rounded-[60px]" />
          <div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <h3 className="text-2xl 2xl:text-3xl text-navyBlue font-bold text-center z-20">
                Desarrollo Movil
              </h3>
              <MobileDevelopmentIcon className="w-12 z-20" />
            </div>
            <p className="relative mt-6 mb-12 text-center md:text-right md:max-w-3xl z-20">
              Fringilla semper id accumsan, fringilla pellentesque risus. Nisl
              quam purus aliquet bibendum placerat vitae id turpis viverra.
              Volutpat sagittis, posuere molestie dignissim est viverra
              scelerisque. Lacus odio eget egestas viverra odio. Pellentesque
              cursus nunc mi eu, at cras.
            </p>
          </div>
          <div className="flex justify-center mx-12 md:m-0 md:min-w-[300px] md:max-w-[400px] z-20">
            <Image
              src="/assets/images/movilDevelopment-drawing.png"
              layout="intrinsic"
              width="360"
              height="336"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
