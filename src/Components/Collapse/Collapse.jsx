import React from "react";
import { Collapse } from "antd";
import "./Collapse.scss";
import { ReactComponent as Plus } from "../../Imgs/Plus.svg";
import img from "../../Imgs/BigLogo.png";

const { Panel } = Collapse;

const CollapseCourse = ({lessons}) => (
  <div>
    <div className="collapse_title">Программа курса</div>
    {lessons.map((item, i) => (
      <div className="collapse_content" key={i}>
        <Collapse
          expandIconPosition="end"
          key={i}
          defaultActiveKey={item.number}
          // expandIcon={() => <Plus />}
        >
          <Panel
            header={<div className="collapse_name">{item.name}</div>}
            key={i}
          >
            <div className="collapse_text">
              <ul>
                {item.list.map(theme => <li>{theme}</li>)}
              </ul>
            </div>
          </Panel>
        </Collapse>
      </div>
    ))}
  </div>
);
export default CollapseCourse;
