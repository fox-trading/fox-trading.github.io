import "./NewsBox.scss";
import { Link } from "react-router-dom";

const NewsBox = ({ text, time, source, img, index }) => {
  const date = time ? new Date(time) : null;
  const dateTime = time ? new Intl.DateTimeFormat('ru', {dateStyle: "short"}).format(date) : null;

  return (
    <div className="news_box">
      <div className="news_box__source">
        <img
          src={img}
          alt=""
          className="news_box__img"
          width={16}
          height={16}
        />
        <div className="news_box_data" >
          {dateTime}/{source}
        </div>
      </div>
      <Link to={`/news/${index}`} className="underline">
        <div className="news_box__text">{text}</div>
      </Link>
    </div>
  );
};

export default NewsBox;
