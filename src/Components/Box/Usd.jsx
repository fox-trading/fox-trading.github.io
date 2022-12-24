import "./Usd.scss";
import circle from "../../Imgs/Circle.svg";
import React from "react";
const Usd = ({ text }) => {
  return (
    <div className="usd">
      <div className="usd_img">
        <img src={circle} alt="" />
      </div>
      <div className="usd_content">
        <div className="usd_text">{text}</div>
        <div className="usd_numbers">16 069.00 USD</div>
      </div>
    </div>
  );
};

export default Usd;
