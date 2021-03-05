import React from "react";
import Button from "../RoundedBtn/Btnxm";
import LogoEdited from "../../assets/LogoEdited.jpg";
import dropdown from "../../assets/dropdown.jpg";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const NavBar = ({ handleClick, handleMenuClick }) => {
  return (
    <div className="nav">
      <div className="nav_left">
        <Link to="/" activeClassName="selected">
          <div className="nav_left_logo_wrap">
            <img src={LogoEdited} alt="" />
          </div>
        </Link>
        <div onClick={handleClick} className="nav_left_button drop">
          <h3>Product</h3>
          <img src={dropdown} alt="" />
        </div>
        <div className="nav_left_button">
          <h3>Pricing</h3>
        </div>
        <div className="nav_left_button">
          <h3>Enterprise</h3>
        </div>
        <div className="nav_left_button">
          <h3>Support</h3>
        </div>
        <Link to="/landing" activeClassName="selected">
          <div className="nav_left_button">
            <h3>Home Two</h3>
          </div>
        </Link>
      </div>
      <div className="nav_right">
        <Link to="/sales" activeClassName="selected">
          <div className="nav_right_button">
            <h3>Contact Sales</h3>
          </div>
        </Link>
        <Link to="/login" activeClassName="selected">
          <div className="nav_right_button">
            <h3>Login</h3>
          </div>
        </Link>
        <Button />
        <Menu handleMenuClick={handleMenuClick} />
      </div>
    </div>
  );
};

export default NavBar;
