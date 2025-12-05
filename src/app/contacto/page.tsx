"use client";
import Header from "../../components/Header";
import Contactate from "../../components/Contactate";
import React from "react";
import Footer from "../../components/Footer";

function page() {
  return (
    <div>
      <Header />
      <Contactate id="contactate" />
      <Footer />
    </div>
  );
}

export default page;
