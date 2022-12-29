import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../Helpers/api";

export const useNewsHook = () => {
  const [news, setNews] = useState([]);

  const fetch = async () => {
    const response = await axios.get(`${BASE_API_URL}/posts`);
    try {
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    news,
  };
};
