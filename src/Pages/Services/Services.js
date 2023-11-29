import React from 'react'
import ServicesMain from '../../Elements/ServiceElements/ServicesMain'
import './Services.css';
import ContactReview from '../../Elements/ContactElements/ContactReviews';

const Services = () => {
  return (
    <div className='container-services'>
        <div className='services-header'>
            <div className='services-top-div'>
                    <h1 className='sevrices-top-title'>Services</h1>
            </div>
        </div>
        <div className='services-main'>
                <ServicesMain />
        </div>
        <div>
            <ContactReview />
        </div>

    </div>
  )
}

export default Services