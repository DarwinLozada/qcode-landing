// Components
import ValueCard from "../ValueCard/ValueCard";

// Icon Components
import {
  ChartIcon,
  HeartIcon,
  ClockIcon,
} from "../IconComponents/IconComponents";

export default function QuienesSomosSection() {
  return (
    <section>
      <h2 className="font-bold text-4xl text-center text-navyBlue">
        ¿Quiénes Somos?{" "}
      </h2>
      <p className="text-navyBlue text-center block mt-8">
        Tincidunt pharetra in cursus ullamcorper vel ut suspendisse. Imperdiet
        vitae volutpat pellentesque a morbi. Dui facilisi eu euismod vestibulum,
        nibh bibendum mattis vestibulum consequat. Vulputate praesent molestie
        nunc risus, blandit leo pretium gravida.
      </p>
      <ul className="grid grid-cols-3 gap-5">
        <ValueCard
          Icon={ChartIcon}
          title="Profesionalismo"
          text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
        />
        <ValueCard
          Icon={HeartIcon}
          title="Pasión"
          text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
        />
        <ValueCard
          Icon={ClockIcon}
          title="Puntualidad"
          text="Nec nisl morbi gravida ultrices amet, pharetra, nullam. Integer dui mi vulputate vitae fringilla egestas placerat pellentesque. "
        />
      </ul>
    </section>
  );
}
