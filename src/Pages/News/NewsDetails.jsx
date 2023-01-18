import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import { ReactComponent as Right } from "../../Imgs/Left.svg";
import { ReactComponent as Left } from "../../Imgs/Right.svg";

import "./NewsDetails.scss";

const NewsDetails = ({news}) => {
  const { index } = useParams();
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Right
      {...props}
      className={
        "slick-prev slick-arrow news_left" + (currentSlide === 0 ? " slick-disabled" : "")
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
        "slick-next slick-arrow news_right" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
      type="button"
    >
      Next
    </Left>
  );
  
  const settings = {
    dots: true,
    initialSlide: index - 1,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft  />,
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
