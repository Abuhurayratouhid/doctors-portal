import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ConfirmetionModal from '../../../Shared/ConfirmetionModal/ConfirmetionModal';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbbApiKey = process.env.REACT_APP_imgbb_api_key;
    // console.log(imgbbApiKey)
    const {data: specialties = []} = useQuery({
        queryKey: ['specialty'],
        queryFn: ()=> fetch('http://localhost:5000/appointmentSpecialty')
        .then(res => res.json())
    })

    // console.log(specialties)

    const handleAddDoctor = data => {
        const img = data.img[0]
        // console.log(data.img[0])
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`
        fetch(url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData=> {
            if(imgData.success){
                const doctor ={
                    name : data.name,
                    email : data.email,
                    specialty:data.specialty,
                    image: imgData.data.url
                }

                fetch('http://localhost:5000/doctors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                      toast.success('Doctor added successfully')  
                    }
                    console.log(data)
                })
            }
           
            
            // console.log(doctor)
            
        })


    }
    return (
        <div>
            {/* <h1 className='text-3xl'>Add a doctor </h1> */}

            {/* <ConfirmetionModal></ConfirmetionModal> */}

            <div className='h-[800px] bg-slate-100 flex justify-center items-center'>

                {/* form  */}
                <form onSubmit={handleSubmit(handleAddDoctor)} className='w-96 bg-primary p-7' >
                    <h1 className='text-center text-xl font-bold'> Add a Doctor  </h1>
                    <br />
                    <label className="label">
                        <span className="label-text">Name </span>

                    </label>
                    <input type='text' {...register('name', { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />

                    <br />
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type='email' {...register('email', { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    <br />
                    <label className="label">
                        <span className="label-text">Specialty </span>

                    </label>
                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name} 
                            >{specialty.name}</option>)
                        }
                        
                        
                        
                    </select>
                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                    <br />
                    <label className="label">
                        <span className="label-text">Add a avatar</span>

                    </label>
                    <input {...register('img')} type="file" />




                    <p></p>
                    <br />
                    <input type="submit" className='btn btn-accent w-full' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;