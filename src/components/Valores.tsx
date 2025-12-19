import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardValores from "./CardValores";
import Carousel from "./Carousel";
import imgConfidencialidad from "../../public/valores/imgConfidencialidad.webp";
import imgVocacion from "../../public/valores/imgVocacion.webp";
import imgExperiencia from "../../public/valores/imgExperiencia.webp";
import imgProfesionalismo from "../../public/valores/imgProfesionalismo.webp";
import imgCreatividad from "../../public/valores/imgCreatividad.webp";
import imgFlexibilidad from "../../public/valores/imgFlexibilidad.webp";
import imgEtica from "../../public/valores/imgEtica.webp";
import imgConsistencia from "../../public/valores/imgConsistencia.webp";
import confidencialidad from "../../public/valores/confidencialidad.webp";
import creatividad from "../../public/valores/creatividad.webp";
import experiencia from "../../public/valores/experiencia.webp";
import profesionalismo from "../../public/valores/profesionalismo.webp";
import vocacion from "../../public/valores/vocacion.webp";
import etica from "../../public/valores/etica.webp";
import coherencia from "../../public/valores/coherencia.webp";
import flexibilidad from "../../public/valores/flexibilidad.webp";
import AOS from "aos";
import "aos/dist/aos.css";

type valoresProps = { id?: string };

function Valores({ id }: valoresProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="relative z-10  xl:w-[90%] md:w-[90%] mx-auto px-8 py-16 flex flex-col gap-15"
      id={id}
    >
      <div
        className="flex gap-2 text-center justify-center"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <p className="font-bold text-4xl md:text-5xl text-[#003DA6]">
          {t("valores.titulo1")}
        </p>
        <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
          {t("valores.titulo2")}
        </p>
      </div>
      <div
        className="hidden xl:grid md:grid md:gap-10 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-8 sm:grid-rows-4 lg:grid-rows-2 mx-auto xl:w-[82%]"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <CardValores
          img={experiencia}
          valor="experiencia"
          imgCirculoAzul={imgExperiencia}
        />
        <CardValores
          img={profesionalismo}
          valor="profesionalismo"
          imgCirculoAzul={imgProfesionalismo}
        />
        <CardValores
          img={creatividad}
          valor="creatividad"
          imgCirculoAzul={imgCreatividad}
        />
        <CardValores
          img={flexibilidad}
          valor="flexibilidad"
          imgCirculoAzul={imgFlexibilidad}
        />
        <CardValores img={etica} valor="etica" imgCirculoAzul={imgEtica} />
        <CardValores
          img={confidencialidad}
          valor="confidencialidad"
          imgCirculoAzul={imgConfidencialidad}
          confidencialidad={true}
        />
        <CardValores
          img={vocacion}
          valor="compromiso"
          imgCirculoAzul={imgVocacion}
        />
        <CardValores
          img={coherencia}
          valor="consistencia"
          imgCirculoAzul={imgConsistencia}
        />
      </div>

      <div
        className="w-full mx-auto flex md:hidden"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Carousel>
          <CardValores
            img={experiencia}
            valor="experiencia"
            imgCirculoAzul={imgExperiencia}
          />
          <CardValores
            img={profesionalismo}
            valor="profesionalismo"
            imgCirculoAzul={imgProfesionalismo}
          />
          <CardValores
            img={creatividad}
            valor="creatividad"
            imgCirculoAzul={imgCreatividad}
          />
          <CardValores
            img={flexibilidad}
            valor="flexibilidad"
            imgCirculoAzul={imgFlexibilidad}
          />
          <CardValores img={etica} valor="etica" imgCirculoAzul={imgEtica} />
          <CardValores
            img={confidencialidad}
            valor="confidencialidad"
            imgCirculoAzul={imgConfidencialidad}
          />
          <CardValores
            img={vocacion}
            valor="compromiso"
            imgCirculoAzul={imgVocacion}
          />
          <CardValores
            img={coherencia}
            valor="consistencia"
            imgCirculoAzul={imgConsistencia}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Valores;
