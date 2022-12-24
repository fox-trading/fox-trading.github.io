import React from "react";
import { Collapse, Space } from "antd";
import "./Collapse.scss";
import { ReactComponent as Plus } from "../../Imgs/Plus.svg";
import img from "../../Imgs/BigLogo.png";

const { Panel } = Collapse;

const list = [
  {
    name: "Урок 1. Базовые понятия и фазы рынка",
    text_sub1: `Что такое трейдинг?  `,
    text_sub2: `  Виды трейдинга`,
    text_sub3: `    Виды финансовых рынков `,
    text_sub4: `  Биржа и терминалы для торговли `,
    text_sub5: ` Правила разумного инвестирования `,
    text_sub6: `Как выбирать активы для торговли `,
    number: "1",
  },

  {
    name: "Урок 2. Сервисы для аналитики рынка криптовалют",
    text: `
    
      `,
  },

  {
    name: "Урок 3. Технический анализ. Таймфреймы и тренды",
    text: `
       
      `,
  },

  {
    name: "Урок 4. Технический анализ. Уровни поддержки и сопротивления. Объемы торгов",
    text: `
     
      `,
  },

  {
    name: "Урок 5.  Свечной анализ",
    text: `
     
      `,
  },

  {
    name: "Урок 6. Скользящие средние",
    text: `
     
      `,
  },

  {
    name: "Урок 7. Риск менеджмент",
    text: `
     
      `,
  },

  {
    name: "Урок 8. Торговая стратегия и построение собственного алгоритма торговли (резюме курса)",
    text: `
     
      `,
  },

  {
    name: "Урок 9. Инструкция по использованию тестера стратегий, калькулятора для расчета позиции",
    text: `
     
      `,
  },
];

const CollapseCourse = ({}) => (
  <div>
    <div className="collapse_title">Программа курса</div>
    {list.map((item, i) => (
      <div className="collapse_content">
        <Collapse
          expandIconPosition="end"
          key={i}
          defaultActiveKey={item.number}
          // expandIcon={() => <Plus />}
        >
          <Panel
            header={
              <div>
                <div className="collapse_name">{item.name}</div>
                <div></div>
              </div>
            }
            key="1"
          >
            <div className="collapse_text">
              <ul>
                <li>{item.text_sub1}</li>
                <li>{item.text_sub2}</li>
                <li>{item.text_sub3}</li>
                <li>{item.text_sub4}</li>
                <li>{item.text_sub5}</li>
                <li>{item.text_sub6}</li>
              </ul>
            </div>
          </Panel>
        </Collapse>
      </div>
    ))}
  </div>
);
export default CollapseCourse;
