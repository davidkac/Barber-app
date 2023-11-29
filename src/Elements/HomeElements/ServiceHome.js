import React from "react";
import Masinica from "../../assets/masinica.png";
import Sapunici from "../../assets/sapunici.png";
import Braduljica from "../../assets/braduljica.png";
import './ServiceHome.css';

const ServiceHome = () => {
  const items = [
    {
      img: Masinica,
      title: "Trim & Cut",
      text: "Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.",
    },
    {
        img: Sapunici,
        title: "Wash & Dry",
        text: "Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.",
      }, {
        img: Braduljica,
        title: "Trim & Cut",
        text: "Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.",
      },
  ];
  return (
  <div className="services-grooming">
        <div className="services-grooming-header">
            <p className="services-grooming-text">MENS GROOMING</p>
            <h1 className="services-grooming-title">Services</h1>
        </div>
        <div className="services-grooming-main">
            {items ? items.map((item,index) => {
                return <div className="services-grooming-items" key={index}>
                    <img src={item.img} className="services-grooming-img"  alt="imgasda"/>
                    <h1 className="services-grooming-item-title">{item.title}</h1>
                    <p className="services-grooming-item-text">{item.text}</p>
                </div>
            }) : null}
        </div>
        <button className="services-grooming-btn">READ ABOUT OUR SERVICES</button>

  </div>)
};

export default ServiceHome;
