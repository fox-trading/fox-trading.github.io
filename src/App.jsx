import React, {useEffect, useState} from "react";
import axios from "axios";
import {Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";

import { COURSES_LIST } from "./Helpers/course";
import Home from "./Pages/Home/Home";
import CourseDetails from "./Pages/Course/Details";
import CourseList from "./Pages/Course/CourseList";
import NewsDetails from "./Pages/News/NewsDetails";
import NewsList from "./Pages/News/NewsList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Stats from "./Pages/Home/Stats/Stats";
import SignUp from "./Pages/Registration/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CoursePremium from "./Pages/CoursePremium/CoursePremium";
import { useNewsHook } from "./Hooks/useNewsHook";
import useTokenHook from "./Hooks/useTokenHook";
import { useAuthHook } from "./Hooks/useAuthHook";

import "./App.scss";

const secureRoutes = ['/dashboard', '/course-premium'];

function App() {
  const { token } = useTokenHook();
  const { news } = useNewsHook();
  const { getMe } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation()

  if (token) {
    axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
  }

  const [user, setUser] = useState();

  const fetchUser = async () => {
    const response = await getMe()
    setUser(response)
  }

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      if (secureRoutes.includes(location.pathname)) navigate('/');
    }
  }, [token])

  return (
    <main className="app">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/course-premium" element={<CoursePremium user={user}/>} />

        <Route path="/" element={<Home news={news} />} />
        <Route path="/news" element={<NewsList news={news}/>} />
        <Route path="/news/:index" element={<NewsDetails news={news}/>} />
        <Route path="/courses" element={<CourseList courses={COURSES_LIST}/>} />
        <Route path="/course/:name" element={<CourseDetails />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
