import { Outlet } from "react-router-dom";
import Main from "./Main/Main";
import CourseList from "../Course/CourseList";
import NewsList from "../News/NewsList";
import Stats from "./Stats/Stats";
import Merch from "./Merch/Merch";
import Video from "./Video/Video";
import SimpleSlider from "../../Components/Slider/Slider";
import { COURSES_LIST } from "../../Helpers/course";
import { NEWS_LIST } from "../../Helpers/news";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <div>
          <Main />
          <SimpleSlider />
          <div>
            <CourseList course={COURSES_LIST} link="courses" />
          </div>
          <Stats />
          <Outlet />
          <div className="news-main_wrapper">
            <NewsList news={NEWS_LIST} news_route="news"/>
          </div>

          <Merch />
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Home;