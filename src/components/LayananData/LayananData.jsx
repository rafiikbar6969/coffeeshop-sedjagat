import React from "react";

const LayananData = (props) => {
  return (
    <div className="l-card">
      <div className="l-image">
        <img src={props.image} alt="gambar" />
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default LayananData;
