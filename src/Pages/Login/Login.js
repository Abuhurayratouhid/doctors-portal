import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
    return (
        <div>
            <div className='h-[800px] bg-slate-200 flex justify-center items-center'>
                
                {/* form  */}
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <h1> Login page </h1>
                <br />
                    
                    <input {...register("firstName")} placeholder="First name" className="input input-bordered w-full max-w-xs"  />
                    <br />
                    {/* <select {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                    </select> */}
                    <textarea {...register("aboutYou")} placeholder="About you" className="textarea textarea-bordered"/>
                    <p>{data}</p>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;