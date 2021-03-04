import React from "react";
import Bottom from "./Bottom/Bottom";
import Middle from "./Middle/Middle";
import Top from "./Top/Top";
const Footer = () => {
  return (
    <div style={{ padding: "60px 60px 0 60px" }}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Footer;
