import React from "react";
import DescriptionText from "../DescriptionText/DescriptionText";
import "./InfoImageLeft.css";
const InfoImageLeft = ({ image, title, description }) => {
  return (
    <div className=" InfoImageLeft">
      <div className="InfoImageLeft_left">
        <div className="InfoImageLeft_dashboard">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="InfoImageLeft_right">
        <DescriptionText title={title} description={description} />
      </div>
    </div>
  );
};

export default InfoImageLeft;
