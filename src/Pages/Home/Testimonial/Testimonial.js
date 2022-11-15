import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='testimonial h-[514px] my-40'>
            <div className="testimonial-head flex justify-between">
                <div className="testimonial-left">

                    <h2 className='text-[#19D3AE] text-left text-[20px] font-bold '>Testimonial</h2>
                    <h1 className="text-[36px]" >What Our Patients Says</h1>
                </div>
                <div className="testimonial-right">
                    <img src={quote} className='h-[156px]' alt="" />
                </div>
            </div>
            <div className="testimonials flex justify-between py-10">
                <div className="singel-testimonial mx-10 rounded-xl h-[274px] shadow-xl p-10">
                    <p className='text-[16px]'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="testimonial-author flex py-5">
                        <img src={people1} className='h-[75px] w-[75px] border border-[#19D3AE] rounded-full border-4' alt="" />
                        <div className="profile text-left px-4">
                            <h2 className='text-[20px] font-bold'>Jhon Kobir</h2>
                            <p>New York</p>
                        </div>
                    </div>
                </div>
                <div className="singel-testimonial mx-10 rounded-xl h-[274px] shadow-xl p-10">
                    <p className='text-[16px]'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="testimonial-author flex py-5">
                        <img src={people1} className='h-[75px] w-[75px] border border-[#19D3AE] rounded-full border-4' alt="" />
                        <div className="profile text-left px-4">
                            <h2 className='text-[20px] font-bold'>Jhon Kobir</h2>
                            <p>New York</p>
                        </div>
                    </div>
                </div>
                <div className="singel-testimonial mx-10 rounded-xl h-[274px] shadow-xl p-10">
                    <p className='text-[16px]'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className="testimonial-author flex py-5">
                        <img src={people1} className='h-[75px] w-[75px] border border-[#19D3AE] rounded-full border-4' alt="" />
                        <div className="profile text-left px-4">
                            <h2 className='text-[20px] font-bold'>Jhon Kobir</h2>
                            <p>New York</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;