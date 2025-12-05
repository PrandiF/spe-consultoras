"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../public/logo.webp";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Header() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // cerrar el menú si está en mobile
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-300 z-50 md:rounded-b-4xl rounded-b-3xl"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div
        className="flex justify-between items-center px-6 md:px-32 py-4"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        {/* Logo */}
        <div
          onClick={() => handleScroll("inicio")}
          className="cursor-pointer flex items-center"
        >
          <Image
            src={logo}
            alt="SpE Consultoras"
            className="md:w-auto xl:h-10 w-[80%] h-6"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg items-center">
          <Link
            href="/"
            className="relative text-[#003DA6] font-sans font-semibold cursor-pointer group"
          >
            <span className="relative">
              {t("menu.inicio")}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#003DA6] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/nuestra-empresa"
            className="relative text-[#003DA6] font-sans font-semibold cursor-pointer group"
          >
            <span className="relative">
              {t("menu.nuestraEmpresa")}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#003DA6] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>

          <Link
            href="/contacto"
            className="text-white font-sans bg-[#FF7C28] font-semibold px-4 py-2 rounded-3xl hover:bg-[#e76b1f] transition cursor-pointer"
          >
            {t("menu.contacto")}
          </Link>

          {/* Flags */}
          <div className="flex items-center ml-2 space-x-3">
            <span
              onClick={() => changeLanguage("es")}
              className={`
      cursor-pointer text-sm font-semibold
      transition-opacity duration-300
      ${i18n.language === "es" ? "opacity-100" : "opacity-40"}
    `}
            >
              ESP
            </span>

            <span
              onClick={() => changeLanguage("en")}
              className={`
      cursor-pointer text-sm font-semibold
      transition-opacity duration-300
      ${i18n.language === "en" ? "opacity-100" : "opacity-40"}
    `}
            >
              ING
            </span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#003DA6] focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-white border-t border-gray-200 py-4 pl-4 space-y-4 text-lg font-semibold rounded-b-3xl">
          <Link
            href="/"
            className="relative text-[#003DA6] font-sans font-semibold cursor-pointer group"
          >
            <span className="relative">
              {t("menu.inicio")}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#003DA6] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/nuestra-empresa"
            className="relative text-[#003DA6] font-sans font-semibold cursor-pointer group"
          >
            <span className="relative">
              {t("menu.nuestraEmpresa")}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#003DA6] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>
          <Link
            href="/contacto"
            className="text-white bg-[#FF7C28] px-4 py-2 rounded-3xl hover:bg-[#e76b1f] transition"
          >
            {t("menu.contacto")}
          </Link>

          {/* Flags */}
          <div className="flex items-center ml-2 space-x-3">
            <span
              onClick={() => changeLanguage("es")}
              className={`
      cursor-pointer text-sm font-semibold
      transition-opacity duration-300
      ${i18n.language === "es" ? "opacity-100" : "opacity-40"}
    `}
            >
              ESP
            </span>

            <span
              onClick={() => changeLanguage("en")}
              className={`
      cursor-pointer text-sm font-semibold
      transition-opacity duration-300
      ${i18n.language === "en" ? "opacity-100" : "opacity-40"}
    `}
            >
              ING
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
