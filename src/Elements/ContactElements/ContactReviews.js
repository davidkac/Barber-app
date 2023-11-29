import React from "react";
import avatar1 from "../../assets/avadabarbers-trimcut-gallery3-200x201.jpg";
import avatar2 from "../../assets/avadabarbers-trimcut-gallery7-200x201.jpg";
import avatar3 from "../../assets/avadabarbers-trimcut-gallery6.jpg";

const ContactReviews = () => {
  const avatars = [
    {
      img: avatar1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
      name: "John Doe",
    },
    {
      img: avatar2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
      name: "Pete Jones",
    },
    {
      img: avatar3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.",
      name: "Mar Wilson",
    },
  ];

  return (
    <div className="box-bot">
      <div className="box-head">
        <p className="box-text">WHAT PEOPLE ARE SAYING</p>
        <h1 className="box-title">Reviews</h1>
      </div>
      <div  className="box-cards">
      {avatars
        ? avatars.map((avatar, index) => {
            return (
              <div key={index} className="box-card">
                <p className="card-text">{avatar.text}</p>
                <img src={avatar.img}   className="card-img" alt="asda"/>
                <p className="card-name">{avatar.name}</p>
              </div>  
            );
          })
        : null}
        </div>
    </div>
  );
};

export default ContactReviews;
