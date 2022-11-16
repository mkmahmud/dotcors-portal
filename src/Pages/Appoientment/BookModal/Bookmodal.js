import React from 'react';

const Bookmodal = ({ modalData, selectedDate }) => {
    const { name, slots } = modalData;

    return (

        <>
            < input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <input type="text" value={selectedDate} readOnly className="input input-bordered w-full max-w-xs my-2" />
                        <select className="select select-accent w-full max-w-xs">
                            <option disabled selected>Available Time</option>
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" /> <br />
                        <button type='submit' className='px-5 py-3 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] '>Book </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Bookmodal;