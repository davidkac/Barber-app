import React from "react";
import masinica2 from "../../assets/ServicesIMG/masinica2.png";
import cesljic from "../../assets/ServicesIMG/cesljic.png";
import braduljica2 from "../../assets/ServicesIMG/braduljica2.png";
import uljcici from "../../assets/ServicesIMG/cucla.png";
import kofilica from "../../assets/ServicesIMG/kofi.png";
import sapunici2 from "../../assets/ServicesIMG/sapunici2.png";
import './ServicesMain.css';

const ServicesMain = () => {
  const items = [
    {
      img: masinica2,
      name: "Trim & Cut",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "10",
    },
    {
      img: sapunici2,
      name: "Wash & Dry",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "25",
    },
    {
      img: braduljica2,
      name: "Beard Tidy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "15",
    },
    {
      img: cesljic,
      name: "Hair Styling",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "150",
    },
    {
      img: uljcici,
      name: "Oils & Scrubs",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "5",
    },
    {
      img: kofilica,
      name: "Artisan Coffee",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nibh est. Nunc ac gravida quam, vitae luctus nisi.",
      price: "5",
    },
  ];

  return (
    <div className="services-main-box">
        <div className="services-main-box-top">
          <p className="services-main-top-text">WHATEVER YOU NEED</p>
          <h1 className="services-main-top-title">Range of Services</h1>
        </div>
      <div className="services-main-items">
      {items
        ? items.map((item, index) => {
            return (
              <div className="services-main-item">
                <img src={item.img} alt={index} className="main-box-img" />
                <h1 className="main-box-name">{item.name}</h1>
                <h3 className="main-box-price">FROM ${item.price}</h3>
                <p className="main-box-text">{item.text}</p>
              </div>
            );
          })
        : null}
        </div>
      <button className="services-main-btn">BOOK YOUR APPOINTMENT NOW</button>
    </div>
  );
};

export default ServicesMain;
