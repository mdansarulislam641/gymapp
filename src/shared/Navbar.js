import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import {FiShoppingBag} from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';
import {AiOutlineBars} from "react-icons/ai"
import {RxCross2} from 'react-icons/rx';
const Navbar = () => {
    const [search, setSearch] = useState(false);
    const menuItem = <>
          <NavLink  onClick={()=>setShowMenu(false)} className={`${({ isActive }) =>
              isActive ? "bg-red-500" : undefined}  font-medium hover:text-[#2554D7] transition-all  duration-500`} to='/'>Home</NavLink>
                    <HashLink  onClick={()=>setShowMenu(false)} to="/#shop" className='font-medium hover:text-[#2554D7] transition-all duration-500' >Shop</HashLink>
                    <Link  onClick={()=>setShowMenu(false)} className='font-medium hover:text-[#2554D7] transition-all duration-500' to='/about'>About</Link>
                    <HashLink  onClick={()=>setShowMenu(false)} to="/#gallery" className='font-medium hover:text-[#2554D7] transition-all duration-500'>blog</HashLink>
                    <HashLink  onClick={()=>setShowMenu(false)} to="/#HashLink" className='font-medium hover:text-[#2554D7] transition-all duration-500' >Feature</HashLink>
                    <Link  onClick={()=>setShowMenu(false)} className='font-medium' to='/contact'>Contacts</Link>
    </>;
    const [showMenu , setShowMenu] = useState(false);
  console.log(showMenu)
    return (
        <nav className='mx-5 '>
            {/* nav top bar */}
            <div className='bg-[#040F16] -mx-5'>
                <h2 className='text-[13px] py-4 text-white font-sans font-semibold text-center'>We’ve extended our returns period to 60 days</h2>
            </div>
           {/* navbar container */}
           <div className='flex  items-center gap-10 justify-between max-w-[1300px] mx-auto'>

            {/* navbar leftSide start*/}
            <div className='flex order-1 gap-5 items-center'>
                {/* logo */}
                <div className='lg:mr-16'>
                    <h2 className="text-[40px] font-bold">
                        LOGO.
                    </h2>
                </div>
                {/* nav menu items  */}
                <div className={`flex transition-all absolute duration-700 flex-col md:flex-row ${showMenu ? " py-5 pl-10 top-[110px] left-0 w-96 bg-indigo-300 z-50" : "-left-[200px]  transition-all duration-700 top-[110px]"} gap-6`}>
                  {menuItem}
                </div>
                <div className='flex order-2 transition-all duration-100000 md:hidden gap-6'>
                <AiOutlineBars onClick={()=>setShowMenu(!showMenu)} className={`cursor-pointer ${showMenu ? "hidden" : "block"}`} size={25}/>
                <RxCross2 onClick={()=>setShowMenu(!showMenu)}  className={`cursor-pointer ${showMenu ? "block" : "hidden"}`} size={25}/>
                </div>
            </div>

            {/* navbar right side start*/}
            <div className='flex order-2 gap-5'>
           <div className='flex gap-2'>
            <input onBlur={()=>setSearch(false)} className={`border-2 rounded-full ${search ? "w-48" : "w-0 border-0"}`} type="search" />
            <BsSearch onClick={()=>setSearch(true)} className='cursor-pointer' size={23}/>
           </div>
            <Link to="/login" title='login'>  <CiUser size={23}/></Link>
            <Link to="/dashboard/user-profile" title='users'><FiShoppingBag size={23}/></Link>
            </div>
           </div>
        </nav>
    );
};

export default Navbar;