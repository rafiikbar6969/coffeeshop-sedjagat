import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Barber from "../components/Barber/Barber";
import Layanan from "../components/Layanan/Layanan";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="/src/assets/hero5.jpg"
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
