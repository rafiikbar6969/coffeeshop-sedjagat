import React from "react";
import Hero from "../components/hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import gambar from "/src/assets/contact.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={gambar} title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
