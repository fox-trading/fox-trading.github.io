import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

import "./CourseContainer.scss";
const CourseContainer = ({ course }) => {
  const { id, image, name, description } = course;

  return (
    <div>
      <div className="course_main_content">
        <div className="course_main_img_wrapper">
          <img src={image} alt={name} className="course_main_img" />
        </div>
        <div className="course_main_content_text">{name}</div>
        <div className="course_main_content_sub">{description}</div>
      </div>
      <div className="course_button">
        <Link to={`/course/${id}`} className="underline">
          <Button text="Узнать подробнее" />
        </Link>
      </div>
    </div>
  );
};

export default CourseContainer;
