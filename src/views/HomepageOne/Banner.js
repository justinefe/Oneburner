import React from "react";
import landingImage from "../../assets/lanidng-image.png";
import RoundedBtn from "../../components/RoundedBtn/Button";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_left">
        <h1>Collaborate with your team and get more done</h1>
        <p>
          Communicate effectively with Oneburner for easy collaboration, team
          work and remote work
        </p>
        <RoundedBtn />
      </div>
      <div className="banner_right">
        <img src={landingImage} alt="" />{" "}
      </div>
    </div>
  );
};

export default Banner;
