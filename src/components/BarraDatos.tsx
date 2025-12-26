import { useTranslation } from "react-i18next";
function BarraDatos() {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col md:flex-row justify-around bg-[#F0F0F0] md:w-[82%] w-[70%] mx-auto text-[#003DA6] rounded-3xl py-6 md:py-8 space-y-6 md:space-y-0 shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="flex flex-col items-center justify-center px-4">
        <p
          className="font-bold text-4xl xl:text-6xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          20
        </p>
        <p
          className="font-normal text-lg xl:text-xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {t("valores.estadisticas.años")}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center px-4">
        <p
          className="font-bold text-4xl xl:text-6xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          +50
        </p>
        <p
          className="font-normal text-lg xl:text-xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {t("valores.estadisticas.profesionales")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <p
          className="font-bold text-4xl xl:text-6xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          45
        </p>
        <p
          className="font-normal text-lg xl:text-xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {t("valores.estadisticas.clientes")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <p
          className="font-bold text-4xl xl:text-6xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          +100
        </p>
        <p
          className="font-normal text-lg xl:text-xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {t("valores.estadisticas.activaciones")}
        </p>
      </div>
    </div>
  );
}

export default BarraDatos;
