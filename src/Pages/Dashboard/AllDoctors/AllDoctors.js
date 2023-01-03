import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmetionModal from '../../../Shared/ConfirmetionModal/ConfirmetionModal';
import Loading from '../../../Shared/Loading/Loading';

const AllDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState('')
    const { data: doctors = [], isLoading, refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    
    // handleCancelDelete
    const handleCancelDelete = ()=>{
        setDeletingDoctor('')
    }

    const handleDoctorDelete = (info) => {
        const id = info._id
        // console.log(id)
        fetch(`http://localhost:5000/deleteDoctor/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch()
                toast.success(`${info.name} deleted successfully`)

            }
            // console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-4xl text-center py-3'>All doctors </h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>
                                    <label>
                                        <td>{i + 1}</td>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {doctor.specialty}


                                </td>
                                <td>{doctor?.email}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="deleteModal" className="btn btn-warning btn-sm">delete</label>

                                </th>
                                {
                                    deletingDoctor && <ConfirmetionModal
                                        title={`Are you sure to delete ${doctor.name}`}
                                        message={'if you delete once , it is will not be able to withdraw '}
                                        cancelAction = {handleCancelDelete}
                                        successAction={handleDoctorDelete}
                                        info = {deletingDoctor}
                                    ></ConfirmetionModal>
                                }
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllDoctors;