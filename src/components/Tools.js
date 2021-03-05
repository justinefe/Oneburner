import React from "react";
import box1 from "../assets/integrate/box-39.png";
import dropbox from "../assets/integrate/dropbox.png";
import excel from "../assets/integrate/excel-4.png";
import facebook from "../assets/integrate/facebook.png";
import facebookMessenger from "../assets/integrate/facebook-messenger-3.png";
import github from "../assets/integrate/github-icon-1.png";
import gmail from "../assets/integrate/gmail.png";
import linked from "../assets/integrate/linked.png";
import mailchimp from "../assets/integrate/mailchimp.png";
import microsoftpower from "../assets/integrate/microsoft-powerpoint-2013.png";
// import microsoftAces
import microsoftAces from "../assets/integrate/microsoft-access-2013.png";
import microsoftsharepoint from "../assets/integrate/microsoft-sharepoint.png";
import microsoftteams from "../assets/integrate/microsoft-teams-1.png";
import onenote from "../assets/integrate/onenote.png";
import outlook from "../assets/integrate/outlook-icon.png";
import sendgrid from "../assets/integrate/sendgrid.png";
import slack from "../assets/integrate/slack.png";
import whatsapp from "../assets/integrate/whatsapp-icon.png";
import wordpress from "../assets/integrate/wordpress-blue 1.png";
import youtube from "../assets/integrate/youtube-3.png";
import zeplin from "../assets/integrate/zeplin.png";

import "./Tools.scss";
import CompanyLogo from "./CompanyLogo/CompanyLogo";

const partnerLogo = [
  slack,
  linked,
  github,
  mailchimp,
  dropbox,
  facebook,
  box1,
  excel,
  facebookMessenger,
  gmail,
  microsoftpower,
  microsoftAces,
  microsoftsharepoint,
  microsoftteams,
  onenote,
  outlook,
  whatsapp,
  wordpress,
  onenote,
  sendgrid,
  youtube,
  zeplin,
];
const Tools = () => {
  return (
    <div className="tools">
      <div className="tools_headings">
        <span>Integrate with your favourite tools easily in one click</span>
      </div>
      <div className="tools_images">
        {partnerLogo?.map((logo) => (
          <CompanyLogo image={logo} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
