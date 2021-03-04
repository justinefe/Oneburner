import React from "react";

import "./PersonalInfo.css";

const PersonalInfo = ({ name, desc, image, col }) => {
  return (
    <div className="PersonalInfo_content">
      <div className="PersonalInfo_imagewrap">
        <img src={image} alt="" />
      </div>
      <div
        style={{ color: col ? col : "#333333" }}
        className="PersonalInfo_content_details"
      >
        <span>{name}</span>
        <span>{desc}</span>
      </div>
      <div className="PersonalInfo_space"></div>
    </div>
  );
};

export default PersonalInfo;
