import React from "react";
import { NavLink } from "react-router-dom";
import activity from "../../assets/activity.png";
import InfoImageRight from "../../components/InfoImageRight/InfoImageRight";
import "./Activities.css";
const Activities = () => {
  return (
    <div className="activity">
      <div className="activity_nav">
        <NavLink to="/" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>CRM & Sales</button>
          </div>
        </NavLink>
        <NavLink to="/resources" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>Human Resources</button>
          </div>
        </NavLink>{" "}
        <NavLink to="/marketing" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>Marketing</button>
          </div>
        </NavLink>{" "}
        <NavLink to="/remote" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>Remote Work</button>
          </div>
        </NavLink>{" "}
        <NavLink to="/management" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>Project management</button>
          </div>
        </NavLink>{" "}
        <NavLink to="/media" activeClassName="selected">
          <div className="activity_nav_buttons">
            <button>Social Media</button>
          </div>
        </NavLink>{" "}
      </div>
      <InfoImageRight
        image={activity}
        description="Keep your team organized and informed with activities"
        title="Manage team activities all in one place"
      />
    </div>
  );
};

export default Activities;
