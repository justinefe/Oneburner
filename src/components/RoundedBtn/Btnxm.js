import React from "react";
import dropRight from "../../assets/dropRight.png";
import "./Button.scss";
const Button = ({ title }) => {
  return (
    <div className="btnxm">
      <div>{title ? title : "Trial for free"}</div>
      <img src={dropRight} alt="" />
    </div>
  );
};

export default Button;
