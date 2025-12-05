import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function ImpulsamosTuCom() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="md:w-[82%] w-[90%]   mx-auto bg-[#F7F7F7] rounded-[40px] shadow-[0_6px_12px_rgba(0,0,0,0.4)] py-8 px-10 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-2"
      data-aos="fade"
      data-aos-duration="1200"
    >
      {/* Columna 1 */}
      <div className="md:w-1/3 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-[#003DA6] leading-tight">
          {t("impulsamosTuCom.titulo1")}
          <br />
          {t("impulsamosTuCom.titulo2")}
        </h2>
      </div>

      {/* Columna 2 */}
      <div className="md:w-1/3 flex items-center justify-center md:text-start text-center">
        <p className="text-[#003DA6] text-lg leading-relaxed">
          {t("impulsamosTuCom.text")}
        </p>
      </div>

      {/* Columna 3 */}
      <div className="md:w-1/3 flex justify-center">
        <button className="bg-[#FF7C28] px-10 py-4 rounded-full font-semibold text-white text-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          {t("impulsamosTuCom.boton")}
        </button>
      </div>
    </div>
  );
}

export default ImpulsamosTuCom;
