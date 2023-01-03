import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(url, {
            headers: {
                'content-type': 'application/json'
                // authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(bookings)
    return (
        <div>
            <h1 className="text-3xl text-center py-3"> My Appointment </h1>
            {/* table  */}

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>date</th>
                            <th>Time</th>
                            {/* <th>Payment </th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr
                                key={i}
                            >
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                {/* <td>
                                    {booking.price && <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-sm btn-primary'>Pay</button>
                                    </Link>}
                                </td> */}
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;