export default function ContactoSection() {
  return (
    <section id="contacto">
      <div className="flex justify-center">
        <div className="">
          <h2 className="text-navyBlue text-4xl font-bold inline text-center">
            Contáctanos
          </h2>
          <hr className="bg-starCommandBlue" />
        </div>
      </div>
      <form className="flex flex-col bg-powderBlue px-6 gap-3 mt-10 py-6 rounded-brand lg:mx-56">
        <div className="flex flex-col gap-2">
          <label htmlFor="Nombre">Nombre</label>
          <input className="rounded-brand" id="Nombre" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Correo">Correo electrónico</label>
          <input className="rounded-brand" id="Correo" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="projectDescription">Nombre</label>
          <textarea
            className="rounded-brand"
            id="projectDescription"
            type="text"
          />
        </div>
        <input
          className="transition-all duration-200 filter hover:brightness-125 cursor-pointer bg-navyBlue rounded-brand text-whiteBlue font-bold py-2 mt-4"
          type="submit"
          value="Enviar"
        ></input>
      </form>
    </section>
  );
}
