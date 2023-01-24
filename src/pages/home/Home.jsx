import "./home.css";
import Header from "./header/Header";
import Service from "./service/Service";
import Works from "./our_work/Works";
import Comment from "./comment/Comment";
import OurValues from "./our_values/OurValues";
import StartProject from "./startProject/StartProject";

export const Home = ({ theme }) => {
  return (
    <div className='wrapper' id={theme}>
      <Header theme={theme} />
      <Service theme={theme} />
      <Works theme={theme} />
      <Comment theme={theme} />
      <OurValues theme={theme} />
      <StartProject theme={theme} />
    </div>
  );
};
