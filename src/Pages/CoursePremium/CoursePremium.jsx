import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Collapse} from "antd";
import {lessons} from "./lessons";
import ModalPremiumCourse from "../../Components/Modal/ModalPremiumCourse";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import './CoursePremium.scss';
import {CoursePremiumDetails} from "./CoursePremiumDetails";

const {Panel} = Collapse;

export default function CoursePremium({user}) {
  const [active, setActive] = useState(lessons[0]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const showModal = () => { setShow(true) };

  if (!user?.paid) navigate("/");

  return (
    <div className="course_premium">
      <h1 className="course_premium-header">Course Premium</h1>
      <div className="course_premium-content">
        <div className="lessons">
          {lessons.map((item) => (
            <Panel
              key={item.name}
              onClick={() => {
                setActive(item);
                showModal()
              }}
              header={<div key={item.name} className="collapse_name">{item.name}</div>}>
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
              <CoursePremiumDetails active={active}/>
            </div>
          )
        )}
      </div>
    </div>
  )
}