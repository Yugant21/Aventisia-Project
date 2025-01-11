import React from 'react';
import { FaSearch, FaBell, FaHeart, FaUserCircle } from 'react-icons/fa';
import searchNav from '../assets/search1.png'
import notification from '../assets/Notification.png'
import wishlist from '../assets/Wishlish.png'
import profile from '../assets/Profile.png'
import line from '../assets/Line.png'
import command from '../assets/Command.png'
import downArrow from '../assets/angle-small-down.png'


const Navbar = () => {
    return (
        <div className="col-span-9 flex items-center justify-between h-[92px] px-6 bg-white shadow-md">
            <h1 className="text-lg font-bold text-gray-800">AI/ML Model Builder</h1>
            <div className="flex items-center space-x-6">
                {/* Search Bar */}
                <div className="relative mr-[80px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-12 pr-6 py-1 border rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <img className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" src={searchNav} alt="Search Navbar" />
                    <img className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" src={command} alt="Command" />
                </div>

                {/* Icons */}
                <img className='h-[34px] w-[34px] cursor-pointer' src={notification} alt="Notification" />
                <img className='h-[34px] w-[34px] cursor-pointer' src={wishlist} alt="Wishlist" />
                <img src={line} alt="Line" />

                {/* User Info */}
                <div className="flex items-center space-x-2">
                    <img className='h-[30px] w-[30px] cursor-pointer' src={profile} alt="Profile" />
                    <div className="text-sm text-gray-800">
                        <p className="font-semibold">Neurotic Spy</p>
                        <p className="text-gray-500 text-xs">neurotic@ai.ltd</p>
                    </div>
                    <img className='h-[15px] w-[15px] cursor-pointer' src={downArrow} alt="Down Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;