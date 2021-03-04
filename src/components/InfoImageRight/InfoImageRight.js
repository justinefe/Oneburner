import React from "react";
import DescriptionText from "../DescriptionText/DescriptionText";
import "./InfoImageRight.css";
const InfoImageRight = ({ image, title, description }) => {
  return (
    <div className="InfoImageRight">
      <div className="InfoImageRight_left">
        <DescriptionText title={title} description={description} />
      </div>
      <div className="InfoImageRight_right">
        <div className="InfoImageRight_dashboard">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoImageRight;
