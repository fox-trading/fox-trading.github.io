import React from 'react';
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ReactComponent as Vector } from "../../../Imgs/Vector.svg";
import { TRADES_STATS } from "../../../Helpers/stats";

import "./Stats.scss";
import Button from "../../../Components/Button/Button";

const Stats = ({link}) => {

  return (
    <div className="stats">
      <div className="stats_content">
        <div className="stats_name">
          <Link to={link} className="underline">
            <div className="stats_text">Статистика трейдеров команды</div>
          </Link>
          <div className="arrow">
            <Vector />
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={TRADES_STATS}
            margin={{top: 5, right: 30, left: 20, bottom: 5,}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trades" stroke="#1befef" />
          </LineChart>
        </ResponsiveContainer>
        <div className="stats_button">
          <a href="https://tradermake.money/trader/zemXgz/" target="_blank" className="underline">
            <Button text="Узнать подробнее" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
