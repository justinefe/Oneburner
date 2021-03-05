import React from "react";
import "./NavDrop.scss";

const NavDropOption = ({ image, title, descrition }) => {
  return (
    <div className="NavDropOption">
      <div className="NavDropOption_image">
        <img src={image} alt="" />
      </div>
      <div className="NavDropOption_details">
        <h3>{title}</h3> <p>{descrition}</p>
      </div>
    </div>
  );
};

export default NavDropOption;
