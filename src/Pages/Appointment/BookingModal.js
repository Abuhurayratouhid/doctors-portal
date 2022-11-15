import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleModalForm = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name= form.name.value;
        const email= form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            slot,
            name,
            email,
            phone,
        }
        setTreatment(null)
        console.log(booking)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className='mt-10'>
                        <form onSubmit={handleModalForm}>
                            <input type="text" value={date} disabled className="input input-bordered w-full mt-2" />
                            <select name='slot' className="select select-bordered w-full ">
                                
                                {
                                    slots.map((slot, i) => <option
                                    key={i}
                                     value={slot}
                                     >{slot}</option>)
                                }
                            </select>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full mt-2" />
                            <input name='email' type="email" placeholder="Email address" className="input input-bordered w-full mt-2" />
                            <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full mt-2" />
                            <br />
                            <input className='btn btn-accent w-full mt-2' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;