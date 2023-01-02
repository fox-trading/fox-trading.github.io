import NewsBox from "./NewsBox";
import { ReactComponent as Vector } from "../../Imgs/Vector.svg";
import fox_avatar_mono from "../../Imgs/fox_avatar_mono.png";
import { Link } from "react-router-dom";

import "./NewsList.scss";

const NewsList = ({ news, button, news_route, news_height ,news_overflow}) => {
  return (
    <div>
      <div className="news-list">
      <div className={news_height}>
        <div className="news">
          <div className="news_main">
            
              <div className="news_name">
                <Link to={news_route} className="underline">
                  <div className="news_name__text">Новости</div>
                </Link>
                <div>
                  <Vector />
                </div>
              </div>
              <div className="news_content_list">
                <div className={news_overflow} > 
                {news.map((item, i) => (
                  <NewsBox
                    key={i}
                    text={item.title}
                    source={item.source}
                    time={item.updated_at}
                    img={item.img || fox_avatar_mono}
                  />
                ))}
                </div>
              </div>
              <div className="news_open_button">{button}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
