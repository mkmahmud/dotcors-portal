import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className="card-body w-1/2 mx-auto">

            <h2 className='text-5xl font-bold'>Log IN</h2>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" {...register("firstName")} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <p>{data}</p>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>

    );
};

export default Login;