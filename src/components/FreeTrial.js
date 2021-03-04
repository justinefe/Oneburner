import React from "react";
import Space from "./Space";
import RoundedBtn from "./RoundedBtn/Button";
import "./FreeTrial.css";

const FreeTrial = ({ title, color, col, des1 = "", des2 = "", des3 = "" }) => {
  return (
    <div
      className="freetrial"
      style={{ background: color ? color : "#7837f8" }}
    >
      <span className="freetrial_header" style={{ color: col ? col : "white" }}>
        {title}
      </span>
      <div className="freetrial_content">
        {des1 || des2 !== "" ? (
          <>
            <span>{des1}</span>
            <Space color={"white"} height={15} width={1} />
            <span>{des2}</span>
            <Space color={"white"} height={15} width={1} />
            <span>{des3}</span>{" "}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="freetrial_button_wrap">
        <RoundedBtn />
      </div>
    </div>
  );
};

export default FreeTrial;
