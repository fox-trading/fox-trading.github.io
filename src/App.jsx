import { Routes, Route } from "react-router-dom";

import { COURSES_INFO } from "./Helpers/course";
import Home from "./Pages/Home";
import CourseDetails from "./Pages/Pages/Course/Details";
import CourseList from "./Pages/Pages/Course/CourseList";
import CurrentNews from "./Pages/Pages/News/CurrentNews";
import NewsList from "./Pages/Pages/News/NewsList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { NEWS_INFO } from "./Helpers/news";
import Button from "./Components/Button/Button";

import "./App.scss";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/news"
          element={
            <NewsList
              news={NEWS_INFO}
              header={<Header />}
              footer={<Footer />}
              button={<Button text=" Показать еще новости" />}
            />
          }
        />
        <Route path="/currentnews" element={<CurrentNews />} />
        <Route
          path="/courses"
          element={
            <CourseList
              course={COURSES_INFO}
              header={<Header />}
              footer={<Footer />}
            />
          }
        />
        <Route path="/course/:name" element={<CourseDetails />} />
      </Routes>
    </main>
  );
}

export default App;
