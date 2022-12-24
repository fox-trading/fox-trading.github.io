import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "antd";

import { ReactComponent as Down } from "../../../Imgs/down.svg";

import ModalDone from "../../../Components/Modal/ModalDone";
import ModalJoin from "../../../Components/Modal/ModalJoin";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ButtonCustom from "../../../Components/Button/Button";
import PointCard from "../../../Imgs/PointCard.png";
import CollapseCourse from "../../../Components/Collapse/Collapse";
import PaperCard from "../../../Imgs/PaperCard.png";
import ChatCard from "../../../Imgs/ChatCard.png";
import { COURSES_DETAILS } from "../../../Helpers/course";

import "./Details.scss";

const Details = () => {
  const { name } = useParams();
  const course = COURSES_DETAILS.find((it) => it.name === name);

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

  const list_about = [
    {
      title: "Более 20 часов обучающих материалов",
      text: "Курс представлен в записи. Вам будет предоставлен доступ в личный кабинет для просмотра видео уроков.",
      img: PointCard,
    },

    {
      title: "Практические занятие после каждого урока.",
      text: "По факту просмотра любого из уроков необходимо выполнить домашнее задание с постоянной поддержкой кураторов команды FoxTraders. Обратная связь от кураторов поможет разобраться во всех темах дополнительно и при необходимости более углубленно.",
      img: PaperCard,
    },

    {
      title: "Предоставляется доступ в чат потока.",
      text: "В рамках чата вы будете постоянно на связи с другими учащимися и с кураторами проекта. Комьюнити поможет быстрее развиться в сфере трейдинга. В чате постоянно публикуются дополнительные материалы, связанные с образованием.",
      img: ChatCard,
    },
  ];
  return (
    <div className="current_course">
      <Header />
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
            {list_about.map((item, i) => (
              <div>
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
            <div className="current_course_study_list">
              <div className="current_course_study_text">
                Изучите платформы для торговли и аналитики рынка криптовалют
              </div>
              <div className="current_course_study_text">
                Научитесь контролировать риски в сделках
              </div>
            </div>
            <div>
              <div className="current_course_study_text">
                Изучите логику выбора активов для торговли
              </div>
              <div className="current_course_study_text">
                Научитесь подбирать оптимальное время для торговли на рынке
              </div>
            </div>
            <div>
              <div className="current_course_study_text">
                Овладеете основами свинг и интрадей трейдинга, логикой открытия
                и закрытия позиций
              </div>
              <div className="current_course_study_text">
                Узнаете дополнительные способы заработка в сфере крипты
              </div>
            </div>
          </div>
        </div>

        <div className="collapse">
          <CollapseCourse />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
