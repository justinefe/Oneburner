import React from "react";
import dropRight from "../../assets/dropRight.png";
import "./Button.css";
const Button = ({ title }) => {
  return (
    <div className="button">
      <button>{title ? title : "Start free trial"}</button>
      <img src={dropRight} alt="" />
    </div>
  );
};

export default Button;
