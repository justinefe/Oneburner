import React from "react";
import map from "../../assets/africa.png";
import "./Region.css";

const Region = () => {
  return (
    <div className="Region">
      <h2>Our Regional Presence</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dicta,
        sequi sint repellat aspernatur neque qui sunt autem temporibus
        dignissimos blanditiis, quia vitae deserunt quos maiores facilis porro.
        Laborum, est?
      </p>
      <div className="Region_map">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Region;
