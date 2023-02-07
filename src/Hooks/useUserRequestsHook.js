import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../Helpers/api";

export const useUserRequestsHook = () => {
  const send = async (params) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/requests/new`, { params });
      return response
    } catch (error) {
      console.error(error);
      return error
    }
  };

  return {
    send,
  };
};
