import React from "react";
import CompanyLogo from "../components/CompanyLogo/CompanyLogo";
import dangote from "../assets/partner/dangote.png";
import gt from "../assets/partner/gt.png";
import paystack from "../assets/partner/paystack.png";
import egyptair from "../assets/partner/egyptair.png";
import std from "../assets/partner/stdbank.png";
import mtn from "../assets/partner/MTN.png";
import skolee from "../assets/partner/skolee.png";

import "./Partner.css";

const partnerLogo = [dangote, gt, paystack, egyptair, std, mtn, skolee];

const Partner = () => {
  return (
    <div className="partner">
      <span>Over 500+ companies bond teams together with Oneburner</span>
      <div className="partner_image_wrap">
        {partnerLogo?.map((logo) => (
          <CompanyLogo image={logo} />
        ))}
      </div>
    </div>
  );
};

export default Partner;
