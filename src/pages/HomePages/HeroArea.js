import React from 'react';
const HeroArea = () => {
    return (
        <div className='grid h-[100vh] relative grid-flow-col gap-0 bg-gray-500'>
            <img className='w-full' src='https://i.ibb.co/6tQWqwx/images-3.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/G28Ppz2/images-2.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/28Mrtfn/images-1.png' alt="" />
            <img className='w-full' src='https://i.ibb.co/cv5cDDq/images-4.png' alt="" />

            <div className='bg-gray-900 w-full h-full z-10 absolute opacity-40'></div>

            {/* banner text */}
            <div className='absolute flex justify-center items-center flex-col max-w-[800px] z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h2 className='text-white text-[96px] text-center leading-[110px] font-bold font-["Homemade Apple"]'>Sports Clothing & Fitness Equipment Shopify Theme</h2>
            <button  className='text-[18px] mt-5 font-semibold bg-[#2554D7] px-11 py-5 text-white'>view shop</button>
            </div>
        
        </div>
    );
};

export default HeroArea;