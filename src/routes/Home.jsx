import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Barber from "../components/Barber/Barber";
import Layanan from "../components/Layanan/Layanan";
import Footer from "../components/Footer/Footer";
import gambar from "/src/assets/hero5.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={gambar}
        title="SEDJAGAT"
        text="Seduhan Rasa, Sedjagat Cerita"
        buttonText="Order Now"
        url="/"
        buttonClass="show"
      />
      <Barber />
      <Layanan />
      <Footer />
    </>
  );
};

export default Home;
