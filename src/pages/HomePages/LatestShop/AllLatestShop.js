import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';

const AllLatestShop = () => {
    const [shopData  , setShopData] = useState([]);
    useEffect(()=>{
       const getShopData = async () =>{
        const res = await fetch("/shop.json")
        const data = await res.json();
        setShopData(data);
       }
       getShopData();
    },[]);
    return (
      <div className='py-20'>
        <h2 className="text-center text-2xl md:text-5xl my-10 font-serif">ALL SHOP </h2>
          <div className='grid max-w-[1300px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                shopData?.map(item => <ShopCard
                    key={item.id}
                    item={item}
                ></ShopCard>)
            }
        </div>
      </div>
    );
};

export default AllLatestShop;