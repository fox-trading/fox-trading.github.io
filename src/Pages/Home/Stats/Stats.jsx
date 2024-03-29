import React from 'react';
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ReactComponent as Vector } from "../../../Imgs/Vector.svg";
import Button from "../../../Components/Button/Button";
import { useStatsHook } from "../../../Hooks/useStatsHook";

import "./Stats.scss";

const Stats = ({link}) => {
  const { stats, chartData } = useStatsHook();

  const data = chartData.map(d => ({
    name: d.date ? new Intl.DateTimeFormat('ru', {dateStyle: "short"}).format(new Date(d.date)) : '',
    trades: d.value
  }))
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
        {stats && <div className="stats_numbers">
          <div className="stats_numbers__item">
            <div>За Сегодня:</div>
            <div className="stats_numbers__value">{stats.for_today}</div>
          </div>
          <div className="stats_numbers__item">
            <div>За Неделю:</div>
            <div className="stats_numbers__value">{stats.for_week}</div>
          </div>
          <div className="stats_numbers__item">
            <div>За Месяц:</div>
            <span className="stats_numbers__value">{stats.for_month}</span>
          </div>
          <div className="stats_numbers__item">
            <div>Всего:</div>
            <span className="stats_numbers__value">{stats.in_total}</span>
          </div>
        </div>}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}
          >
            <CartesianGrid strokeDasharray="3 1" />
            <XAxis dataKey="name" />
            <YAxis  width={40}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trades" stroke="#1befef" />
          </LineChart>
        </ResponsiveContainer>
        {/*<div className="stats_button">*/}
        {/*  <a href="https://tradermake.money/trader/zemXgz/" target="_blank" className="underline">*/}
        {/*    <Button text="Узнать подробнее" />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Stats;
