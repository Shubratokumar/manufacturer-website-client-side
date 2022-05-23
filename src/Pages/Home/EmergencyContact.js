import React from 'react';
import { IoMdCall } from 'react-icons/io';
import contact from "../../../src/Assets/Images/contact.png"

const EmergencyContact = () => {
    return (
        <section className='hero w-full text-center' style={{ background: `url(${contact})` }}>
            <div className="hero-overlay bg-opacity-50 hover:bg-opacity-70"></div>
            <div className='py-24'>
                <IoMdCall className="text-primary w-12 h-12 mb-3 inline-block"></IoMdCall>
                <h2 className='text-2xl font-bold leading-relaxed text-white'>Any Product or Maintenance related issues? we are happy to help you <br />
                    Call us now: <span className='text-primary'>(+880) 1600000000</span>
                </h2>
                <button className='btn btn-primary mt-5'>Contact Us</button>
            </div>
        </section>
    );
};

export default EmergencyContact;