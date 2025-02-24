import React from "react";
import Hero from "../components/hero/hero";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="/src/assets/contact.jpg"
        title="Contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
