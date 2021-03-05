import React from "react";
import markedGood from "../../assets/select.png";
import medah from "../../assets/medah.png";
import "./Help.scss";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

const Help = () => {
  return (
    <div className="help">
      <h2> How Oneburner help enterprises grow </h2>
      <div className="help_centre">
        <div className="help_left">
          <p>
            Oneburner software solution helps your business by creating an
            enabling environment for easy communication and feedbacks in real
            time. Oneburner brings all your user and teams in a single place
            with 99.99% uptime SLA and Data security
          </p>
        </div>
        <div className="help_right">
          <div className="help_right_select">
            <img src={markedGood} alt="" />
            <p>
              Oneburner software solution helps your business by creating an
            </p>
          </div>
          <div className="help_right_select">
            <img src={markedGood} alt="" />
            <p>
              Oneburner software solution helps your business by creating an
            </p>
          </div>
          <div className="help_right_select">
            <img src={markedGood} alt="" />
            <p>
              Oneburner software solution helps your business by creating an
            </p>
          </div>
          <div className="help_right_select">
            <img src={markedGood} alt="" />
            <p>
              Oneburner software solution helps your business by creating an
            </p>
          </div>
        </div>
      </div>
      <div className="help_bottom">
        <PersonalInfo
          name="Best Collaboration Software"
          desc="Africa tech coalition 2020"
          image={medah}
        />
      </div>
    </div>
  );
};

export default Help;
