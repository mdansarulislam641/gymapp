import React from 'react';
import {HiOutlineEye} from "react-icons/hi";
import {AiOutlineShopping} from "react-icons/ai";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ShopCard = ({item, setModalData}) => {
    return (
        <div className='card-parent mx-5 w-full'>
        <img className='w-full h-full' src={item.image} alt="no" />
              <div className='card-icon flex flex-col justify-end items-end gap-3 px-5 pb-5'>
              <PhotoProvider>
              <PhotoView src={item.image}>
              <img className='w-full opacity-50 absolute top-0 left-0 h-full' src={item.image} alt="no" />
              </PhotoView>
            </PhotoProvider>
              <Link className='z-20' to={`/shop/${item.id}`}>
              <HiOutlineEye className='cursor-pointer z-20  h-8 w-8 bg-white rounded-full '/>
              </Link>
              <label onClick={()=>setModalData(item)} htmlFor="shop-booking-id" className='z-50'>   <AiOutlineShopping className='z-50 h-8 w-8  bg-white rounded-full cursor-pointer '/></label>
              </div>
             
          </div>
    );
};

export default ShopCard;