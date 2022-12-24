import NewsBox from "./NewsBox";
import { Link } from "react-router-dom";
import vector from "../../../Imgs/Vector.svg";

import "./NewsMain.scss";
const NewsMain = ({ news, header, footer, button }) => {
  return (
    <div>
      {header}

      <div className="news-main">
        <div className="news">
          <div className="news_main">
            <div className="news_name">
              <Link to="news" className="underline">
                <div className="news_name__text">Новости</div>
              </Link>
              <div>
                <img src={vector} alt="" />
              </div>
            </div>
            <div className="news_content">
              {news.map((item, i) => (
                <NewsBox
                  key={i}
                  text={item.text}
                  source={item.source}
                  time={item.time}
                  img={item.img}
                />
              ))}
            </div>
            <div className="news_open_button">{button}</div>
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};

export default NewsMain;
