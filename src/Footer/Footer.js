import React from "react";
import "./Footer.css";
import shopImg from "../assets/Footer/avadabarbers_footer_shop_image-400x312.webp";
import bookImg from "../assets/Footer/avadabarbers_footer_appointment_image-400x312.webp";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
  
    <div className="footer-container">
        <div className="box-footer">
        <div className="left-box-footer">
        <img className="footer-img" src={shopImg} alt="img" />
        <button className="action-btn">SHOP OUR RANGE NOW</button>
      </div>
      <div className="middle-box-footer">
        <div className="head-box-middle">
          <h1 className="head-tite">BARBERS</h1>
        </div>
        <div className="middle-box-main">
          <p className="text-middle">Avada Barbers</p>
          <p className="text-middle"> 123 New York Street</p>
          <p className="text-middle"> New York City</p>
          <p className="text-middle">info@yourwebsite.com</p>
          <p className="text-middle">+3124124-123123</p>
        </div>
        <div className="middle-box-bot">
          <p className="text-follow">FOLLOW US</p>
        </div>
        <div className="social-btns">
          <button className="social-btn"><FacebookIcon sx={{color:'grey'}}/></button>
          <button  className="social-btn"><TwitterIcon sx={{color:'grey'}}/></button>
          <button  className="social-btn"><InstagramIcon sx={{color:'grey'}} /></button>
          <button  className="social-btn"><YouTubeIcon sx={{color:'grey'}} /> </button>
        </div>
      </div>
      <div className="right-box-footer">
          <img className="footer-img" src={bookImg} alt='img' />
          <button className="action-btn">BOOK YOUR APPOINTMENT</button>
      </div>
      </div>
    </div>
  );
};

export default Footer;
