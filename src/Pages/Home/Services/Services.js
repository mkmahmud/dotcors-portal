import React from 'react';
import img1 from '../../../assets/images/cavity.png'
import img2 from '../../../assets/images/whitening.png'
import img3 from '../../../assets/images/fluoride.png'
import exeptional from '../../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='services py-20'>
            <h2 className="sectionTitle text-xl text-[#19D3AE] font-bold">Our SERVICES</h2>
            <h2 className="sectionSubTitle text-4xl font-bold">SERVICE WE PROVIED</h2>
            <div className="service flex justofy-between py-10 " >
                <div className="singelService shadow-lg px-15 py-5 text-center m-5">
                    <img src={img1} className='m-auto py-5' alt="" />
                    <h2 className='text-xl py-5'>Fluoride Treatment</h2>
                    <p className='px-5'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className="singelService shadow-lg px-15 py-5 text-center m-5">
                    <img src={img2} className='m-auto py-5' alt="" />
                    <h2 className='text-xl py-5'>Cavity Filling</h2>
                    <p className='px-5'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className="singelService shadow-lg px-15 py-5 text-center m-5">
                    <img src={img3} className='m-auto py-5' alt="" />
                    <h2 className='text-xl py-5'>Teeth Whitening</h2>
                    <p className='px-5'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left px-20">
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                        <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <button className='px-5 py-3 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] '>Get Started</button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                       <img src={exeptional} className='rounded-lg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;