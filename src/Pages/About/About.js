import "./About.css";
import { useEffect } from "react";
import {useLocation} from 'react-router-dom';
import AboutUs from "../../Elements/AboutElements/AboutUs";
import AboutBarbers from "../../Elements/AboutElements/AboutBarbers";
import AboutAwards from "../../Elements/AboutElements/AboutAwards";

const About = () => {


  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

 
  return (
    <div className="about-cont">
      <div className="about-top">
      <AboutUs />
      </div>
      <div className="about-mid">
       <AboutBarbers />
        </div>
        <div className="about-bottom">
          <AboutAwards />
        </div>
      </div>
  );
};

export default About;
