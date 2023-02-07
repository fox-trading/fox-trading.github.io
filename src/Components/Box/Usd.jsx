import React from "react";

import circle from "../../Imgs/Circle.svg";
import btc from "../../Imgs/btc.png";
import eth from "../../Imgs/ethereum.png";
import global from "../../Imgs/global.png";

import "./Usd.scss";

const Usd = ({ text, value }) => {
  const getIcon = (name) => {
    if (name === 'BTC') return btc;
    if (name === 'ETH') return eth;
    if (name === 'GLOBAL') return global

    return circle
  }
  return (
    <div className="usd">
      <div className="usd_img">
        <img src={getIcon(text)} alt={text} />
      </div>
      <div className="usd_content">
        <div className="usd_text">{text}USD</div>
        <div className="usd_numbers">{new Intl.NumberFormat().format(value)} USD</div>
      </div>
    </div>
  );
};

export default Usd;
