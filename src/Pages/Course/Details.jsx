import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Down } from "../../Imgs/down.svg";

import ButtonCustom from "../../Components/Button/Button";
import CollapseCourse from "../../Components/Collapse/Collapse";
import { COURSES_LIST } from "../../Helpers/course";

import "./Details.scss";
import RegisterModal from '../../Components/Modal/RegisterModal';

const Details = () => {
  const { name } = useParams();
  const course = COURSES_LIST.find(it => it.id === name);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="current_course">
      <div className="current_course_">
        <div className="current_course_main">
          <div className="current_course_list">
            <div className="current_course_title">{course.name}</div>

            <div className="current_course_item">{course.description}</div>

            <div className="current_course_item">{course.subDescription}</div>

            <div className="current_course_item">
              Уровень сложности: {course.difficult}
            </div>

            <div className="current_course_button" >
              <ButtonCustom text="Записаться на курс" onClick={() => setShowModal(true)} />
            </div>

            <RegisterModal show={showModal} setShow={setShowModal} course={course.name}/>
          </div>
          <div className="current_course_main_img">
            <img
              src={course.image}
              alt={course.name}
              className="current_course_main_img_"
            />
          </div>
        </div>

        <div className="main_down">
          <Down />
        </div>

        <div className="current_course_about">
          <div className="current_course_about_title">
            Из чего состоит наш курс
          </div>
          <div className="current_course_about_content">
            {course.listAbout.map((item, i) => (
              <div className="current_course_about_wrapper" key={i}>
                <div className="current_course_about_img">
                  <img
                    src={item.img}
                    alt=""
                    className="current_course_about_img_"
                  />
                </div>
                <div className="current_course_about_name">{item.title}</div>
                <div className="current_course_about_text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="current_course_study">
          <div className="current_course_study_title">Чему вы научитесь</div>
          <div className="current_course_study_content">
            {course.learningList.map((item, i) => (
              <div key={i} className="current_course_study_list">
                <div className="current_course_study_text">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="collapse">
          <CollapseCourse lessons={course.lessons} />
        </div>
      </div>
    </div>
  );
};

export default Details;
