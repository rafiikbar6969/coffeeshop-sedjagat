import React from "react";
import Hero from "../components/hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layanan from "../components/Layanan/Layanan";
import gambar from "/src/assets/service.jpg";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={gambar} title="Service" />
      <Layanan />
      <Footer />
    </>
  );
};

export default Service;
