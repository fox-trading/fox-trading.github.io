import CourseContainer from "./CourseContainer";
import { Link } from "react-router-dom";
import { ReactComponent as Vector } from "../../Imgs/Vector.svg";

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
