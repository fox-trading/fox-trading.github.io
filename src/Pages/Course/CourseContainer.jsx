import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

import "./CourseContainer.scss";
const CourseContainer = ({ picture: Image, title, text }) => {
  return (
    <div key={title}>
      <div className="course_main_content">
        <div className="course_main_img">
          <img src={Image} alt="" className="course_main_img_" />
        </div>
        <div className="course_main_content_text">{title}</div>
        <div className="course_main_content_sub">{text}</div>
      </div>
      <div className="course_button">
        <Link to={`/course/${title}`} className="underline">
          <Button text="Узнать подробнее" />
        </Link>
      </div>
    </div>
  );
};

export default CourseContainer;
