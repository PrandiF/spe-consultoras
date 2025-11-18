import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardValores from "./CardValores";
import imgBanner from "../../public/imgBanner.png";
import Carousel from "./Carousel";
import imgConfidencialidad from "../../public/valores/imgConfidencialidad.png";
import imgVocacion from "../../public/valores/imgVocacion.png";
import imgExperiencia from "../../public/valores/imgExperiencia.png";
import imgProfesionalismo from "../../public/valores/imgProfesionalismo.png";
import imgCreatividad from "../../public/valores/imgCreatividad.png";
import imgFlexibilidad from "../../public/valores/imgFlexibilidad.png";
import imgEtica from "../../public/valores/imgEtica.png";
import imgConsistencia from "../../public/valores/imgConsistencia.png";
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
        className="hidden xl:grid md:grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-8 sm:grid-rows-4 lg:grid-rows-2 mx-auto md:w-[95%]"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <CardValores
          img={imgBanner}
          valor="experiencia"
          imgCirculoAzul={imgExperiencia}
        />
        <CardValores
          img={imgBanner}
          valor="profesionalismo"
          imgCirculoAzul={imgProfesionalismo}
        />
        <CardValores
          img={imgBanner}
          valor="creatividad"
          imgCirculoAzul={imgCreatividad}
        />
        <CardValores
          img={imgBanner}
          valor="flexibilidad"
          imgCirculoAzul={imgFlexibilidad}
        />
        <CardValores img={imgBanner} valor="etica" imgCirculoAzul={imgEtica} />
        <CardValores
          img={imgBanner}
          valor="confidencialidad"
          imgCirculoAzul={imgConfidencialidad}
        />
        <CardValores
          img={imgBanner}
          valor="compromiso"
          imgCirculoAzul={imgVocacion}
        />
        <CardValores
          img={imgBanner}
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
            img={imgBanner}
            valor="experiencia"
            imgCirculoAzul={imgExperiencia}
          />
          <CardValores
            img={imgBanner}
            valor="profesionalismo"
            imgCirculoAzul={imgProfesionalismo}
          />
          <CardValores
            img={imgBanner}
            valor="creatividad"
            imgCirculoAzul={imgCreatividad}
          />
          <CardValores
            img={imgBanner}
            valor="flexibilidad"
            imgCirculoAzul={imgFlexibilidad}
          />
          <CardValores
            img={imgBanner}
            valor="etica"
            imgCirculoAzul={imgEtica}
          />
          <CardValores
            img={imgBanner}
            valor="confidencialidad"
            imgCirculoAzul={imgConfidencialidad}
          />
          <CardValores
            img={imgBanner}
            valor="compromiso"
            imgCirculoAzul={imgVocacion}
          />
          <CardValores
            img={imgBanner}
            valor="consistencia"
            imgCirculoAzul={imgConsistencia}
          />
        </Carousel>
      </div>
      <div
        className="flex flex-col md:flex-row justify-around bg-[#F0F0F0] w-[95%] mx-auto text-[#003DA6] rounded-3xl py-6 md:py-8 space-y-6 md:space-y-0"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="flex flex-col items-center justify-center px-4">
          <p
            className="font-bold text-4xl md:text-6xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            20
          </p>
          <p
            className="font-normal text-lg md:text-xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {t("valores.estadisticas.años")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <p
            className="font-bold text-4xl md:text-6xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            +15
          </p>
          <p
            className="font-normal text-lg md:text-xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {t("valores.estadisticas.profesionales")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <p
            className="font-bold text-4xl md:text-6xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            +100
          </p>
          <p
            className="font-normal text-lg md:text-xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {t("valores.estadisticas.eventos")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <p
            className="font-bold text-4xl md:text-6xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            45
          </p>
          <p
            className="font-normal text-lg md:text-xl"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {t("valores.estadisticas.clientes")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Valores;
