import React, { Component } from "react";
import Slider from "react-slick";

import FoxCoin from "../../Imgs/FoxCoin.png";
import BitCoin from "../../Imgs/BitCoin.png";
import DollarCoin from "../../Imgs/DollarCoin.png";
import { ReactComponent as Right } from "../../Imgs/Left.svg";
import { ReactComponent as Left } from "../../Imgs/Right.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Right
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0}
    type="button"
  >
    Previous
  </Right>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Left
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1}
    type="button"
  >
    Next
  </Left>
);

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 500,
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />,
    };

    const list = [
      {
        title: "Время - это деньги",
        text: "Занимаясь своим образованием в сфере трейдинга, встает главный вопрос - а потраченное время окупится?",
        text_discription: "Определенно да! ",
        sub_text:
          " Наша методика образования спроектирована таким образом, что в ней нет лишнего, для освоения необходимых компетенций вам потребуется не больше двух недель. В результате вы сразу по окончанию сможете приступить к активному трейдингу.",
        img: FoxCoin,
      },

      {
        title: "Вкладывай в себя",
        text: `"Чтобы иметь деньги, нужно их делать. Чтобы делать большие деньги, нужно вовремя делать правильные вещи". Эдвин Лефевр`,
        sub_text: "",
        img: BitCoin,
      },

      {
        title: "Вкладывай в себя",
        text: ` "Не так важно, правы вы или нет. Важнее всего, сколько денег вы зарабатываете, когда вы правы, и сколько теряете, когда ошибаетесь." Джордж Сорос`,
        sub_text:
          " Наша команда одна из немногих, кто предоставляет открыто свою торговую статистику! Мы подтверждаем свои знания и опыт делом!",
        img: DollarCoin,
      },
    ];
    return (
      <div className="slider">
        <Slider {...settings}>
          {list.map((item, i) => (
            <div key={i}>
              <div className="slider_content">
                <div className="slider_coin">
                  <img src={item.img} alt="" className="slider_img" />
                </div>
                <div className="slider_list">
                  <div className="slider_title">{item.title}</div>
                  <div className="slider_text">{item.text}</div>
                  <div className="slider_text text_discription">
                    {item.text_discription}
                  </div>
                  <div className="slider_text">{item.sub_text}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
