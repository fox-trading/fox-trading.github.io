import { Routes, Route } from "react-router-dom";

import { COURSES_LIST } from "./Helpers/course";
import Home from "./Pages/Home/Home";
import CourseDetails from "./Pages/Course/Details";
import CourseList from "./Pages/Course/CourseList";
import NewsDetails from "./Pages/News/NewsDetails";
import NewsList from "./Pages/News/NewsList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Button/Button";
import { useNewsHook } from "./Hooks/useNewsHook";

import "./App.scss";

function App() {
  const { news } = useNewsHook();

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/news"
          element={
            <NewsList
              news={news}
              button={<Button text=" Показать еще новости" />}
              news_height="news_height"
              news_overflow="news_content_no"
              
            />
          }
        />
        <Route path="/news-details" element={<NewsDetails news={news}/>} />

        <Route path="/courses" element={<CourseList courses={COURSES_LIST}/>} />
        <Route path="/course/:name" element={<CourseDetails />} />
      </Routes>
      
      <Footer />
    </main>
  );
}

export default App;
