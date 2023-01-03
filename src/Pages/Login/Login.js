import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const {loginUser,googleLogin}= useContext(AuthContext)
    const { register,formState: { errors } ,handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const from = location.state?.from?.pathname || "/";
    
    if(token){
        navigate(from, {replace: true});
    }
    // handle googleLogin 
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(()=>{
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
    }

    const handleLogin = data => {
        const email = data.email;
        const password = data.password ;
        setLoginError('')
        // console.log(data)
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            setLoginUserEmail(email)
            
            toast.success('login successful')
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            setLoginError(error.message)
        })

    };
    return (
        <div>
            <div className='h-[800px] bg-slate-200 flex justify-center items-center'>

                {/* form  */}
                <form className='w-96 bg-slate-100 p-7' onSubmit={handleSubmit(handleLogin)}>
                    <h1 className='text-center text-xl font-bold'> Login  </h1>
                    <br />
                    <label className="label">
                        <span className="label-text">Email</span>
                        
                    </label>
                    <input type='email' {...register("email", {required:'email is required'})}  className="input input-bordered w-full max-w-xs" />
                     {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    <br />
                    <label className="label">
                        <span className="label-text">Password</span>
                        
                    </label>
                    <input type='password' {...register("password", {required: 'password is required'})}  className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    <br />
                    <label className="label">
                        <span className="label-text">Forget password ?</span>
                    </label>
                    <label className="label">
                        <span className="label-text text-rose-500">{loginError && loginError}</span>
                    </label>
                        


                    <p>{data}</p>
                    <br />
                    <input type="submit" className='btn btn-accent w-full'/>
                    <p className='mt-3'>New to doctor's portal <Link to='/signup' className='text-primary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;