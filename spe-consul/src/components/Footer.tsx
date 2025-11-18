import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../public/logoBlanco.png";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="flex md:flex-row flex-col md:gap-0 gap-6 rounded-t-3xl bg-[#003DA6] shadow-[0_-8px_20px_rgba(0,0,0,0.3)] md:py-15 py-4 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="flex flex-col justify-center md:text-start md:items-start items-center md:w-[50%] md:px-25 px-6 text-center gap-2"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Image src={logo} alt="logo" className="w-[40%]" />
        <p className="text-white">{t("footer.texto1")}</p>
      </div>
      <div
        className="md:w-[25%] md:flex hidden flex-col md:items-start md:justify-start justify-center items-center text-start gap-2"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h1 className="text-white text-xl">{t("contacto.titulo")}</h1>
        <div className="flex flex-col gap-0.5">
          <a
            className="text-[#FF7C28] hover:underline"
            href="mailto:info@speconsultores.com.ar"
            target="_blank"
          >
            {t("contacto.email")}
          </a>
          <p className="text-[#FF7C28]">{t("contacto.telefono")}</p>
          <p className="text-[#FF7C28]">{t("contacto.direccion")}</p>
        </div>
      </div>
      <div
        className="md:w-[25%] md:flex hidden flex-col md:items-start md:justify-start justify-center items-center text-start gap-2"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h1 className="text-white text-xl">{t("footer.redesSociales")}</h1>
        <div className="flex gap-2">
          {/* Facebook */}
          {/* <div className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100">
            <FaFacebookF className="text-white text-sm" />
          </div> */}

          {/* Instagram */}
          <a
            className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100"
            href=""
            target="_blank"
          >
            <FaInstagram className="text-white text-sm" />
          </a>

          {/* LinkedIn */}
          <a
            className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100"
            href="https://www.linkedin.com/company/spe-consultores/"
            target="_blank"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
        </div>
      </div>

      <div
        className="md:hidden flex justify-center items-start gap-6"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-start justify-start  text-start gap-2">
          <h1 className="text-white text-xl">{t("contacto.titulo")}</h1>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#FF7C28]">{t("contacto.email")}</p>
            <p className="text-[#FF7C28]">{t("contacto.telefono")}</p>
            <p className="text-[#FF7C28]">{t("contacto.direccion")}</p>
          </div>
        </div>
        <div className="flex  flex-col items-start justify-start  text-start gap-2">
          <h1 className="text-white text-xl">{t("footer.redesSociales")}</h1>
          <div className="flex gap-2">
            {/* Facebook */}
            <div className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100">
              <FaFacebookF className="text-white text-sm" />
            </div>

            {/* Instagram */}
            <div className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100">
              <FaInstagram className="text-white text-sm" />
            </div>

            {/* LinkedIn */}
            <div className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100">
              <FaLinkedinIn className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
