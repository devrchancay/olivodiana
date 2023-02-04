import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeHero from "components/HomeHero";
import FeatureHome from "../components/FeaturesHome";
import HomeCta from "../components/HomeCta";
import Footer from "../components/Footer";
import OtherInfo from "../components/OtherInfoHome";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("../components/Testimonial"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const resquest = await fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1RQenm53VanLXaaWj13vQVsit6MW7ziQ9JMVsLdCSj_Q/values/Recomendacion!A2:D?key=AIzaSyAM2ZUUea4aIEZacnYM5MFnkGrU7PZsAn8"
  );

  const response = await resquest.json();

  const testimonials = response.values.map((t: any) => {
    const [time, description, name, role] = t;
    return {
      time,
      description,
      name,
      role,
    };
  });

  return {
    props: {
      testimonials,
    },
  };
};

export interface ITestimony {
  time: string;
  description: string;
  name: string;
  role: string;
}

export default function Home({ testimonials }: { testimonials: ITestimony[] }) {
  return (
    <>
      <Head>
        <title>Abogada Diana Olivo Moreira</title>
        <meta
          name="description"
          content="Si estás enfrentando un problema legal y necesitas una asesoría de confianza, no dudes en contactarme. Estoy dispuesta a ayudarte a encontrar las mejores soluciones y a luchar por tus derechos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <FeatureHome />
      <HomeCta />
      <Testimonials testimonials={testimonials} />
      <OtherInfo />
      <Footer />
    </>
  );
}
