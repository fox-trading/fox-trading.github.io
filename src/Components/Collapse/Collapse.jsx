import React from "react";
import { Collapse } from "antd";

import "./Collapse.scss";

const { Panel } = Collapse;

const CollapseCourse = ({lessons}) => (
  <div>
    <div className="collapse_title">Программа курса</div>
    {lessons.map((item, i) => (
      <div className="collapse_content" key={i}>
        <Collapse
          expandIconPosition="end"
          defaultActiveKey={item.number}
        >
          <Panel header={<div className="collapse_name">{item.name}</div>}>
            <div className="collapse_text">
              <ul>
                {item.list.map((theme, i) => <li key={i}>{theme}</li>)}
              </ul>
            </div>
          </Panel>
        </Collapse>
      </div>
    ))}
  </div>
);
export default CollapseCourse;
