import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../Helpers/api";

export const useRatesHook = () => {
  const [rates, setRates] = useState([]);
  const [globalMetrics, setGlobalMetrics] = useState(null);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/rates/currencies`);
      const data = Object.values(response.data.data)
      setRates(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGlobalMetrics = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/rates/globalmetrics`);
      const data = response.data.data
      setGlobalMetrics(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCurrencies();
    fetchGlobalMetrics();
  }, []);

  return {
    rates,
    globalMetrics
  };
};
