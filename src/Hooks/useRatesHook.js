import axios from "axios";
import { useEffect, useState } from "react";
import { COINMARKETCAP_API_KEY, COINMARKETCAP_BASE_URL } from "../Helpers/api";

export const useRatesHook = () => {
  const [rates, setRates] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get(`${COINMARKETCAP_BASE_URL}/v1/cryptocurrency/quotes/latest`,{
        headers: {
          'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
          'Access-Control-Allow-Origin': '*'
        },
      });
      console.log('response', response)
      setRates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    rates,
  };
};
