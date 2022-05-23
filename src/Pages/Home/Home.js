import React from 'react';
import Banner from './Banner';
import Footer from './../Shared/Footer';
import Contact from './Contact';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
            // className='lg:px-20'
        <div>
            <Banner/>
            <BusinessSummery/>
            <Contact/>
            <Footer/>
        </div>
    );
};


export default Home;