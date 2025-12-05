import { useEffect } from "react";
import Carousel2 from "./Carousel2";
import CardRubros from "./CardRubros";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Rubros() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col md:flex-row justify-around bg-[#F0F0F0] md:w-[82%] w-[90%] mx-auto rounded-3xl py-6 md:py-8 space-y-6 md:space-y-0 shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
      data-aos="fade"
      data-aos-duration="1200"
    >
      <Carousel2>
        <CardRubros titulo={t("rubros.agropecuario")} />
        <CardRubros titulo={t("rubros.alimentacion")} orange />
        <CardRubros titulo={t("rubros.automotriz")} />
        <CardRubros titulo={t("rubros.electrodomesticos")} orange />
        <CardRubros titulo={t("rubros.energia")} />
        <CardRubros titulo={t("rubros.entretenimiento")} orange />
        <CardRubros titulo={t("rubros.financiero")} />
        <CardRubros titulo={t("rubros.mediosDeComunicacion")} orange />
        <CardRubros titulo={t("rubros.petroleoyGas")} />
        <CardRubros titulo={t("rubros.farmaceutico")} orange />
        <CardRubros titulo={t("rubros.serviciosPublicos")} />
        <CardRubros titulo={t("rubros.tecnologia")} orange />
      </Carousel2>
    </div>
  );
}

export default Rubros;
