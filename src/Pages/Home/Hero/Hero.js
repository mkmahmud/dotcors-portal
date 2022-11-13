import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Hero.css'
import bgImage from '../../../assets/images/bg.png'

const Hero = () => {
    return (
        <div className="myHero py-20" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero py-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <img src={chair} alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='px-5 py-3 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] '>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="heroOptions flex justify-evenly text-white text-left">
                <div className="w-[33%] w-[33%] singelOptions mx-4 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-5 py-10 rounded-xl flex justify-between items-center">
                    <i class="fa-solid fa-clock text-[50px]"></i>
                    <div className="hero-option-body px-3">
                        <h2 className='text-[20px] text-bold'>Opening Hours</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur !</p>
                    </div>
                </div>
                <div className="w-[33%] singelOptions mx-4 bg-[#3A4256] px-5 py-10 rounded-xl flex justify-between items-center ">
                    <i class="fa-solid fa-clock text-[50px]"></i>
                    <div className="hero-option-body px-3">
                        <h2 className='text-[20px] text-bold'>Visit Our Location</h2>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className="w-[33%] singelOptions mx-4 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-5 py-10 rounded-xl flex justify-between items-center">
                    <i class="fa-solid fa-clock text-[50px]"></i>
                    <div className="hero-option-body px-3">
                        <h2 className='text-[20px] text-bold'>Contact us now</h2>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;