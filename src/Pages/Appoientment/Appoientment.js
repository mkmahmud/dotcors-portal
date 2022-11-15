import React, { useState } from 'react';
import AvailableDate from './Available/AvailableDate';
import Calender from './Calender/Calender';

const Appoientment = () => {


    const [selected, setSelected] = useState()

    return (
        <div>
            <Calender
                selected={selected}
                setSelected={setSelected}
            ></Calender>
            <AvailableDate
                selected={selected}
            ></AvailableDate>
        </div>
    );
};

export default Appoientment;