import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Spin, Card} from "antd";
import Button from "../../Components/Button/Button";

import './Dashboard.scss';

const Dashboard = ({user}) => {
  const navigate = useNavigate();
  if (!user) navigate("/");
  if (!user) return <Spin/>;

  const title = `Здравствуйте, ${user.name || user.email}`
  return (
    <div className="dashboard">
      <h1 className="header">Личный кабинет</h1>

      <div className="dashboard-content">
        <Card title={title}>
          <div className="fields">
            <span className="fields_label">Email: </span>
            <span className="fields_value">{user.email}</span>
          </div>
          <div className="fields">
            <span className="fields_label">Имя:</span>
            <span className="fields_value">{user.name || ' - '}</span>
          </div>
          <div className="fields">
            <span className="fields_label">Телеграм:</span>
            <span className="fields_value">{user.telegram || ' - '}</span>
          </div>
          <div className="fields">
            <span className="fields_label">Номер Телефона:</span>
            <span className="fields_value">{user.phone || ' - '}</span>
          </div>
        </Card>
        {user.paid && (
          <div className="course-premium_button">
            <Link to={`/course-premium`} className="underline">
              <Button text="Платный курс"/>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;