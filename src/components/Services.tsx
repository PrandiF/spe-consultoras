import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardServicios from "./CardServicios";
import imgBanner from "../../public/imgBanner.webp";
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
      className="flex flex-col gap-6 items-center justify-center bg-[#003DA6] md:w-[82%] w-[90%] mx-auto rounded-3xl py-10 px-8 shadow-[0_12px_20px_rgba(0,0,0,0.4)]"
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
          titulo={t("servicios.ComunicacionEstrategica.titulo")}
          descripcion1={t("servicios.ComunicacionEstrategica.descripcion1")}
          descripcion2={t("servicios.ComunicacionEstrategica.descripcion2")}
          descripcion3={t("servicios.ComunicacionEstrategica.descripcion3")}
        />
        <CardServicios
          img={imgBanner}
          titulo={t("servicios.MarketingInstitucional.titulo")}
          descripcion1={t("servicios.MarketingInstitucional.descripcion1")}
          descripcion2={t("servicios.MarketingInstitucional.descripcion2")}
          descripcion3={t("servicios.MarketingInstitucional.descripcion3")}
          descripcion4={t("servicios.MarketingInstitucional.descripcion4")}
          descripcion5={t("servicios.MarketingInstitucional.descripcion5")}
          reverse={true}
        />
        <CardServicios
          img={imgBanner}
          titulo={t("servicios.AsuntosPublicos.titulo")}
          descripcion1={t("servicios.AsuntosPublicos.descripcion1")}
          descripcion2={t("servicios.AsuntosPublicos.descripcion2")}
          descripcion3={t("servicios.AsuntosPublicos.descripcion3")}
          descripcion4={t("servicios.AsuntosPublicos.descripcion4")}
          descripcion5={t("servicios.AsuntosPublicos.descripcion5")}
          descripcion6={t("servicios.AsuntosPublicos.descripcion6")}
          descripcion7={t("servicios.AsuntosPublicos.descripcion7")}
        />
        {showMore && (
          <>
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.EstrategiasDigitales.titulo")}
              descripcion1={t("servicios.EstrategiasDigitales.descripcion1")}
              descripcion2={t("servicios.EstrategiasDigitales.descripcion2")}
              descripcion3={t("servicios.EstrategiasDigitales.descripcion3")}
              descripcion4={t("servicios.EstrategiasDigitales.descripcion4")}
              descripcion5={t("servicios.EstrategiasDigitales.descripcion5")}
              reverse={true}
            />
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.ImagenCorporativa.titulo")}
              descripcion1={t("servicios.ImagenCorporativa.descripcion1")}
              descripcion2={t("servicios.ImagenCorporativa.descripcion2")}
              descripcion3={t("servicios.ImagenCorporativa.descripcion3")}
              descripcion4={t("servicios.ImagenCorporativa.descripcion4")}
              descripcion5={t("servicios.ImagenCorporativa.descripcion5")}
            />
            <CardServicios
              img={imgBanner}
              titulo={t("servicios.CapacitacionDeVoceros.titulo")}
              descripcion1={t("servicios.CapacitacionDeVoceros.descripcion1")}
              descripcion2={t("servicios.CapacitacionDeVoceros.descripcion2")}
              descripcion3={t("servicios.CapacitacionDeVoceros.descripcion3")}
              descripcion4={t("servicios.CapacitacionDeVoceros.descripcion4")}
              descripcion5={t("servicios.CapacitacionDeVoceros.descripcion5")}
              reverse={true}
            />
          </>
        )}
        <div className="flex gap-4 mx-auto">
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 bg-[#FF7C28] text-white rounded-xl font-semibold hover:scale-105 transition-all cursor-pointer"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
