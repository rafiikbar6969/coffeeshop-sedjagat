import React from "react";
import Hero from "../components/hero/hero";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layanan from "../components/layanan/layanan";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="/src/assets/service.jpg"
        title="Service"
      />
      <Layanan />
      <Footer />
    </>
  );
};

export default Service;
