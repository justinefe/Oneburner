import React from "react";
import financialReport from "../../assets/financial-report.png";
import resReport from "../../assets/resreport.png";
import Button from "../../components/RoundedBtn/Button";
import "./BannerTwo.scss";
const BannerTwo = () => {
  return (
    <div className="bannartwo">
      <div className="bannartwo_first">
        <img src={financialReport} alt="" />
      </div>
      <div className="bannartwo_middle">
        <h1>Modern solution built for your enterprise</h1>

        <span>
          Centralize your team in a secure, flexible and managed platform
        </span>
        <Button title="Request a demo" />
      </div>
      <div className="bannartwo_right">
        <img src={resReport} alt="" />
      </div>
    </div>
  );
};

export default BannerTwo;
