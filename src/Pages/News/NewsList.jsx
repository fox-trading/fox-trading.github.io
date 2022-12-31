import NewsBox from "./NewsBox";
import { ReactComponent as Vector } from "../../Imgs/Vector.svg";
import fox_avatar_mono from "../../Imgs/fox_avatar_mono.png";

import "./NewsList.scss";

const NewsList = ({ news button }) => {
  return (
    <div>
      <div className="news-list">
        <div className="news">
          <div className="news_main">
            <div className="news_name">
              <div className="news_name__text">Новости</div>

              <div><Vector /></div>
            </div>
            <div className="news_content_list">
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
            <div className="news_open_button">{button}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
