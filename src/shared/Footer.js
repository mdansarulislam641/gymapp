import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {GrTwitter} from "react-icons/gr";
import {CiFacebook} from "react-icons/ci";
const Footer = () => {
    return (
        <footer className='py-10  bg-[#040F16]'>
            
            {/* footer container */}
            <div className='max-w-[1300px] my-12 mx-auto  lg:flex gap-20 justify-between'>
                {/* footer left */}
                <div className='md:flex flex-1 justify-center md:justify-between gap-5'>
                    {/* left side 1st part */}
                    <div>
                    <h2 className="text-[40px] text-white font-bold">
                        LOGO.
                    </h2>
                    <h4 className='text-white'>Be the first who learns about our <br />
                            great promotions!</h4>
                            <h5 className='text-xl mt-10 font-semibold text-white'>FOLLOW US</h5>
                            {/* social icons */}
                            <div className='flex gap-3 mt-3'>
                                <CiFacebook color='#fff' size={30} className="border-2 p-1  "/>
                                <GrTwitter color='#fff' size={30} className="border-2 p-1  "/>
                                <BsInstagram color='#fff' size={30} className="border-2 p-1  "/>
                            </div>
                    </div>
                    {/* left side 2nd part */}
                    <div>
                        <h2 className='text-white mt-1 text-xl font-semibold'>Products</h2>
                        <h3 className='text-white mt-1 text-xl opacity-80'>New Arrival</h3>
                        <h3 className='text-white mt-1 text-xl opacity-80'>Best Seller</h3>
                        <h3 className='text-white mt-1 text-xl opacity-80'>On Sale</h3>
                        <h3 className='text-white mt-1 text-xl opacity-80'>All Collection</h3>
                    </div>
                    {/* left side 3rd part */}
                    <div>
                    <h2 className='text-white mt-1 text-xl font-semibold'>CATEGORY</h2>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Barbells</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Plates</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Benches</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Appareal</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Straps & Supports</h3>
                    </div>
                </div>
                {/* footer right */}
                <div className='flex-1 md:flex justify-between '>
                    {/* right side 1st part */}
                    <div>
                    <h2 className='text-white mt-1 text-xl font-semibold'>INFO</h2>
                    <h3 className='text-white mt-1 text-xl opacity-80'>About</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Blog</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Feature</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Store Location</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Term & Conditions</h3>
                    <h3 className='text-white mt-1 text-xl opacity-80'>Privacy Policy</h3>
                    </div>

                    {/* right side 2nd part */}
                    <div>
                    <h2 className='text-white text-xl font-semibold'>SUBSCRIBE</h2>
                            <h3  className='text-white mt-2 text-xl opacity-80'>Subscribe our newsletter and get
        discount 30% off</h3>
        {/* email input */}
            <div className='text-end mt-12'>
            <input className='py-3 px-5 bg-transparent border border-r-0 border-white' type="email" placeholder='Enter Your Email...'/>
            <button className='text-white bg-[#2554D7] py-3 px-2 border border-l-0 border-white'>sign up</button>
            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;