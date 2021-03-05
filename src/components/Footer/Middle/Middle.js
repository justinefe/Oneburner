import React from "react";
import Space from "../../Space";
import link from "../../../assets/linkedin.jpg";
import facebook from "../../../assets/facebook.jpg";
import twitter from "../../../assets/twitter.jpg";
import youtube from "../../../assets/youtube.jpg";
import "./Middle.scss";
const Middle = () => {
  return (
    <div className="middle">
      <div className="middle_left">
        <span className="middle_left_address">No 1 CRM solution in Africa</span>
        <div className="middle_left_terms">
          <span>Terms of Use</span>
          <div className="middle_left_space"></div>
          <Space color={"rgba(1, 0, 29, 0.6)"} height={15} width={1} />
          <span>Privacey Policy </span>
        </div>
        <div className="middle_left_contact">
          <span>Get in touch</span>
          <p>+234-80-000-0000</p>
        </div>
        <div className="middle_left_socials">
          <div className="imwrap">
            <img src={facebook} alt="" />
          </div>
          <div className="imwrap">
            {" "}
            <img src={twitter} alt="" />
          </div>
          <div className="imwrap">
            {" "}
            <img src={link} alt="" />
          </div>
          <div className="imwrap">
            {" "}
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <div className="middle_right">
        <div className="middle_right_product">
          <span className="middle-heading">PRODUCT</span>
          <span>Features</span>
          <span>Enterprise</span>
          <span>Security</span>
          <span>Trust</span>
          <span>Customer Stories</span>
          <span>Pricing</span>

          <span>Integrations</span>
          <span>Oneburner Partners</span>
        </div>
        <div className="middle_right_company">
          <span className="middle-heading">COMPANY</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Careers</span>
          <span>In the News</span>
        </div>
        <div className="middle_right_team">
          <span className="middle-heading">ONEBURNER FOR TEAMS</span>

          <span>Engineering</span>

          <span>Financial Services</span>
          <span>CRM and Sales</span>
          <span>IT</span>
          <span>Marketing</span>
          <span>Customer Support</span>
          <span>Human Resources</span>
          <span>Project Management</span>
          <span>Remote Work</span>
        </div>

        <div className="middle_right_resources">
          <span className="middle-heading">RESOURCES</span>
          <span>Community</span>
          <span>Guides</span>
          <span>Templates</span>
          <span>Video Tutorials</span>
          <span>Professional Services</span>
          <span>Knowledge Base</span>
          <span>Blog</span>
          <span>Webinars</span>
          <span>Find a partner</span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
