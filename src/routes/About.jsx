import React from "react";
import Hero from "../components/hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Tentang from "../components/Tentang/Tentang";
import gambar from "/src/assets/about.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={gambar} title="About" />
      <Tentang />
      <Footer />
    </>
  );
};

export default About;
