import React from "react";
import "./CompanyLogo.scss";
const CompanyLogo = ({ image }) => {
  return (
    <div className="CompanyLogo">
      <img src={image} alt="" />
    </div>
  );
};

export default CompanyLogo;
