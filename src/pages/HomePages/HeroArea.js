import React from 'react';
import { HashLink } from 'react-router-hash-link';
const HeroArea = () => {
    return (
        <div className='grid relative grid-cols-4  gap-0 '>
            <img className='w-full' src='https://i.ibb.co/6tQWqwx/images-3.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/G28Ppz2/images-2.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/28Mrtfn/images-1.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/cv5cDDq/images-4.png' alt="" />

            <div className='bg-gray-900 w-full h-full z-10 absolute opacity-40'></div>

            {/* banner text */}
            <div className='absolute flex justify-center items-center flex-col w-full lg:w-[800px] z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h2 className='text-white text-3xl md:text-[48px] lg:text-[96px] text-center lg:leading-[110px] font-bold font-["Homemade Apple"]'>Sports Clothing & Fitness Equipment Shopify Theme</h2>
            <button  className='text-[18px] mt-5 font-semibold bg-[#2554D7] px-5 py-2 lg:px-11 lg:py-5 text-white'><HashLink to="/#shop">view shop</HashLink></button>
            </div>
        
        </div>
    );
};

export default HeroArea;