import React from "react";
import "./css/Styles.css";
import "./css/@media.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="HeroIMG" />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.buttonClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
