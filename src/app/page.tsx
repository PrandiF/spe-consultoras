"use client";
import Header from "../components/Header";
import "../i18n/i18n";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Services from "../components/Services";
import { useTranslation } from "react-i18next";
import BarraDatos from "../components/BarraDatos";
import Parentesis from "../components/Parentesis";
import Trabajos from "../components/Trabajos";
import Rubros from "../components/Rubros";
import ImpulsamosTuCom from "../components/ImpulsamosTuCom";

export default function page() {
  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto font-fira gap-12 flex flex-col">
      <Header />
      <Home />
      <Parentesis />
      <Trabajos id="trabajos" />
      <BarraDatos />
      <Services id="servicios" />
      <Rubros />
      <ImpulsamosTuCom />
      <Footer />
    </div>
  );
}
