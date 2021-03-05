import React from "react";
import Footer from "../../components/Footer";
import InfoImageLeft from "../../components/InfoImageLeft/InfoImageLeft";
import InfoImageRight from "../../components/InfoImageRight/InfoImageRight";
import Customersupport from "./Customersupport";
import FreeTrial from "../../components/FreeTrial";
import report from "../../assets/report.jpg";
import Tools from "../../components/Tools";
import dashboard from "../../assets/newDashboard.jpg";
import userDashboard from "../../assets/oneburneright.png";
import oneburerleft from "../../assets/oneburnerleft.png";
import Activities from "./Activities";
import Partner from "../../components/Partner";
import Banner from "./Banner";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner />

      <Partner />
      <Activities />
      <InfoImageLeft
        image={oneburerleft}
        description="
    Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner"
        title="Bring your team up to speed"
      />
      <InfoImageRight
        image={userDashboard}
        description="View dates, projects, calender, sprint and more with reliability"
        title="Automated task timeline"
      />
      <Tools />
      <InfoImageLeft
        image={report}
        description="
    Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files"
        title="Efficient lead management"
      />

      <InfoImageRight
        image={dashboard}
        description="
      Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files"
        title="Efficient lead management"
      />

      <Customersupport />

      <FreeTrial
        title="Choose a better way to work"
        des1="No credit card details"
        des2="No additional installation"
        des3="No time wasting"
      />

      <Footer />
    </div>
  );
};

export default HomePage;
