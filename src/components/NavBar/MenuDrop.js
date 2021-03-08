import React, { useRef } from "react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";
import dropdown from "../../assets/left-arrow.png";
import "./NavDrop.scss";

const MenuDrop = React.forwardRef(({ login }, menuRef) => {
  const navDropRef = useRef();
  const handleClick = (e) => {
    navDropRef.current.classList.toggle("showMenu");
  };
  return (
    <div ref={menuRef} className="menudrop">
      {login ? (
        <div className="login_nav_wrap">
          {login.map((link) => (
            <div className="menudrop_right_login_button">
              <h3>{link}</h3>
            </div>
          ))}
        </div>
      ) : (
        <>
          <NavDrop ref={navDropRef} />
          <div className="menudrop_right">
            <div onClick={handleClick} className="menudrop_right_button image">
              <img src={dropdown} alt="" />
              <h3>Product</h3>
            </div>
            <Link to="/landing">
              <div className="menudrop_right_button">
                <h3>Home Two</h3>
              </div>
            </Link>
            <Link to="/sales">
              <div className="menudrop_right_button">
                <h3>Contact Sales</h3>
              </div>
            </Link>
            <Link to="/login">
              <div className="menudrop_right_button">
                <h3>Login</h3>
              </div>
            </Link>
            <div className="menudrop_right_button">
              <h3>Pricing</h3>
            </div>

            <div className="menudrop_right_button">
              <h3>Enterprise</h3>
            </div>
            <div className="menudrop_right_button">
              <h3>Support</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default MenuDrop;
