import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import {FiShoppingBag} from 'react-icons/fi';
const Navbar = () => {
    return (
        <nav>
            {/* nav top bar */}
            <div className='bg-[#040F16]'>
                <h2 className='text-[13px] py-4 text-white font-sans font-semibold text-center'>We’ve extended our returns period to 60 days</h2>
            </div>
           {/* navbar container */}
           <div className='flex items-center justify-between max-w-[1300px] mx-auto'>

            {/* navbar leftSide start*/}
            <div className='flex items-center'>
                {/* logo */}
                <div className='lg:mr-16'>
                    <h2 className="text-[40px] font-bold">
                        LOGO.
                    </h2>
                </div>
                {/* nav menu items  */}
                <div className='flex gap-6'>
                    <NavLink  className={`${({ isActive }) =>
              isActive ? "bg-red-500" : undefined} font-medium hover:text-[#2554D7] transition-all  duration-500`} to='/'>Home</NavLink>
                    <Link className='font-medium hover:text-[#2554D7] transition-all duration-500' to='/shop'>Shop</Link>
                    <Link className='font-medium hover:text-[#2554D7] transition-all duration-500' to='/about'>About</Link>
                    <Link className='font-medium hover:text-[#2554D7] transition-all duration-500' to='/blog'>blog</Link>
                    <Link className='font-medium hover:text-[#2554D7] transition-all duration-500' to='/feature'>Feature</Link>
                    <Link className='font-medium' to='/contact'>Contacts</Link>
                </div>
            </div>

            {/* navbar right side start*/}
            <div className='flex gap-5'>
            <BsSearch size={23}/>
            <CiUser size={23}/>
            <FiShoppingBag size={23}/>
            </div>
           </div>
        </nav>
    );
};

export default Navbar;