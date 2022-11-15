import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
        fetch('AppointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <div>
            <p className='text-center text-primary font-bold my-10'>Available appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            <div>
            { treatment &&
                <BookingModal
                treatment = {treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                ></BookingModal>
            }
            </div>
        </div>
    );
};

export default AvailableAppointment;