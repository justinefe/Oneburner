import React from "react";
import dropRight from "../../assets/dropRight.png";
import "./Button.scss";
const Button = ({ title }) => {
  return (
    <div className="button">
      <div>{title ? title : "Start free trial"}</div>
      <img src={dropRight} alt="" />
    </div>
  );
};

export default Button;
