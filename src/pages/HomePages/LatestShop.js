import React from 'react';
import {HiOutlineEye} from "react-icons/hi";
import {AiOutlineShopping} from "react-icons/ai";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const LatestShop = () => {
    const imageItems = [
        {
            image : "https://i.ibb.co/w0Z3w4P/Rectangle-4-1.png",
          
        },
        {
            image : "https://i.ibb.co/T2r9ckR/Rectangle-4-2.png",
        },
        {
            image : "https://i.ibb.co/L1CDpf6/Rectangle-4-3.png",
         
        },
        {
            image : "https://i.ibb.co/Yf7c4pG/Rectangle-4.png",
           
        },
    ]
    return (
        <section id='shop' className='mt-20'>
            {/* latest shop container */}
           <div className='max-w-[1300px] mx-auto'>

                {/* latest shop title header part start */}
                <div className='max-w-[800px] mb-16 text-center mx-auto'>
                    <h3 className='default-font-use text-[#2554D7] text-xl mb-5'>whats new</h3>
                    <h2 className='text-3xl md:text-4xl lg:text-[60px] font-bold my-5 -mt-2'>SHOP THE LATEST</h2>
                    <p className='font-sans text-[#7B7D88] leading-6 px-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
                </div>

                {/* shop image gallery part */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4'>
                   {
                    imageItems.map((item, idx) => <ShopCard
                    key={idx}
                    item= {item}
                    ></ShopCard>)
                   }
                </div>
                {/* view all products button */}
                <div className='text-center'>
                    <button className='text-[
#040F16] font-semibold px-8 py-3 border-2 border-[#7E6E6E] uppercase'>view all products</button>
                </div>
           </div>
        </section >
    );
};


const ShopCard = ({item} ) =>{
    
    return(
        <div className='card-parent mx-5'>
      <img className='w-full h-full' src={item.image} alt="no" />
    
            <div className='card-icon flex flex-col justify-end items-end gap-3 px-5 pb-5'>
            <PhotoProvider>
            <PhotoView src={item.image}>
            <img className='w-full opacity-50 absolute top-0 left-0 h-full' src={item.image} alt="no" />
            </PhotoView>
          </PhotoProvider>
            <HiOutlineEye className='cursor-pointer z-20  h-8 w-8 bg-white rounded-full '/>
            <AiOutlineShopping className='z-20 h-8 w-8  bg-white rounded-full cursor-pointer '/>
            </div>
        </div>
    )
}


export default LatestShop;