import {useEffect} from "react";
import "./Contact.css";
import ContactForm from "../../Elements/ContactElements/ContactForm";
import ContactDetails from "../../Elements/ContactElements/ContactDetails";
import ContactReviews from "../../Elements/ContactElements/ContactReviews";
import {useLocation} from 'react-router-dom';

const Contact = () => {

  
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container">
      <div className="container-box">
        <div className="container-top">
          <h1 className="contact-us">Contact Us</h1>
        </div>
        <div className="container-mid">
          <ContactDetails />
          <div className="container-right">
            <ContactForm />
          </div>
        </div>
        <ContactReviews />
      </div>
    </div>
  );
};

export default Contact;
