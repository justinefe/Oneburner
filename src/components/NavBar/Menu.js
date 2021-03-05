import React from "react";

const Menu = ({ handleMenuClick }) => {
  return (
    <svg
      width="36"
      height="25"
      viewBox="0 0 36 28"
      onClick={handleMenuClick}
      fill="#462686"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13.7139" width="22.2857" height="5.32258" fill="" />
      <rect y="21.6774" width="36" height="5.32258" fill="" />
      <rect x="8.14258" y="10.8387" width="27.8571" height="5.32258" fill="" />
    </svg>
  );
};

export default Menu;
