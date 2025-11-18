import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";
import imgNuestraEmpresa from "../../public/nuestraEmpresa.webp";
import speBanner2 from "../../public/speBanner2.webp";
import AOS from "aos";
import "aos/dist/aos.css";

type nuestraEmpresaProps = { id?: string };

function NuestraEmpresa({ id }: nuestraEmpresaProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      id={id}
    >
      {/* Fondo dividido */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-white" /> {/* mitad superior */}
        <div className="h-1/2 bg-[#F0F0F0]" /> {/* mitad inferior */}
      </div>

      {/* Contenido encima */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:py-16 py-10 flex flex-col md:gap-15 gap-10">
        <div
          className="flex gap-2 text-center justify-center"
          data-aos="fade"
          data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <p className="font-bold text-4xl md:text-5xl text-[#003DA6]">
            {t("nuestraEmpresa.titulo1")}
          </p>
          <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
            {t("nuestraEmpresa.titulo2")}
          </p>
        </div>

        <p
          className="text-[#003DA6] text-center md:text-2xl text-xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Trans
            i18nKey="nuestraEmpresa.text1"
            components={{
              b: <b className="font-bold" />,
            }}
          />
        </p>
        <div className="w-full flex justify-between gap-12">
          <Image
            src={imgNuestraEmpresa}
            alt="Nuestra Empresa"
            className="md:w-1/2 md:h-[350px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
          <Image
            src={speBanner2}
            alt="Spe Banner 2"
            className="w-1/2 h-[350px] md:flex hidden"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>
        <div
          className="flex items-center justify-center mx-auto scale-[1.05] w-full sm:w-4/5 lg:w-1/2 aspect-4/1"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {/* Corchete izquierdo */}
          <span className="text-[#FF7C28] leading-none font-thin flex items-center text-[14vw] sm:text-[10vw] lg:text-[8vw]">
            [
          </span>
          <p className="text-[#003DA6] leading-none text-center mt-1 text-[4vw] sm:text-[2.5vw] lg:text-[1.3vw] font-light">
            {t("nuestraEmpresa.text2")}
          </p>

          {/* Corchete derecho */}
          <span className="text-[#FF7C28] leading-none font-thin flex items-center text-[14vw] sm:text-[10vw] lg:text-[8vw]">
            ]
          </span>
        </div>
      </div>
    </div>
  );
}

export default NuestraEmpresa;
