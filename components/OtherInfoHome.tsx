import Image from "next/image";

export default function OtherInfo() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              priority
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/img/lawyer-front.jpeg"
              width={768}
              height={1024}
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-base font-semibold text-rob-roy-300">
            Estoy dispuesta a ayudarte a encontrar la mejor solución
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white">
            Si estás enfrentando un problema legal no dudes en contactarme
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Soluciones legales efectivas para ti. Con años de experiencia y un
            enfoque personalizado, Diana Olivo está aquí para ayudarte a
            resolver tus preocupaciones legales. Confía en nosotros para
            defender tus derechos y lograr los resultados que mereces. ¡Agenda
            hoy mismo una consulta!
          </p>
        </div>
      </div>
    </div>
  );
}
