import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="px-4 mx-4 my-2 rounded sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 bg-[#e5e4e4]">
            <div className="ui-container flex justify-between items-center py-3">
                <div className='flex justify-center items-center gap-2'>
                    <IoRestaurantSharp className='text-3xl text-[#900000]' />
                    <Link to="/"><h2 className="text-2xl font-bold font-serif"> Food<span className="text-[#900000]">Points</span></h2></Link>
                </div>
                <span className="md:hidden text-xl">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-80 md:text-black top-14 bg-black md:bg-transparent font-serif w-full md:w-auto md:flex-row gap-3 absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                    </li>

                    <li>{
                        <img className="w-[35px] h-[35px] rounded-full" src="" alt="" />
                    }
                    </li>
                    <li>{
                        <button className="bg-[#900000] px-4 py-2 rounded text-white"><Link to="/login">Login</Link></button>
                    }
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;