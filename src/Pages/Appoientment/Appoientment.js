import React, { useState } from 'react';
import AvailableDate from './Available/AvailableDate';
import Bookmodal from './BookModal/Bookmodal';
import Calender from './Calender/Calender';

const Appoientment = () => {


    // Set selected Time
    const [selected, setSelected] = useState();



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