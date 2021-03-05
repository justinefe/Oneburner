import React from "react";
import logo from "../../../assets/LogoEdited.jpg";
import dropdown from "../../../assets/dropdown.jpg";
import world from "../../../assets/world 1.jpg";
import "./Top.scss";

const Top = () => {
  return (
    <div className="top">
      <div className="top_img">
        <img src={logo} alt="" />
      </div>
      <div className="top_select">
        <div className="top_select_language">
          <img src={world} alt="" />
          <span>English</span>
        </div>
        <img src={dropdown} alt="" />
      </div>
    </div>
  );
};

export default Top;
