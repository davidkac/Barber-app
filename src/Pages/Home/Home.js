import {useEffect} from "react";
import MainPicture from "../../assets/main.jpeg";
import "./Home.css";
import { useLocation } from 'react-router-dom';
import GroomingProducts from "../../Elements/HomeElements/GroomingProducts";
import ServiceHome from "../../Elements/HomeElements/ServiceHome";
import ContactReviews from "../../Elements/ContactElements/ContactReviews"
import ProBarbers from "../../Elements/HomeElements/ProBarbers";

const Home = () => {

  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="main-box">
      <div className="box">
        <div className="left-box">
          <h1 className="left-box-title">Barber Shop</h1>
          <div className="left-box-line"></div>
          <p className="left-box-text">The Pinnacle of Male grooming</p>
          <button className="left-box-btn">LEARN MORE</button>
        </div>
        <div className="right-box">
          <img src={MainPicture} alt="main" />
        </div>
      </div>
      <ProBarbers />
      <ServiceHome />
      <GroomingProducts />
      <ContactReviews />
    </div>
  );
};

export default Home;
