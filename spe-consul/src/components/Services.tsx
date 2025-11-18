import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardServicios from "./CardServicios";
import imgBanner from "../../public/imgBanner.png";
import AOS from "aos";
import "aos/dist/aos.css";

type valoresProps = { id?: string };

function Services({ id }: valoresProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="flex flex-col gap-6 items-center justify-center bg-[#003DA6] md:w-[82%] w-[90%]  mx-auto rounded-3xl py-10 px-8"
      id={id}
      data-aos="fade"
      data-aos-duration="1200"
    >
      <div
        className="flex gap-2 text-center justify-center"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <p className="font-bold text-4xl md:text-5xl text-white">
          {t("servicios.titulo")}
        </p>
        <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
          {t("servicios.titulo2")}
        </p>
      </div>

      <div
        className="flex flex-col gap-6 justify-center items-center xl:w-[90%] md:w-[90%]"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <CardServicios
          img={imgBanner}
          titulo={t("servicios.MediaRelations.titulo")}
          descripcion1={t("servicios.MediaRelations.descripcion1")}
          descripcion2={t("servicios.MediaRelations.descripcion2")}
          descripcion3={t("servicios.MediaRelations.descripcion3")}
          descripcion4={t("servicios.MediaRelations.descripcion4")}
        />
        <CardServicios
          img={imgBanner}
          titulo={t("servicios.PublicAffairs.titulo")}
          descripcion1={t("servicios.PublicAffairs.descripcion1")}
          descripcion2={t("servicios.PublicAffairs.descripcion2")}
          descripcion3={t("servicios.PublicAffairs.descripcion3")}
          descripcion4={t("servicios.PublicAffairs.descripcion4")}
          descripcion5={t("servicios.PublicAffairs.descripcion5")}
          reverse={true}
        />
        <CardServicios
          img={imgBanner}
          titulo={t("servicios.StrategicMarketing.titulo")}
          descripcion1={t("servicios.StrategicMarketing.descripcion1")}
          descripcion2={t("servicios.StrategicMarketing.descripcion2")}
          descripcion3={t("servicios.StrategicMarketing.descripcion3")}
          descripcion4={t("servicios.StrategicMarketing.descripcion4")}
          descripcion5={t("servicios.StrategicMarketing.descripcion5")}
          descripcion6={t("servicios.StrategicMarketing.descripcion6")}
          descripcion7={t("servicios.StrategicMarketing.descripcion7")}
          descripcion8={t("servicios.StrategicMarketing.descripcion8")}
        />
        {showMore && (
          <>
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.AnalysisAndProjectionOfVariables.titulo")}
              descripcion1={t(
                "servicios.AnalysisAndProjectionOfVariables.descripcion1"
              )}
              descripcion2={t(
                "servicios.AnalysisAndProjectionOfVariables.descripcion2"
              )}
              descripcion3={t(
                "servicios.AnalysisAndProjectionOfVariables.descripcion3"
              )}
              descripcion4={t(
                "servicios.AnalysisAndProjectionOfVariables.descripcion4"
              )}
              descripcion5={t(
                "servicios.AnalysisAndProjectionOfVariables.descripcion5"
              )}
              reverse={true}
            />
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.DigitalStrategies.titulo")}
              descripcion1={t("servicios.DigitalStrategies.descripcion1")}
              descripcion2={t("servicios.DigitalStrategies.descripcion2")}
              descripcion3={t("servicios.DigitalStrategies.descripcion3")}
              descripcion4={t("servicios.DigitalStrategies.descripcion4")}
              descripcion5={t("servicios.DigitalStrategies.descripcion5")}
              descripcion6={t("servicios.DigitalStrategies.descripcion6")}
              descripcion7={t("servicios.DigitalStrategies.descripcion7")}
              descripcion8={t("servicios.DigitalStrategies.descripcion8")}
            />
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.CorporateImage.titulo")}
              descripcion1={t("servicios.CorporateImage.descripcion1")}
              descripcion2={t("servicios.CorporateImage.descripcion2")}
              descripcion3={t("servicios.CorporateImage.descripcion3")}
              descripcion4={t("servicios.CorporateImage.descripcion4")}
              descripcion5={t("servicios.CorporateImage.descripcion5")}
              descripcion6={t("servicios.CorporateImage.descripcion6")}
              descripcion7={t("servicios.CorporateImage.descripcion7")}
              reverse={true}
            />
          </>
        )}
        <div className="flex gap-4 mx-auto">
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 bg-white text-[#FF7C28] rounded-xl font-semibold hover:scale-105 transition-all cursor-pointer"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </button>
          <button
            onClick={() => {}}
            className="mt-4 px-6 py-2 bg-[#FF7C28] text-white rounded-xl font-semibold hover:scale-105 transition-all cursor-pointer"
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
