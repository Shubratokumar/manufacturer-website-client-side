import React from 'react';
import Banner from './Banner';
import Footer from './../Shared/Footer';
import Contact from './Contact';

const Home = () => {
    return (
            // className='lg:px-20'
        <div>
            <Banner/>
            <Contact/>
            <Footer/>
        </div>
    );
};


export default Home;