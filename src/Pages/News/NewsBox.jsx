import "./NewsBox.scss";
import { Link } from "react-router-dom";

const NewsBox = ({ text, time, source, img }) => {
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
        <div>
          {time}/{source}
        </div>
      </div>
      <Link to="/news-details" className="underline">
        <div className="news_box__text">{text}</div>
      </Link>
    </div>
  );
};

export default NewsBox;
