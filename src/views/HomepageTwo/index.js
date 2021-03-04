import React from "react";
import Footer from "../../components/Footer";
import FreeTrial from "../../components/FreeTrial";
import Tools from "../../components/Tools";
import Partner from "../../components/Partner";
import Help from "./Help";
import Region from "./Region";
import Testimonial from "./Testimonial";
import NavBar from "../../components/NavBar";
import Banner from "./BannerTwo";
// import

const HomepageTwo = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Partner />
      <Help />
      <Tools />
      <Region />
      <Testimonial />
      <FreeTrial
        title="Want to learn more on how we can impact your enterprise"
        color="rgba(204, 204, 204, 0.1)"
        col="#333333"
      />
      <Footer />
    </div>
  );
};

export default HomepageTwo;
