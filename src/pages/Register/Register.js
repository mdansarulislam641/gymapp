import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {VscError} from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/AuthProvider/AuthProvider';
import database from '../../firebase/firebaseDatabase/database';
const Register = () => {
    
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [passwordError , setPasswordError] = useState("");
    // redirect user for another route after successfully register
    const navigate = useNavigate()
    // firebase database 
    const usersCollectionRef = collection(database, "users") ;
    
    // auth provider
    const {createNewUser} = useUserContext()
    // register function
    const handleRegisterSubmit = (event) =>{
        event.preventDefault();
        if(!/[A-Z]/.test(password)){
            setPasswordError("At least one Uppercase");
            return ;
        }
        else{
            setPasswordError("")
        }
        if(!/[a-z]/.test(password)){
            setPasswordError("At least one Lowercase");
            return ;
        }
        else{
            setPasswordError("")
        }
        if(!/[0-9]/.test(password)){
            setPasswordError("At least one number");
            return ;
        }
        else{
            setPasswordError("")
        }
      const userInfo = {
        name : `${firstName} ${lastName}`,
        email,
        password
      }
      createNewUser(email , password)
      .then(result => {
        toast.success("successfully register");
        addUser(firstName, lastName, email , password);
        navigate('/');
      })
      .catch(e=>{
        console.log(e.message)
        toast.error(e.message);
      })
    }

    // add user info in firebase database
    const addUser = async(firstName, lastName, email, password) =>{
        await addDoc(usersCollectionRef , {firstName , lastName , email , password})
    }

    return (
        <div className='my-20 mx-5'>
            {/* login form container */}
            <div className='max-w-[500px] mx-auto'>
                <h3 className='text-5xl font-bold text-center'>Sign up</h3>
                <form onSubmit={handleRegisterSubmit}>
                    <div className='mt-8'>
                        <label htmlFor="firstName" className='font-semibold font-sans'>First name</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} className='w-full opacity-80 border mt-2 px-4 py-2  placeholder:text-black border-black' type="text" placeholder='Enter your first name' id="firstName" required/>
                    </div>
                  
                    <div className='mt-5'>
                        <label htmlFor="lastName" className='font-semibold font-sans'>Last name</label>
                    <input onChange={(e)=>setLastName(e.target.value)} className='w-full opacity-80 border mt-2 px-4 py-2  placeholder:text-black text-black border-black' type="text" placeholder='Enter your last name' id="lastName" required/>
                    </div>
                    <div className='my-6'>
                        <label htmlFor="email" className='font-semibold font-sans'>Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-full border mt-2 px-4 py-2 opacity-80 placeholder:text-black border-black' type="email" placeholder='mdansarulislam@gmail.com' id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className='font-semibold font-sans '>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className='w-full border placeholder:text-black border-black px-4 py-1 placeholder:text-xl text-2xl mt-2  ' id='password' type="password" placeholder='********' required/>
                    </div>
                    {passwordError ?  <p className='text-red-600 font-bold flex items-center gap-2 ml-4'><span><VscError/></span>{passwordError}</p> : ""}
                   <div className='mt-10 flex gap-6 items-center'>
                   <button className='px-8 py-3 bg-[#2554D7] font-semibold text-white'>REGISTER</button>
                   </div>
                </form>
               
            </div>
        </div>
    );
};

export default Register;