import React from 'react';
import Banner from './Banner';
import Footer from './../Shared/Footer';
import Feedback from './Feedback';
import BusinessSummery from './BusinessSummery';
import Products from './Products';

const Home = () => {
    return (
            // className='lg:px-20'
        <div>
            <Banner/>
            <Products/>
            <BusinessSummery/>
            <Feedback/>
            <Footer/>
        </div>
    );
};


export default Home;