import React from "react";
import { getYear } from "../../../utills/index";
import Space from "../../Space";
import "./Bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottom_wrap">
        <div className="bottom_left">
          {" "}
          &copy;{` ${getYear()}`} Oneburner.com
        </div>
        <Space color={"rgba(1, 0, 29, 0.6)"} height={13} width={1} />
        <div className="bottom_right">
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
