import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import './CoursePremium.scss';

const { Panel } = Collapse;

export default function CoursePremium ({ user }) {
  const navigate = useNavigate();
  const lessons = [
    {
      name: 'Урок 1. Технический анализ',
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
      list: [
        {
          title: 'Принципы работы дельты и кумулятивной дельты',
          description: 'Уровни поддержки и сопротивления/блочные уровни. Сочетание объемов спроса и предложения с ценовыми уровнями\','
        },
      ]
    },

  ]
  const [active, setActive] = useState(lessons[0].list[0]);

  if (!user?.paid) navigate("/");

  return (
    <div className="course_premium">
      <h1 className="course_premium-header">Course Upgrade</h1>
      <div className="course_premium-content">
        <div className="lessons">
        {lessons.map((item) => (
          <Collapse
            expandIconPosition="end"
            defaultActiveKey={item.number}
          >
            <Panel header={<div className="collapse_name">{item.name}</div>}>
              <div className="collapse_text">
                <ul className="collapse_list">
                  {item.list.map((theme, i) => <li onClick={() => setActive(theme)} key={i}>{theme.title}</li>)}
                </ul>
              </div>
            </Panel>
          </Collapse>
        ))}
        </div>
        <div className="details">
          <div className="details-title">{active.title}</div>
          <div className="details-description">{active.description}</div>
        </div>
      </div>
    </div>
  )
}