import React from 'react';
import Banner from './Banner';
import Feedback from './Feedback';
import BusinessSummery from './BusinessSummery';
import Products from './Products';
import Reviews from './Reviews';
import EmergencyContact from './EmergencyContact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <BusinessSummery/>
            <Reviews/>
            <EmergencyContact/>
            <Feedback/>
            
        </div>
    );
};


export default Home;