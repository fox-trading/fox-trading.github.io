import React from "react";
import Slider from "react-slick";
import { ReactComponent as Right } from "../../Imgs/Left.svg";
import { ReactComponent as Left } from "../../Imgs/Right.svg";

import "./NewsDetails.scss";

const NewsDetails = ({news}) => {
  const settings = {
    dots: true,
    initialSlide: 1,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    nextArrow: <Left />,
    prevArrow: <Right />,
  };

  return (
    <div>
      <div className="current_news">
          <div className="current_news_content">
            <Slider {...settings}>
              {news.map((item, i) => (
                <div key={i}>
                  <div className="current_news_carusel">
                    <div className="current_news_carusel_title">{item.title}</div>
                    <div className="current_news_carusel_text">
                      <div dangerouslySetInnerHTML={{__html: item.content}}/>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
