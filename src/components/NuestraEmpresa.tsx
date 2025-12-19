import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Parentesis from "./Parentesis";

type nuestraEmpresaProps = { id?: string };

function NuestraEmpresa({ id }: nuestraEmpresaProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div
      className="relative xl:w-[82%] w-[90%] mx-auto flex flex-col items-center justify-start overflow-hidden mt-[8%]  bg-[#F0F0F0] rounded-2xl shadow-[0_12px_20px_rgba(0,0,0,0.4)]"
      id={id}
      data-aos="fade"
      data-aos-duration="1000"
    >
      {/* Contenido encima */}
      <div
        className="relative z-10 w-full  mx-auto px-8 py-10 flex flex-col xl:gap-5 md:gap-3 gap-10"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          className="flex gap-2 text-center justify-center"
          data-aos="fade"
          data-aos-duration="1000"
          // data-aos-delay="500"
        >
          <p className="font-bold text-4xl md:text-5xl text-[#003DA6]">
            {t("nuestraEmpresa.titulo1")}
          </p>
          {i18n.language === "en" && (
            <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
              {t("nuestraEmpresa.titulo2")}
            </p>
          )}
        </div>

        <p
          className="text-[#003DA6] text-center md:text-2xl text-xl mb-10"
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
        <Parentesis />
      </div>
    </div>
  );
}

export default NuestraEmpresa;
