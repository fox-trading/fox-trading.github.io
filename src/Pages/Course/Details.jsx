import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "antd";

import { ReactComponent as Down } from "../../Imgs/down.svg";

import ModalDone from "../../Components/Modal/ModalDone";
import ModalJoin from "../../Components/Modal/ModalJoin";
import ButtonCustom from "../../Components/Button/Button";
import CollapseCourse from "../../Components/Collapse/Collapse";
import { COURSES_LIST } from "../../Helpers/course";

import "./Details.scss";

const Details = () => {
  const { name } = useParams();
  const course = COURSES_LIST.find(it => it.id === name);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setOpenSecond(true);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
    setOpenSecond(false);
  };

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

            <div className="current_course_button" onClick={showModal}>
              <ButtonCustom text="Записаться на курс" />
            </div>

            <Modal
              open={openSecond}
              title=""
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
            >
              <ModalDone />
            </Modal>

            <Modal
              open={open}
              title=""
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
            >
              <ModalJoin />
              <Button
                loading={loading}
                type="primary"
                onClick={handleOk}
                key="submit"
                className="modal_button"
              >
                Записаться на курс
              </Button>
            </Modal>
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
              <div key={i}>
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
            {course.learningList.map(item => (
              <div className="current_course_study_list">
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
