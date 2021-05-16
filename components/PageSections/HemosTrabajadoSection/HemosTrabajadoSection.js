// Dependencies
import Image from "next/image";

export default function HemosTrabajoSection() {
  return (
    <div id="clientes">
      <div className="flex md:inline-flex justify-center md:justify-start">
        <div className="relative inline-flex gap-2 flex-col">
          <div className="flex flex-col gap-2 text-navyBlue font-bold text-4xl text-center">
            <h2>Hemos trabajado con</h2>
            <hr className="border-starCommandBlue z-20 h-[2px] bg-starCommandBlue" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mt-16 md:mt-32">
        <Image
          src="/assets/images/logoEmpresa1.png"
          layout="intrinsic"
          width="220"
          height="62"
        />
        <Image
          src="/assets/images/logoEmpresa2.png"
          layout="intrinsic"
          width="220"
          height="60"
        />{" "}
        <Image
          src="/assets/images/logoEmpresa3.png"
          layout="intrinsic"
          width="150"
          height="34"
        />{" "}
        <Image
          src="/assets/images/logoEmpresa4.png"
          layout="intrinsic"
          width="200"
          height="46"
        />
      </div>
    </div>
  );
}
