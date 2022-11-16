import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const [data, setData] = useState("");

    return (
        <div className="card-body w-[385px] rounded-lg mx-auto shadow-lg">

            <h2 className='text-5xl font-bold'>Log IN</h2>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                     {...register("email", { required: true })}
                      placeholder="email" className="input input-bordered" />
                      {errors.email && <span className='text-red-400 text-left py-2'>Email field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password"
                     {...register("password", { required: true })} 
                     className="input input-bordered" />
                     {errors.password && <span className='text-red-400 text-left py-2'>Password field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <p>{data}</p>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-success">Login</button>
                </div>
            </form>
            <p>New to Doctors Portal? <Link to='/signup' className='text-blue-400'>Create New Account</Link>  </p>
            <div className="divider">OR</div>
            <button  className="btn">Google</button>
        </div>

    );
};

export default Login;