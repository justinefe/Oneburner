import React from "react";
import "./CompanyLogo.css";
const CompanyLogo = ({ image }) => {
  return (
    <div className="CompanyLogo">
      <img src={image} alt="" />
    </div>
  );
};

export default CompanyLogo;
