import React from "react";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import profile from "../../assets/profile.png";

import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <p>
        Best product ever! We like Oneburner more and more each day because it
        makes our work a lot easier. it's just amazing. Very easy to use,
        impressed us on multiple levels. Thank you so much for your help and is
        worth much more than we paid. We were treated like royalty
      </p>
      <div className="Testimonial_profile">
        <PersonalInfo
          name="Kemi Hassan"
          desc="CEO, Sahara Inc."
          image={profile}
        />
        </div>
    </div>
  );
};

export default Testimonial;
