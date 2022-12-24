import { useTranslation } from "react-i18next";
import CourseContainer from "./CourseContainer";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

import "./CourseList.scss";

const CourseOpen = ({ course, footer, header }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {header}
      <div className="course">
        <div className="course_content">
          <div className="course_open_vector">
            <div className="course_vector_text">{t("course_name")}</div>
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

export default CourseOpen;
