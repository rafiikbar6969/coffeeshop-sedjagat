import React from "react";
import "./css/Styles.css";
import "./css/@media.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Kirimkan Pesan mu</h1>
      <form action="">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Kirim Pesan Disini</button>
      </form>
    </div>
  );
};

export default ContactForm;
