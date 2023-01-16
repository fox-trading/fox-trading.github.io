import NewsBox from "./NewsBox";
import {ReactComponent as Vector} from "../../Imgs/Vector.svg";
import fox_avatar_mono from "../../Imgs/fox_avatar_mono.png";
import {Link} from "react-router-dom";
import Button from "../../Components/Button/Button";

import "./NewsList.scss";

const NewsList = ({news, link}) => {
  return (
    <div className="news-list">
      <div className="news_main">
        <div className="news_name">
          <Link to={link} className="underline">
            <div className="news_name__text">Новости</div>
          </Link>
          <div>
            <Vector/>
          </div>
        </div>

        <div className="news_content">
          {!news.length && <div className='news_content-empty'><span>No news yet</span></div>}
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
        {/*<div className="news_open_button"><Button text=" Показать еще новости" /></div>*/}
      </div>
    </div>
  );
};

export default NewsList;
