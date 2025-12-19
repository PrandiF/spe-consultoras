import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import LinkedInCard from "./LinkedinCard";
import elCronistaImg from "../../public/trabajos/elCronista.webp";
import elecciones2025Img from "../../public/trabajos/elecciones2025.webp";
import stellantisImg from "../../public/trabajos/stellantis.webp";
import jornadaDialogoImg from "../../public/trabajos/jornadaDeDialogo.webp";
import foodMarketImg from "../../public/trabajos/theFoodMarket.webp";
import gasYPetroleoImg from "../../public/trabajos/institutoDelGasYPetroleo.webp";
import morbidelliImg from "../../public/trabajos/morbidelli.webp";
import greenhushingImg from "../../public/trabajos/greenhushing.webp";
import logicaImg from "../../public/trabajos/logica.webp";
import expoAgroImg from "../../public/trabajos/expoAgro2025.webp";

type trabajosProps = { id?: string };

function Trabajos({ id }: trabajosProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col gap-6 items-center justify-center md:w-[82%] w-[90%]  mx-auto rounded-3xl  "
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
        <p className="font-bold text-4xl md:text-5xl text-[#003DA6]">
          {t("trabajos.titulo1")}
        </p>
        <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
          {t("trabajos.titulo2")}
        </p>
      </div>

      <div className="md:flex hidden flex-wrap gap-6 justify-center xl:w-[82%] w-full mx-auto">
        <Carousel showDots twoPerView>
          <LinkedInCard
            imagen={elCronistaImg}
            fecha={t("trabajos.elCronista.fecha")}
            descripcion={t("trabajos.elCronista.descripcion")}
            url={t("trabajos.elCronista.url")}
          />
          <LinkedInCard
            imagen={elecciones2025Img}
            fecha={t("trabajos.elecciones2025.fecha")}
            descripcion={t("trabajos.elecciones2025.descripcion")}
            url={t("trabajos.elecciones2025.url")}
          />
          <LinkedInCard
            imagen={stellantisImg}
            fecha={t("trabajos.stellantis.fecha")}
            descripcion={t("trabajos.stellantis.descripcion")}
            url={t("trabajos.stellantis.url")}
          />
          <LinkedInCard
            imagen={jornadaDialogoImg}
            fecha={t("trabajos.jornadaDialogo.fecha")}
            descripcion={t("trabajos.jornadaDialogo.descripcion")}
            url={t("trabajos.jornadaDialogo.url")}
          />
          <LinkedInCard
            imagen={foodMarketImg}
            fecha={t("trabajos.theFoodMarket.fecha")}
            descripcion={t("trabajos.theFoodMarket.descripcion")}
            url={t("trabajos.theFoodMarket.url")}
          />
          <LinkedInCard
            imagen={gasYPetroleoImg}
            fecha={t("trabajos.institutoDelGasYPetroleo.fecha")}
            descripcion={t("trabajos.institutoDelGasYPetroleo.descripcion")}
            url={t("trabajos.institutoDelGasYPetroleo.url")}
          />
          <LinkedInCard
            imagen={morbidelliImg}
            fecha={t("trabajos.morbidelli.fecha")}
            descripcion={t("trabajos.morbidelli.descripcion")}
            url={t("trabajos.morbidelli.url")}
          />
          <LinkedInCard
            imagen={greenhushingImg}
            fecha={t("trabajos.greenhushing.fecha")}
            descripcion={t("trabajos.greenhushing.descripcion")}
            url={t("trabajos.greenhushing.url")}
          />
          <LinkedInCard
            imagen={logicaImg}
            fecha={t("trabajos.logica.fecha")}
            descripcion={t("trabajos.logica.descripcion")}
            url={t("trabajos.logica.url")}
          />
          <LinkedInCard
            imagen={expoAgroImg}
            fecha={t("trabajos.expoAgro2025.fecha")}
            descripcion={t("trabajos.expoAgro2025.descripcion")}
            url={t("trabajos.expoAgro2025.url")}
          />
        </Carousel>
      </div>

      <div className="w-full mx-auto overflow-visible flex md:hidden">
        <Carousel>
          <LinkedInCard
            imagen={elCronistaImg}
            fecha={t("trabajos.elCronista.fecha")}
            descripcion={t("trabajos.elCronista.descripcion")}
            url={t("trabajos.elCronista.url")}
          />
          <LinkedInCard
            imagen={elecciones2025Img}
            fecha={t("trabajos.elecciones2025.fecha")}
            descripcion={t("trabajos.elecciones2025.descripcion")}
            url={t("trabajos.elecciones2025.url")}
          />
          <LinkedInCard
            imagen={stellantisImg}
            fecha={t("trabajos.stellantis.fecha")}
            descripcion={t("trabajos.stellantis.descripcion")}
            url={t("trabajos.stellantis.url")}
          />
          <LinkedInCard
            imagen={jornadaDialogoImg}
            fecha={t("trabajos.jornadaDialogo.fecha")}
            descripcion={t("trabajos.jornadaDialogo.descripcion")}
            url={t("trabajos.jornadaDialogo.url")}
          />
          <LinkedInCard
            imagen={foodMarketImg}
            fecha={t("trabajos.theFoodMarket.fecha")}
            descripcion={t("trabajos.theFoodMarket.descripcion")}
            url={t("trabajos.theFoodMarket.url")}
          />
          <LinkedInCard
            imagen={gasYPetroleoImg}
            fecha={t("trabajos.institutoDelGasYPetroleo.fecha")}
            descripcion={t("trabajos.institutoDelGasYPetroleo.descripcion")}
            url={t("trabajos.institutoDelGasYPetroleo.url")}
          />
          <LinkedInCard
            imagen={morbidelliImg}
            fecha={t("trabajos.morbidelli.fecha")}
            descripcion={t("trabajos.morbidelli.descripcion")}
            url={t("trabajos.morbidelli.url")}
          />
          <LinkedInCard
            imagen={greenhushingImg}
            fecha={t("trabajos.greenhushing.fecha")}
            descripcion={t("trabajos.greenhushing.descripcion")}
            url={t("trabajos.greenhushing.url")}
          />
          <LinkedInCard
            imagen={logicaImg}
            fecha={t("trabajos.logica.fecha")}
            descripcion={t("trabajos.logica.descripcion")}
            url={t("trabajos.logica.url")}
          />
          <LinkedInCard
            imagen={expoAgroImg}
            fecha={t("trabajos.expoAgro2025.fecha")}
            descripcion={t("trabajos.expoAgro2025.descripcion")}
            url={t("trabajos.expoAgro2025.url")}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Trabajos;
