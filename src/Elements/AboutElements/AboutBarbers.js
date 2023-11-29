import React from 'react'
import './AboutBarbers.css';

const AboutBarbers = () => {
  return (
    <div className="about-wrap">
    <div className="mid-div">
      <p className="mid-title">WELCOME TO</p>
      <h1 className="mid-heading">Avada Barbers</h1>
      <div className="mid-div-text">
        <p className="mid-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          maximus dolor nec consectetur volutpat. In condimentum auctor
          semper.
        </p>
        <p className="mid-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          maximus dolor nec consectetur volutpat. In condimentum auctor
          semper.
        </p>
      </div>
      <button className="book-btn">BOOK YOUR APPOINTMENT NOW</button>
    </div>
    </div>
  )
}

export default AboutBarbers