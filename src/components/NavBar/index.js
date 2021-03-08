import React, { useRef, useEffect } from "react";
import NavBar from "./NavBar";
import NavDrop from "./NavDrop";
import "./Nav.scss";
import "./NavDrop.scss";
import MenuDrop from "./MenuDrop";

const MainNav = () => {
  const dropRef = useRef();
  const navRef = useRef();
  const menuRef = useRef();
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 70 && navRef.current !== null) {
        navRef.current.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.05)";
      } else {
        navRef.current.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [window.scrollY]);
  const handleClick = (e) => {
    dropRef.current.classList.toggle("show");
  };
  const handleMenuClick = (e) => {
    menuRef.current.classList.toggle("showMenu");
  };
  return (
    <div ref={navRef} className="navWrap" style={{ zIndex: "44" }}>
      <NavBar handleMenuClick={handleMenuClick} handleClick={handleClick} />
      <NavDrop ref={dropRef} />
      <MenuDrop ref={menuRef} />
    </div>
  );
};

export default MainNav;
