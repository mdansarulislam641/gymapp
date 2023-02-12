import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const {resetUserPassword} = useUserContext();
    // collect user email
    const [email , setEmail] = useState("");
    const handleResetPassword = (event) =>{
        event.preventDefault();
        resetUserPassword(email)
        .then(()=>{
            toast.success("Reset Password send your email..!!")
        })
        .catch((e)=>{
            toast.error(e.message);
        })
        
    }
    return (
        <div className='my-20'>
            {/* login form container */}
            <div className='max-w-[500px] mx-auto'>
                <h3 className='text-5xl font-bold text-center '>Reset your password</h3>
                <p className='font-sans mt-7 mb-5 text-black opacity-50'>We'll send you an email to reset your password.</p>
                <form onSubmit={handleResetPassword}>
                    <div >
                        <label htmlFor="email" className='font-semibold font-sans'>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-full placeholder:opacity-75 font-serif border mt-2 px-4 py-2 opacity-80 placeholder:text-black border-black' type="email" placeholder='mdansarulislam@gmail.com' id="email" />
                    </div>
                   <div className='mt-10 flex gap-6 items-center'>
                   <button className='px-8 py-3 bg-[#2554D7] font-semibold text-white'>RESET</button>
                    <Link to="/login" className='text-[#2554D7] uppercase text-[15px] hover:underline'>Cancel</Link>
                   </div>
                </form>
                {/* if new customer */}
                <div className='mt-8'>
                    <h2 className='text-2xl font-bold'>New Customer?</h2>
                    <p className='font-sans mt-5 tracking-wider'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                   <div className='mt-7'>
                   <Link to="/register" className='text-white font-semibold px-8 py-3 bg-[#53D3D1] uppercase '>Register</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;