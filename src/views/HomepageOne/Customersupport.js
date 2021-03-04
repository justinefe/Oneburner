import React from "react";
import chat from "../../assets/chat.jpg";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import supportImage from "../../assets/supportImage.png";
import SupportOption from "../../components/SupportOption/SupportOption";
import "./Customersupport.css";
import DescriptionText from "../../components/DescriptionText/DescriptionText";

const Customersupport = () => {
  return (
    <div className="customersupport">
      <div className="customersupport_left">
        <div className="customersupport_left_communication">
          <SupportOption img={chat} title="Live" />
          <SupportOption img={mail} title="Mail support" />
          <SupportOption img={phone} title="Phone call support" />
        </div>
        <div className="customersupport_left_image">
          <img src={supportImage} alt="" />
        </div>
      </div>
      <div className="customersupport_right">
        <DescriptionText
          description="Our team of responsible members is always available to help you all day
       long and ready to meet your demand. Reach out to us and we will always
       be there"
          title="24/7 customer support"
        />
      </div>
    </div>
  );
};

export default Customersupport;
