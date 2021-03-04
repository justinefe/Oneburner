import React from "react";
import Button from "../RoundedBtn/Btnxm";
import LogoEdited from "../../assets/LogoEdited.jpg";
import dropdown from "../../assets/dropdown.jpg";
import "./Nav.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        <div className="nav_left_logo_wrap">
          <img src={LogoEdited} alt="" />
        </div>
        <div className="nav_left_button drop">
          <button>Product</button>
          <img src={dropdown} alt="" />
        </div>
        <div className="nav_left_button">
          <button>Pricing</button>
        </div>
        <div className="nav_left_button">
          <button>Enterprise</button>
        </div>
        <div className="nav_left_button">
          <button>Support</button>
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_button">
          <button>Contact Sales</button>
        </div>
        <div className="nav_right_button">
          <button>Login</button>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
