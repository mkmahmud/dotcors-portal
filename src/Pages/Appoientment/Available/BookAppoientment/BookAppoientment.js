import React from 'react';

const BookAppoientment = ({ data }) => {
    const { name, slots } = data;
    console.log(data)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-lg font-bold text-center">{name}</h2>

                {
                    slots.length > 0 ? `${slots.length} ${slots.length > 1 ? 'slots' : 'slot'} Available`: 'No more Available Today'
                }
                <select className="select select-accent w-full max-w-xs">
                    <option disabled selected>Available Time</option>
                    {
                        slots.map(slot => <option>{slot}</option>)
                    }
                </select>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookAppoientment;