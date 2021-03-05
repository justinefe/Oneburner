import React from "react";
import DescriptionText from "../DescriptionText/DescriptionText";
import "./InfoImageRight.scss";
const InfoImageRight = ({ image, title, description }) => {
  return (
    <div className="InfoImageRight">
      <div className="InfoImageRight_left">
        <DescriptionText title={title} description={description} />
      </div>
      <div className="InfoImageRight_right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default InfoImageRight;
