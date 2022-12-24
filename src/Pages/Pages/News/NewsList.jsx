import NewsBox from "./NewsBox";
import { Link } from "react-router-dom";
import vector from "../../../Imgs/Vector.svg";
import { useNewsHook } from "../../../Hooks/useNewsHook";

import "./NewsList.scss";

const NewsList = ({ news, header, footer, button }) => {
  // const {news: fetchedNews} = useNewsHook();
  // console.log('fetchedNews', fetchedNews);

  return (
    <div>
      {header}

      <div className="news-list">
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
            <div className="news_content_list">
              {news.map((item, i) => (
                <NewsBox
                  key={i}
                  text={item.title}
                  source={item.source}
                  time={item.updatedAt}
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

export default NewsList;
