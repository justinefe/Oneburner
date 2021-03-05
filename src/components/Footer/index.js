import React from "react";
import Bottom from "./Bottom/Bottom";
import Middle from "./Middle/Middle";
import Top from "./Top/Top";
import "./Top/Top.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Footer;
