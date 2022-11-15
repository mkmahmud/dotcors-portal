import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import BookAppoientment from './BookAppoientment/BookAppoientment';

const AvailableDate = ({selected}) => {
// Available Data 
const [dates, setDates] = useState([]);

// Get DAta 
useEffect(()=> {
    fetch('available.json')
     .then(res => res.json())
     .then(data => setDates(data))
}, [])
    
   
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div>
            
            <h2 className='text-[#19D3AE]  text-[20px] font-bold '>{footer}</h2>
            <div className="bookAppoientment grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    dates.map(date => <BookAppoientment key={date.id} data={date}></BookAppoientment>)
                }
            </div>
        </div>
    );
};

export default AvailableDate;