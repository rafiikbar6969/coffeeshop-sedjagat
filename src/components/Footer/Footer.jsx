import React from "react";
import "./css/Styles.css";
import "./css/@media.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Sedjagat</h1>
          <p>Tempat Kopi idamanmu</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-behance-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bot">
        <div>
          <h4>layanan Pelanggan</h4>
          <a href="">0878738232</a>
        </div>
        <div>
          <h4>Lokasi Kami</h4>
          <a href="">0878738232</a>
        </div>
        <div>
          <h4>Jam Operasional</h4>
          <a href="">0878738232</a>
        </div>
        <div>
          <h4>Lainya</h4>
          <a href="">0878738232</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
