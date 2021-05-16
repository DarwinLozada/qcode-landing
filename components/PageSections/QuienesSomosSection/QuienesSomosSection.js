// Components
import ValueCard from "../../ValueCard/ValueCard";

// Icon Components
import {
  ChartIcon,
  HeartIcon,
  ClockIcon,
} from "../../IconComponents/IconComponents";

// Drawing Components
import BackgroundCircle from "../../DrawingComponents/BackgroundDrawings/BackgroundCircle/BackgroundCircle";

export default function QuienesSomosSection() {
  return (
    <section id="quienes-somos" className="relative overflow-hid">
      <h2 className="font-bold text-4xl text-center text-navyBlue">
        ¿Quiénes Somos?{" "}
      </h2>
      <div className="flex relative justify-center">
        <div className="">
          <BackgroundCircle className="w-[700px] absolute z-10 -right-36" />
        </div>
        <p className="text-navyBlue text-center max-w-2xl mt-16 leading-8 z-20">
          Tincidunt pharetra in cursus ullamcorper vel ut suspendisse. Imperdiet
          vitae volutpat pellentesque a morbi. Dui facilisi eu euismod
          vestibulum, nibh bibendum mattis vestibulum consequat. Vulputate
          praesent molestie nunc risus, blandit leo pretium gravida.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:grid-rows-2 mt-24 relative md:mt-48 z-20">
        <li>
          <ValueCard
            Icon={ChartIcon}
            title="Profesionalismo"
            text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
          />
        </li>
        <li className="flex md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 justify-center">
          <ValueCard
            Icon={HeartIcon}
            title="Pasión"
            text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
          />
        </li>
        <li className="flex justify-center md:col-start-3">
          <ValueCard
            Icon={ClockIcon}
            title="Puntualidad"
            text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
          />
        </li>
      </ul>
    </section>
  );
}
