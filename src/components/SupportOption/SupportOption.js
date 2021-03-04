import React from "react";
import "./SupportOption.css";

const SupportOption = ({ img, title }) => {
  return (
    <div className="supportOption">
      <img src={img} className="supportOption_img" alt="" />{" "}
      <span>{title}</span>
    </div>
  );
};

export default SupportOption;
