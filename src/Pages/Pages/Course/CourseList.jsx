import CourseContainer from "./CourseContainer";
import Header from "../../../Components/Header/Header";

import "./CourseList.scss";

const CourseList = ({ course, footer, header }) => {

  return (
    <>
      {header}
      <div className="course">
        <div className="course_content">
          <div className="course_open_vector">
            <div className="course_vector_text">Курсы</div>
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
