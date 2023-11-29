import React from "react";
import award1 from "../../assets/avadabarbers-about-awardlogo-1-200x232.png";
import award2 from "../../assets/avadabarbers-about-awardlogo-2-200x200.png";
import award3 from "../../assets/avadabarbers-about-awardlogo-3.png";
import './AboutAwards.css';

const AboutAwards = () => {
  const awards = [
    {
      img: award1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim",
    },
    {
      img: award2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim",
    },
    {
      img: award3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim",
    },
  ];

  return (
    <>
      <div className="about-bottom-head">
        <p className="about-bottom-head-text">WE ARE THE BEST</p>
        <h1 className="about-bottom-head-title">Our Awards</h1>
      </div>
      <div className="about-bottom-main">
        {awards
          ? awards.map((award, index) => {
              return (
                <div className="bottom-main-card" key={index}>
                  <img
                    src={award.img}
                    alt={index}
                    className="bottom-main-card-img"
                  />
                  <p className="bottom-main-text">{award.text}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default AboutAwards;
