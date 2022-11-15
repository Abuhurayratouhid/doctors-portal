import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary text-center font-bold">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available now </p>
                <div className="card-actions justify-center">
                    
                    <label 
                    htmlFor="my-modal-3" 
                    className="btn btn-primary text-white"
                    onClick={()=> setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;