import React from "react";
import { getYear } from "../../../utills/index";
import Space from "../../Space";
import "./Bottom.scss";

const Bottom = () => {
  return (
    <div className="btcenter">
      <div className="bottom_wrap btcenter">
        <div className="bottom_left">
          {" "}
          &copy;{` ${getYear()}`} Oneburner.com
        </div>
        <div className="bottom_rit">
          <span> All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
