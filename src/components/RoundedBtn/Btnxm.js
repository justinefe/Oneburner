import React from "react";
import dropRight from "../../assets/dropRight.png";
import "./Button.css";
const Button = ({ title }) => {
  return (
    <div className="btnxm">
      <button>{title ? title : "Trial for free"}</button>
      <img src={dropRight} alt="" />
    </div>
  );
};

export default Button;
