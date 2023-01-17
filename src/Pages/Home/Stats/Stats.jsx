import React from 'react';
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ReactComponent as Vector } from "../../../Imgs/Vector.svg";

import "./Stats.scss";

const Stats = ({link}) => {
  const data = [
    {
      name: '2021-05-09',
      trades: 100,
      amt: 2400,
    },
    {
      name: '2021-06-22',
      trades: 185,
      amt: 2210,
    },
    {
      name: '2022-01-09',
      trades: 330,
      amt: 2290,
    },
    {
      name: '2022-03-06',
      trades: 670,
      amt: 2000,
    },
    {
      name: '2022-04-01',
      trades: 810,
      amt: 2181,
    },
    {
      name: '2022-04-11',
      trades: 1105,
      amt: 2500,
    },
    {
      name: '2022-05-20',
      trades: 1420,
      amt: 2100,
    },

    {
      name: '2022-06-29',
      trades: 1690,
      amt: 2100,
    },
    {
      name: '2022-08-09',
      trades: 1980,
      amt: 2100,
    },
    {
      name: '2022-09-15',
      trades: 2140,
      amt: 2100,
    },
    {
      name: '2022-10-25',
      trades: 2600,
      amt: 2100,
    },
    {
      name: '2022-12-01',
      trades: 2880,
      amt: 2100,
    },
    {
      name: '2023-01-17',
      trades: 3058,
      amt: 2100,
    },
  ];

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
            data={data}
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
      </div>
    </div>
  );
};

export default Stats;
