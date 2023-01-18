import { Routes, Route, Navigate } from "react-router-dom";

import { COURSES_LIST } from "./Helpers/course";
import Home from "./Pages/Home/Home";
import CourseDetails from "./Pages/Course/Details";
import CourseList from "./Pages/Course/CourseList";
import NewsDetails from "./Pages/News/NewsDetails";
import NewsList from "./Pages/News/NewsList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Stats from "./Pages/Home/Stats/Stats";
import { useNewsHook } from "./Hooks/useNewsHook";

import "./App.scss";

function App() {
  const { news } = useNewsHook();

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home news={news} />} />
        <Route path="/news" element={<NewsList news={news}/>} />
        <Route path="/news-details/:index" element={<NewsDetails news={news}/>} />
        <Route path="/courses" element={<CourseList courses={COURSES_LIST}/>} />
        <Route path="/course/:name" element={<CourseDetails />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />
    </main>
  );
}

export default App;
