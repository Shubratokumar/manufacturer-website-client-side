import React from 'react';
import bgBanner from "../../../src/Assets/Images/banner-bg.jpg";
import workshop from "../../../src/Assets/Images/workshop.png";

const Banner = () => {
    return (
            <div class="hero min-h-screen" style={{ background: `url(${bgBanner})` }} >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content flex-col lg:flex-row-reverse text-neutral-content">
                    <img src={workshop} class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt="workshop" />
                    <div>
                        <p className='text-xl uppercase'>Welcome <span className='text-primary '>To</span></p>
                        <h1 class="text-5xl font-bold">Universal <span className='text-primary '>Electronics</span></h1>
                        <p class="py-6">We generally made Computer as well as IT accessories. Explore all our premium products available right now.</p>
                        <button class="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;