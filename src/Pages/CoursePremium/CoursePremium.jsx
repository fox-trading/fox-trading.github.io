import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Collapse} from "antd";
import ModalPremiumCourse from "../../Components/Modal/ModalPremiumCourse";

import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import './CoursePremium.scss';

const {Panel} = Collapse;


const lessons = [
  {
    name: 'Урок 1. Технический анализ',
    videoUrl: '',
    list: [
      {
        title: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Свечи и свечные модели',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерный анализ в сочетании со свечным',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерные аномалии',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
    ]
  },

  {
    name: 'Урок 2. Объемы, дельта и кумулятивная дельта',
    videoUrl: '',
    list: [
      {
        title: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Свечи и свечные модели',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерный анализ в сочетании со свечным',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерные аномалии',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
    ]
  },

  {
    name: 'Урок 3. Технический Анализ, таймфреймы и тренды, фазы рынка',
    videoUrl: '',
    list: [
      {
        title: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Свечи и свечные модели',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерный анализ в сочетании со свечным',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
      {
        title: 'Кластерные аномалии',
        description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
      },
    ]
  },
]

export default function CoursePremium({user}) {
  const [active, setActive] = useState(lessons[0]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setShow(true)
  };

  if (!user?.paid) navigate("/");

  return (
    <div className="course_premium">
      <h1 className="course_premium-header">Course Upgrade</h1>
      <div className="course_premium-content">
        <div className="lessons">
          {lessons.map((item) => (
            <Panel
              onClick={() => {
                setActive(item);
                showModal()
              }}
              header={<div className="collapse_name">{item.name}</div>}>
            </Panel>
          ))}
        </div>

        {active && (
          window.innerWidth <= 768 ? (
            <ModalPremiumCourse
              show={show}
              active={active}
              close={() => setShow(false)}
            />
          ) : (
            <div className="details">
              <div className="details-title">{active.name}</div>
              <VideoPlayer url={active.videoUrl}/>

              <div className="details-description">
                <ul className="details-description__list">
                  {active.list.map((theme, i) =>
                    <li key={i}>{theme.title}</li>
                  )}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}