import { Outlet } from "react-router-dom";
import Main from "./Main/Main";
import CourseList from "../Course/CourseList";
import NewsList from "../News/NewsList";
import Stats from "./Stats/Stats";
import Merch from "./Merch/Merch";
import Video from "./Video/Video";
import SimpleSlider from "../../Components/Slider/Slider";
import { COURSES_LIST } from "../../Helpers/course";

import "./Home.scss";

const NEWS_COUNT = 3;

const Home = ({news}) => {
  return (
    <div className="home">
      <div className="home_content">
        <div>
          <Main />
          <SimpleSlider />
          <div className="block-wrapper">
            <CourseList courses={COURSES_LIST} link="courses" />
          </div>
          <div className="block-wrapper">
            <Stats link="stats" />
          </div>
          <Outlet />
          {!!news?.length && <div className="block-wrapper">
            <NewsList news={news.slice(0, NEWS_COUNT)} link="news"/>
          </div>}
          <div className="block-wrapper">
            <Merch />
          </div>
          {/*<Video />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
