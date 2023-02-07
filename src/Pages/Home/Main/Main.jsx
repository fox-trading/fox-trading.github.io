import React, { useState } from "react";

import ButtonCustom from "../../../Components/Button/Button";
import Usd from "../../../Components/Box/Usd";

import { ReactComponent as Down } from "../../../Imgs/down.svg";
import { ReactComponent as Logo } from "../../../Imgs/BigLogo.svg";
import { useRatesHook } from "../../../Hooks/useRatesHook";
import RegisterModal from '../../../Components/Modal/RegisterModal';

import "./Main.scss";


const Main = () => {
  const { rates, globalMetrics } = useRatesHook();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main">
      <div className="main_content">
        <div className="main_list">
          <div className="main_content__name">FOX TRADERS</div>
          <div className="main_content__text">
            Сообщество профессиональных трейдеров. Обучение прошли более сотни
            человек. Трейдинг это лучшая работа в мире!
          </div>

          <div className="main_content__join" >
            <ButtonCustom text={"Вступай в наши ряды"} onClick={() => setShowModal(true)}/>
          </div>

          <div className="main_box">
            {rates.map(rate => (
              <div key={rate.symbol}>
                <Usd text={rate.symbol} value={rate.quote.USD.price}/>
              </div>
            ))}
            {globalMetrics &&
              <div>
                <Usd text={'GLOBAL'} value={globalMetrics.quote.USD.total_market_cap}/>
              </div>
            }
          </div>
        </div>
        <div>
          <div className="main_img">
            <Logo />
          </div>
        </div>
      </div>
      <div className="main_down">
        <Down />
      </div>

      <RegisterModal show={showModal} setShow={setShowModal}/>
    </div>
  );
};

export default Main;
