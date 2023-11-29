import React from "react";

const ContactDetails = () => {
  return (
    <div className="container-left">
      <div>
        <h1 className="title">Opening Times</h1>
      </div>
      <div className="time-fields">
        <div className="time-field">
          <p>
            <strong className="days">Monday-Thursday</strong>
          </p>
          <p>
            <strong className="time">10AM - 8PM</strong>
          </p>
        </div>
        <div className="time-field">
          <p>
            <strong className="days">Friday</strong>
          </p>
          <p>
            <strong className="time">10AM - 6PM</strong>
          </p>
        </div>{" "}
        <div className="time-field">
          <p>
            <strong className="days">Saturday</strong>
          </p>
          <p>
            <strong className="time">10AM - 4PM</strong>
          </p>
        </div>{" "}
        <div className="time-field">
          <p>
            <strong className="days">Sunday</strong>
          </p>
          <p>
            <strong className="time">CLOSED</strong>
          </p>
        </div>
      </div>
      <div className="detail">
        <h1 className="detail-title">Contact Details</h1>
        <p className="detail-text1">
          775 New York Ave, Brooklyn, Kings, New York 11203
        </p>
        <p className="number">+31 231 213125</p>
        <p className="text-email">sdadasvf@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
