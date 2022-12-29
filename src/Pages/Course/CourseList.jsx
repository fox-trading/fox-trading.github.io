import CourseContainer from "./CourseContainer";
<<<<<<< Updated upstream:src/Pages/Pages/Course/CourseList.jsx
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ReactComponent as Vector } from "../../../Imgs/Vector.svg";
=======

>>>>>>> Stashed changes:src/Pages/Course/CourseList.jsx
import "./CourseList.scss";

const CourseList = ({ course, footer, header, link }) => {
  return (
    <>
      {header}
      <div className="course">
        <div className="course_content">
          <div className="course_open_vector">
            <Link to={link} className="underline">
              <div className="course_vector_text">Курсы</div>
            </Link>
            <div>
              <Vector />
            </div>
          </div>
          <div className="course_list">
            {course.map((item, i) => (
              <CourseContainer
                key={i}
                picture={item.image}
                text={item.description}
                title={item.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="course_open_footer">{footer}</div>
    </>
  );
};

export default CourseList;
