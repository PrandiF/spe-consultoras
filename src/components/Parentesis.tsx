import { useTranslation } from "react-i18next";

function Parentesis() {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-center justify-center mx-auto scale-[1.05] w-[90%] sm:w-4/5 lg:w-1/2 aspect-4/1 gap-2"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {/* Corchete izquierdo */}
      <span className="text-[#FF7C28] leading-none font-thin flex items-center text-[18vw] sm:text-[10vw] lg:text-[8vw]">
        [
      </span>
      <p className="text-[#003DA6] leading-none text-center mt-1 text-[4vw] sm:text-[2.5vw] lg:text-[1.3vw] font-light">
        {t("nuestraEmpresa.text2")}
      </p>

      {/* Corchete derecho */}
      <span className="text-[#FF7C28] leading-none font-thin flex items-center text-[18vw] sm:text-[10vw] lg:text-[8vw]">
        ]
      </span>
    </div>
  );
}

export default Parentesis;
