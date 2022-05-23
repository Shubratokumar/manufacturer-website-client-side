import React from 'react';
import Banner from './Banner';
import Footer from './../Shared/Footer';
import Feedback from './Feedback';
import BusinessSummery from './BusinessSummery';
import Products from './Products';
import Reviews from './Reviews';
import EmergencyContact from './EmergencyContact';

const Home = () => {
    return (
            // className='lg:px-20'
        <div>
            <Banner/>
            <Products/>
            <BusinessSummery/>
            <Reviews/>
            <EmergencyContact/>
            <Feedback/>
            <Footer/>
        </div>
    );
};


export default Home;