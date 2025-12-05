"use client";
import Header from "../../components/Header";
import NuestraEmpresa from "../../components/NuestraEmpresa";
import Staff from "../../components/Staff";
import Valores from "../../components/Valores";
import React from "react";
import Footer from "../../components/Footer";
import HomeNuestraEmpresa from "../../components/HomeNuestraEmpresa";

function page() {
  return (
    <div>
      <Header />
      <HomeNuestraEmpresa />
      <NuestraEmpresa id="nuestra-empresa" />
      <Valores id="valores" />
      <Staff id="staff" />
      <Footer />
    </div>
  );
}

export default page;
