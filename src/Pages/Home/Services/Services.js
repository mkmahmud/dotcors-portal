import React from 'react';
import img1 from '../../../assets/images/cavity.png'
import img2 from '../../../assets/images/whitening.png'
import img3 from '../../../assets/images/fluoride.png'

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
                    <img src={img2} className='m-auto py-5'  alt="" />
                    <h2 className='text-xl py-5'>Cavity Filling</h2>
                    <p className='px-5'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className="singelService shadow-lg px-15 py-5 text-center m-5">
                    <img src={img3} className='m-auto py-5'  alt="" />
                    <h2 className='text-xl py-5'>Teeth Whitening</h2>
                    <p className='px-5'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>

        </div>
    );
};

export default Services;