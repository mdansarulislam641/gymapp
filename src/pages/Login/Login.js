import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link,  useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useUserContext();
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // firebase database use


    const handleLoginUser = (event) => {
        event.preventDefault();
        loginUser(email , password)
        .then(result =>{
            console.log(result)
            toast.success("successfully login user");
            navigate('/')     
           })
        .catch((e)=>{
            console.log(e.message)
            toast.error(e.message);
        })
        
    }
    return (
        <div className='my-20 mx-5'>
            {/* login form container */}
            <div className='max-w-[500px] mx-auto'>
                <h3 className='text-5xl font-bold text-center'>Login</h3>
                <form onSubmit={handleLoginUser}>
                    <div >
                        <label htmlFor="email" className='font-semibold font-sans'>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-full placeholder:opacity-75 font-serif border mt-2 px-4 py-2 placeholder:text-black border-black' type="email" placeholder='mdansarulislam@gmail.com' id="email" />
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="password" className='font-semibold font-sans '>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className='w-full placeholder:opacity-75 font-serif border placeholder:text-black border-black mt-2 px-4 py-2 opacity-50' id='password' type="password" placeholder='********' />
                    </div>
                   <div className='mt-10 flex gap-6 items-center'>
                   <button className='px-8 py-3 bg-[#2554D7] font-semibold text-white'>Login</button>
<Link to="/reset-password" className='text-[#2554D7] uppercase text-[15px] hover:underline'>Forgot your password?</Link>
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

export default Login;