import React from "react";
import Header from "./Header";
import Home from "./Home";
import NuestraEmpresa from "./NuestraEmpresa";
import Valores from "./Valores";
import Services from "./Services";
import Staff from "./Staff";
import Contactate from "./Contactate";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="w-full mx-auto font-fira">
      <Header />
      <Home id="inicio" />
      <NuestraEmpresa id="nuestra-empresa" />
      <Valores id="valores" />
      <Services id="servicios" />
      <Staff id="staff" />
      <Contactate id="contactate" />
      <Footer />
    </div>
  );
}

export default Landing;
