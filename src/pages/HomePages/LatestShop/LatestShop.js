import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../contexts/AuthProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import ShopCard from './ShopCard';

const LatestShop = () => {
    const [shopData  , setShopData] = useState([]);
   const {modalData, setModalData} = useUserContext()
 
    useEffect(()=>{
       const getShopData = async () =>{
        const res = await fetch("/shop.json")
        const data = await res.json();
        setShopData(data);
       }
       getShopData();
    },[]);
 
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
                    shopData.map((item, idx) => <ShopCard
                    key={idx}
                    item= {item}
                    setModalData={setModalData}
                    ></ShopCard>)
                   }
                </div>
                {/* booking modal import */}
                <BookingModal item={modalData}></BookingModal>
                {/* view all products button */}
                <div className='text-center'>
                    <Link to="/all-shop"><button className='text-[
#040F16] font-semibold px-8 py-3 border-2 border-[#7E6E6E] uppercase'>view all products</button></Link>
                </div>
           </div>
        </section >
    );
};


export default LatestShop;