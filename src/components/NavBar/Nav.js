import React from "react";
import Button from "../RoundedBtn/Btnxm";
import LogoEdited from "../../assets/LogoEdited.jpg";
import dropdown from "../../assets/dropdown.jpg";
import { Link } from "react-router-dom";
import "./Nav.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        <Link to="/" activeClassName="selected">
          <div className="nav_left_logo_wrap">
            <img src={LogoEdited} alt="" />
          </div>
        </Link>
      </div>
      <div className="nav_right">
        <div className="nav_right_button">
          <button>New customer?</button>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
