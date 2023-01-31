import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../Helpers/api";

export const useStatsHook = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/statistics`);
      const chartData = await axios.get(`${BASE_API_URL}/chart_data`);
      setStats(response.data);
      setChartData(chartData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    stats,
    chartData
  };
};
