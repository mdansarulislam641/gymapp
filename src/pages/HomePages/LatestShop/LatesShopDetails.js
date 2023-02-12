import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../../../contexts/AuthProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';

const LatestShopDetails = () => {
    const {id} = useParams();
    const [shopData  , setShopData] = useState({});
    const {modalData,setModalData} = useUserContext()
    useEffect(()=>{
       const getShopData = async () =>{
        const res = await fetch("/shop.json")
        const data = await res.json();
        setShopData(data.find(shop => shop.id === id));
       }
       getShopData();
    },[id]);
   
    return (
        <div className=" bg-gray-700 mt-4 ">
        <div  className="col-span-2">
          <div className="p-5 mx-auto sm:p-10   text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <PhotoProvider>
                <PhotoView src={shopData.image}>
                  <img
                    src={shopData.image}
                    alt="no image"
                    className="w-full rounded-md h-60 sm:h-96 bg-gray-500"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                <div className="space-y-2">
                  <div
                    rel="noopener noreferrer"
                    className=" text-center text-2xl font-semibold sm:text-3xl"
                  >
                    {shopData.name}
                  </div>

                  <div className="flex justify-between items-center">
                    <div
                      rel="noopener noreferrer"
                      className="text-xl  text-green-500 hover:underline"
                    >
                      Price: ${shopData.price}
                    </div>
              
                  </div>
                </div>
                <div className="text-gray-100 text-justify">
                  {shopData.description}
                </div>
               <div className='text-center'>
                   <button ><label onClick={()=>setModalData(shopData)}  htmlFor="shop-booking-id" className='bg-green-500 w-48 font-sans text-xl py-2 px-5 text-center rounded-sm cursor-pointer'>
                   BOOK NOW
               </label></button>
              
               </div>
             <BookingModal item={modalData}></BookingModal>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
};

export default LatestShopDetails;