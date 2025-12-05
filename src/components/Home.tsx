import Image from "next/image";
import { useEffect } from "react";
import banner from "../../public/imgBanner.webp";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

type homeProps = { id?: string };

function Home({ id }: homeProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      className="relative w-full pt-[20%] md:pt-[10%] md:pb-[2%] flex flex-row items-center justify-center text-center"
      id={id}
    >
      <div className="md:w-1/2 z-10 flex flex-col md:items-start md:justify-start md:text-start justify-center items-center md:pl-20 px-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight text-[#003DA6]"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("home.titulo1")}
        </h1>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight text-[#FF7C28]"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("home.titulo2")}
        </h1>
        <div className="md:w-[85%]">
          <p
            className="text-xl md:text-2xl mb-6 drop-shadow-md md:text-start text-[#003DA6]"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {t("home.descripcion")}
          </p>
        </div>
        <div
          className="md:hidden flex relative overflow-hidden rounded-2xl h-full shadow-2xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Image
            src={banner}
            alt="imgInicio"
            className="shadow-md w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #FF7C28 5%, transparent 30%)",
            }}
            data-aos="fade"
            data-aos-duration="1000"
          />
        </div>

        {/* Botones opcionales */}

        <div
          className="flex gap-4 md:mt-4 mt-12"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <button
            onClick={() => handleScroll("servicios")}
            className=" px-6 py-3 rounded-3xl font-semibold bg-[#003DA6] hover:scale-105 text-white transition-all duration-300 cursor-pointer shadow-xl"
          >
            {t("home.botones.servicios")}
          </button>
          <button
            onClick={() => handleScroll("trabajos")}
            className="bg-[#FF7C28] px-6 py-3 rounded-3xl font-semibold hover:scale-105 text-white transition-all duration-300 cursor-pointer shadow-xl"
          >
            {t("home.botones.conoceMas")}
          </button>
        </div>
      </div>
      <div className="w-1/2 pr-20 md:flex hidden">
        <div
          className="relative overflow-hidden rounded-2xl h-full shadow-2xl"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Image
            src={banner}
            alt="imgInicio"
            className="shadow-md w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #FF7C28 5%, transparent 30%)",
            }}
            data-aos="fade"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
