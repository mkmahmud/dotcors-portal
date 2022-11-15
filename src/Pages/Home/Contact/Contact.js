import React from 'react';
import './contact.css'
import bg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='contact py-20' style={{backgroundImage:`url(${bg})`}}>
            <h2 className='text-[#19D3AE] text-xl font-bold '>Contact us</h2>
            <h1 className="text-5xl font-bold">Stay connected with us</h1>
            <form className='w-[450px] mx-auto py-5'>
                <input type="Email" placeholder="Type your email here" className="input input-bordered w-full my-1 " /> <br />
                <input type="text" placeholder="Type Sub here" className="input input-bordered w-full my-1 " /> <br />
                <textarea className="textarea textarea-bordered w-full my-1" placeholder="Message"></textarea> <br />
                <button type='submit' className='px-5 py-3 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] '>Submit</button>
            </form>
        </div>
    );
};

export default Contact;