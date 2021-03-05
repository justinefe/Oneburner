import React, { useRef } from "react";
import NavDrop from "./NavDrop";
import dropdown from "../../assets/left-arrow.png";
import "./NavDrop.scss";

const MenuDrop = React.forwardRef(({ ...props }, menuRef) => {
  const navDropRef = useRef();
  const handleClick = (e) => {
    navDropRef.current.classList.toggle("showMenu");
  };
  return (
    <div ref={menuRef} className="menudrop">
      <NavDrop ref={navDropRef} />
      <div className="menudrop_right">
        <div onClick={handleClick} className="menudrop_right_button image">
          <img src={dropdown} alt="" />
          <h3>Product</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Pricing</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Login</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Enterprise</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Support</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Contact Sales</h3>
        </div>
        <div className="menudrop_right_button">
          <h3>Login</h3>
        </div>
      </div>
    </div>
  );
});

export default MenuDrop;
