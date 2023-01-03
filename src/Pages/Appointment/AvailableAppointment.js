import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const date = format(selectedDate, 'PP')
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const {data:appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: ()=> fetch(`http://localhost:5000/appointments?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointments')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
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
                refetch={refetch}
                ></BookingModal>
            }
            </div>
        </div>
    );
};

export default AvailableAppointment;