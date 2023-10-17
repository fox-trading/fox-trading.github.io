import axios from "axios";
import { BASE_API_URL } from "../Helpers/api";
import {useState} from "react";

export const useAuthHook = () => {
  const [user, setUser] = useState(null)

  const signUp = async (params) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/users`, params);
      return response
    } catch (error) {
      return error
    }
  };

  const login = async (params) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/auth/login`, params);
      return response
    } catch (error) {
      return error
    }
  };

  const getMe = async () => {
    try {
      const response = await axios.post(`${BASE_API_URL}/auth/me`);
      return response.data.user
    } catch (error) {
      console.error(error);
      return error
    }
  }

  return {
    signUp,
    login,
    user,
    setUser,
    getMe
  };
};
