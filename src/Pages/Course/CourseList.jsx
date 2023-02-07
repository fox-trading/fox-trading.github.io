import CourseContainer from "./CourseContainer";
import { Link } from "react-router-dom";
import { ReactComponent as Vector } from "../../Imgs/Vector.svg";

import "./CourseList.scss";

const CourseList = ({ courses, link }) => {
  return (
    <>
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
            {courses.map((item) => (
              <CourseContainer key={item.id} course={item}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseList;
