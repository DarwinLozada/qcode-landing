export default function NosAdaptamosSection() {
  return (
    <section className="relative z-20 flex flex-col gap-8">
      <div className="flex md:inline-flex justify-center md:justify-center">
        <div className="relative inline-flex gap-2 flex-col justify-center">
          <h2 className="text-4xl text-center font-bold inline text-navyBlue">
            Nos adaptamos a tus necesidades
          </h2>
          <hr className="border-starCommandBlue z-20 h-[2px] bg-starCommandBlue" />
          <span className="text-center">
            Nuestro proceso de creación responde a tu negocio
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-16 gap-16 md:flex-row md:mt-24">
        <div className="flex flex-col justify-center justify-items-center items-center gap-6 md:items-start">
          <span className="text-[#498134] bg-[#C3EAB6] justify-self-end w-min text-5xl px-3 py-4 font-bold">
            1
          </span>
          <h3 className="text-navyBlue text-3xl font-bold justify-self-start">
            ¿Qué deseas?
          </h3>
          <p className="text-center max-w-xs md:text-left">
            Eros, semper tincidunt orci ultricies tempor, porttitor arcu.
            Dignissim nibh vitae quam praesent placerat a, at odio.
          </p>
        </div>
        <div className="flex flex-col justify-center justify-items-center items-center gap-6 md:items-start">
          <span className="text-[#A022CD] bg-[#E6D0EE] justify-self-end w-min text-5xl px-3 py-4 font-bold">
            2
          </span>
          <h3 className="text-navyBlue text-3xl font-bold justify-self-start">
            Propuesta
          </h3>
          <p className="text-center max-w-xs md:text-left">
            Eros, semper tincidunt orci ultricies tempor, porttitor arcu.
            Dignissim nibh vitae quam praesent placerat a, at odio.
          </p>
        </div>
        <div className="flex flex-col justify-center justify-items-center items-center gap-6 md:items-start">
          <span className="text-[#85872A] bg-[#F8FAC1] justify-self-end w-min text-5xl px-3 py-4 font-bold">
            3
          </span>
          <h3 className="text-navyBlue text-3xl font-bold justify-self-start">
            Feedback
          </h3>
          <p className="text-center max-w-xs md:text-left">
            Eros, semper tincidunt orci ultricies tempor, porttitor arcu.
            Dignissim nibh vitae quam praesent placerat a, at odio.
          </p>
        </div>
        <div className="flex flex-col justify-center justify-items-center items-center gap-6 md:items-start">
          <span className="text-[#1E1F77] bg-[#CDCEFA] justify-self-end w-min text-5xl px-3 py-4 font-bold">
            4
          </span>
          <h3 className="text-navyBlue text-3xl font-bold justify-self-start">
            Entrega
          </h3>
          <p className="text-center max-w-xs md:text-left">
            Eros, semper tincidunt orci ultricies tempor, porttitor arcu.
            Dignissim nibh vitae quam praesent placerat a, at odio.
          </p>
        </div>
      </div>
    </section>
  );
}
