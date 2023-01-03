import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken' ;

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, userProfile, googleLogin } = useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    // handle googleLogin 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const handleSignUp = data => {
        // console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('user successfully created')
                console.log(user);
                handleUserProfile(name)
                saveUser(name, email)


            })
            .catch(error => {
                console.log(error)
            })

    }

    // update user profile 
    const handleUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        userProfile(profile)
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    // user save to the DB 
    const saveUser = (name, email) => {
        const user = { name, email }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                console.log(data)
            })
    }

    // get access token 
    
    return (
        <div>
            <div className='h-[800px] bg-slate-100 flex justify-center items-center'>

                {/* form  */}
                <form onSubmit={handleSubmit(handleSignUp)} className='w-96 bg-slate-200 p-7' >
                    <h1 className='text-center text-xl font-bold'> Sign up </h1>
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
                        <span className="label-text">Password</span>

                    </label>
                    <input type='password' {...register('password', { required: "Password is required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                    <br />




                    <p></p>
                    <br />
                    <input type="submit" className='btn btn-accent w-full' />
                    <p className='mt-3'>Already have an account <Link to='/login' className='text-primary'>Please login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;