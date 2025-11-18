import Image from "next/image";
import React, { useEffect } from "react";
import banner from "../../public/imgBanner.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

type homeProps = { id?: string };

function Home({ id }: homeProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center"
      id={id}
    >
      <Image
        src={banner}
        alt="Banner"
        fill
        className="object-cover brightness-90"
        priority
        data-aos="fade"
        data-aos-duration="1000"
      />
      <div className="absolute bottom-32 left-16 z-10 text-white flex flex-col items-start">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("home.titulo")}
        </h1>
        <div className="w-[85%]">
          <p
            className="text-xl md:text-2xl mb-6 drop-shadow-md text-start"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            {t("home.descripcion")}
          </p>
        </div>

        {/* Botones opcionales */}
        {/* 
        <div className="flex gap-4 mt-4">
          <button className="bg-[#FF7C28] px-6 py-3 rounded-3xl font-semibold hover:bg-[#e76b1f] transition">
            {t("home.contactanos")}
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-3xl font-semibold hover:bg-white hover:text-[#003DA6] transition">
            {t("home.conoceMas")}
          </button>
        </div> 
        */}
      </div>
      <div
        className="absolute inset-0 bg-black/50 z-0"
        data-aos="fade"
        data-aos-duration="1000"
      />
    </div>
  );
}

export default Home;
