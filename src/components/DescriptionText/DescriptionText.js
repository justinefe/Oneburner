import React from "react";
import "./DescriptionText.scss";
const DescriptionText = ({ title, description }) => {
  return (
    <div className="description_text">
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionText;
