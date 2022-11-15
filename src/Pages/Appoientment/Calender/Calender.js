import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = ({selected, setSelected}) => {
    return (
        <div>
            <div className="hero-content calender flex-col lg:flex-row-reverse px-40 py-20" style={{ backgroundImage: `url(${bg})` }}>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <img src={chair} alt="" />
                </div>
                <div className="text-center lg:text-left px-10">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calender;