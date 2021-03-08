import React from "react";
import finepics from "../assets/fineGirl.png";
import "./ChatImag.scss";
const ChatImag = () => {
  return (
    <div className="chatimag">
      <div className="imgWrap">
        <img src={finepics} alt="" />
      </div>
      <div className="msgContent">
        <p>Good Adeola,i will check it out now</p>
      </div>
    </div>
  );
};

export default ChatImag;
