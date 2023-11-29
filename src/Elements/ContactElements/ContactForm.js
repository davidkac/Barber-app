import React from "react";
import "./Appointment.css";

const ContactForm = () => {
  return (
    <div className="appointment">
      <div className="appointment-header">
        <h1 className="first-title">Book An Appointment</h1>
        <p className="first-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
          dolor nec consectetur volutpat. In condimentum auctor semper. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus dolor
          nec consectetur volutpat. In condimentum auctor semper.
        </p>
      </div>
      <div className="form-container">
        <form className="form">
          <div className="top">
            <div className="first">
              <label className="label">Your Name</label>
              <input className="input-field" />
              <label className="label">Select Service</label>
              <select name="services" className="input-field">
                <option className="option" value="hair-cut">Hair Cut</option>
                <option className="option" value="beard-trim">Beard Trim</option>
                <option className="option" value="hair-stlye">Hair Style</option>
                <option className="option" value="wash-and-dry">Wash & Dry</option>

              </select>
            </div>
            <div className="second">
              <label className="label">Email</label>
              <input className="input-field" />
              <label className="label">Date</label>
              <input className="input-field" type="date"  />
            </div>
          </div>
          <div className="bottom">
            <div className="bot">
              <label className="label">Your Message</label>
              <textarea className="text" />
            </div>
            <button className="send-btn">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
