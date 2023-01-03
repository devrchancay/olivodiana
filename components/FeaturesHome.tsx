import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Derecho Constitucional",
    description:
      "Me especializo en conocer sobre los medios más adecuados para tutelar los derechos fundamentales enmarcados en la Constitución y en los Tratados Internacionales de derechos Humanos, presentando y defendiendo todas las garantías jurisdiccionales que se encuentran dentro de las normas ecuatorianas.",
    icon: ScaleIcon,
  },
  {
    name: "Derecho Civil",
    description:
      "Presto asesoramiento y representación a empresas y particulares en todo lo relacionado con el Derecho Civil, poniendo a disposición de nuestros clientes lo mejor en asesoramiento, asistencia y defensa de toda clase de contratos y juicios civiles, para reclamar o defender sus derechos, presentando o contestando demandas, ejecutando documentos públicos, reclamando deudas o recurriendo las sentencias atendiendo siempre a sus intereses.",
    icon: ScaleIcon,
  },
  {
    name: "Derecho penal",
    description:
      "Ofrezco el servicio de asistencia y defensa en juicio para cualquier implicado o perjudicado en el ámbito penal. Basados en nuestra amplia experiencia profesional y en una relación de estricta confianza entre cliente y abogado, nos adecuamos a cada caso garantizando derechos.",
    icon: ScaleIcon,
  },
  {
    name: "Derecho Familiar",
    description:
      "Mí trabajo, en cada proceso, es realizado asegurando el respeto de las partes y sus necesidades. Con métodos ágiles y efectivos de acuerdo a las necesidades de nuestros clientes en divorcios, liquidación de sociedad conyugal, proceso de custodia y cuidado personal, proceso de regulación de visitas y de alimento",
    icon: ScaleIcon,
  },
  {
    name: "Derecho Laboral",
    description:
      "Protejo todos sus derechos laborales, con especial atención a relaciones de empleo que cesaron por causas injustas. Somos especialistas en demandas por despidos injustos, cobro de indemnizaciones, salarios y prestaciones sociales.",
    icon: ScaleIcon,
  },
  {
    name: "Derecho Administrativo",
    description:
      "Te acompaño y asesoro en todos los asuntos legales relacionados a empresas, sociedades y marcas, velando por el éxito de las relaciones comerciales, tanto individuales como empresariales para alcanzar sus objetivos.",
    icon: ScaleIcon,
  },
];

export default function FeatureHome() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-rob-roy-600">
            Quien soy
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Abg. Diana Olivo Moreira
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Soy Diana Olivo y me especializo en brindar asesoría y defensoria
            técnica legal de alta calidad. Con más de 5 años de experiencia en
            el campo, he adquirido un amplio conocimiento técnico en diversas
            áreas del derecho y he ayudado a innumerables clientes a resolver
            sus problemas legales de manera eficiente.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rob-roy-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
