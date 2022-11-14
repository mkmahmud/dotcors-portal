import React from 'react';
import appoientment_setion_Image from '../../../assets/images/appointment.png'
import doctor_small from '../../../assets/images/doctor-small.png'
import './Appoientment_setion.css'

const Appoientment_setion = () => {
    return (
        <div className='h-[636px] my-40 overflow-hidden'>
            <div className="h-[533px] w-full appoientment-doctor relative mt-[103px] " style={{ backgroundImage: `url(${appoientment_setion_Image})` }}>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse items-center">
                        <div className="text-center lg:text-left px-20 text-white">
                            <h2 className='text-[#19D3AE] text-xl font-bold '>Appointment</h2>
                            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            </p>
                            <button className='px-5 py-3 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] '>Get Started</button>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg ">
                            <img src={doctor_small} className='appionentment-image' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoientment_setion;