import React from 'react';

const BookingModal = ({item}) => {
    // console.log(item)
    return (
        <div className=''>
{/* Put this part before </body> tag */}
<input type="checkbox" id="shop-booking-id" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
<h2 className='text-2xl font-bold mb-3 text-black'>Are You Sure To Confirm Booking !!!!</h2>
    <img className='w-full h-48' src={item.image} alt="" />
    <p className="py-2 text-black text-xl font-bold">Name : {item.name}</p>
    <p className="text-black text-xl font-bold">Price : ${item.price}</p>
    <div className="modal-action">
      <label htmlFor="shop-booking-id" className="btn">Cancel</label>
      <label htmlFor="shop-booking-id" className="btn-primary btn">BOOKING</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;