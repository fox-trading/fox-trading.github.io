import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../Helpers/api";

export const useStatsHook = () => {
  const [stats, setStats] = useState(null);

  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/statistics`);
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    stats,
  };
};
