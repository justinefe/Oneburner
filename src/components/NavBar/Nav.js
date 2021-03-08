import React, { useRef } from "react";
import Button from "../RoundedBtn/Btnxm";
import LogoEdited from "../../assets/LogoEdited.jpg";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Menu from "./Menu";
import MenuDrop from "./MenuDrop";

const NavBar = () => {
  const mRef = useRef();
  const handleMenuClick = (e) => {
    mRef.current.classList.toggle("showMenu");
  };
  return (
    <>
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
            <h3>New Customer?</h3>
          </div>{" "}
          <Button />
          <Menu handleMenuClick={handleMenuClick} />
        </div>
      </div>
      <MenuDrop login={["New Customer", "Try for free"]} ref={mRef} />
    </>
  );
};

export default NavBar;
