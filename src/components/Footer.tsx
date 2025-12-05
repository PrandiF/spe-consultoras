import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logoBlanco.webp";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import RRPPimg from "../../public/consejoRRPP.webp";
import adepaImg from "../../public/adepa.webp";
import dircomImg from "../../public/dircoms.webp";
function Footer() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col md:gap-10  gap-6 rounded-t-3xl bg-[#003DA6] shadow-[0_-8px_20px_rgba(0,0,0,0.3)] md:py-10 py-4 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="md:flex w-full">
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
              className="text-[#FF7C28] hover:underline cursor-pointer"
              href="mailto:info@speconsultores.com.ar"
              target="_blank"
            >
              {t("contacto.email")}
            </a>
            <p className="text-[#FF7C28]">{t("contacto.telefono")}</p>
            <a
              href="https://www.google.com/maps/place/Migueletes+1646,+C1426BUZ+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.560491,-58.4457059,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5c97f0a31bf:0x14a13f9aea7eaa3c!8m2!3d-34.560491!4d-58.443131!16s%2Fg%2F11whscbynn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-[#FF7C28] hover:underline cursor-pointer"
            >
              {t("contacto.direccion")}
            </a>
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
              href="mailto:info@speconsultores.com.ar"
              className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100"
            >
              <FaEnvelope className="text-white text-sm" />
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
      </div>

      <div
        className="md:hidden flex justify-center items-start gap-6"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex flex-col items-start justify-start  text-start gap-2 md:pl-0 pl-3">
          <h1 className="text-white text-xl">{t("contacto.titulo")}</h1>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#FF7C28]">{t("contacto.email")}</p>
            <a
              className="text-[#FF7C28] hover:underline"
              href={`tel:${t("contacto.telefono")}`}
            >
              {t("contacto.telefono")}
            </a>
            <a
              href="https://www.google.com/maps/place/Migueletes+1646,+C1426BUZ+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.560491,-58.4457059,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5c97f0a31bf:0x14a13f9aea7eaa3c!8m2!3d-34.560491!4d-58.443131!16s%2Fg%2F11whscbynn?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-[#FF7C28] hover:underline cursor-pointer"
            >
              {t("contacto.direccion")}
            </a>
          </div>
        </div>
        <div className="flex  flex-col md:items-start md:justify-start items-center justify-center text-center  md:text-start gap-2">
          <h1 className="text-white text-xl">{t("footer.redesSociales")}</h1>
          <div className="flex gap-2">
            {/* Facebook */}
            {/* <div className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100">
              <FaFacebookF className="text-white text-sm" />
            </div> */}

            {/* Instagram */}
            <a
              href="mailto:info@speconsultores.com.ar"
              className="bg-[#FF7C28] w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#ee6611] transition-all duration-100"
            >
              <FaEnvelope className="text-white text-sm" />
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
      </div>
      <div
        className="flex gap-12 w-full justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image
          src={RRPPimg}
          alt="logo"
          className="md:w-[8%] w-[15%] brightness-0 invert contrast-200"
        />
        <Image
          src={adepaImg}
          alt="logo"
          className="md:w-[8%] w-[15%] brightness-0 invert contrast-200"
        />
        <Image
          src={dircomImg}
          alt="logo"
          className="md:w-[8%] w-[15%] brightness-0 invert contrast-200"
        />
      </div>
    </div>
  );
}

export default Footer;
