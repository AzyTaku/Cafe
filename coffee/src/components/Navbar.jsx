import React from 'react';
import '../App.css'
import { FaCoffee } from 'react-icons/fa';
import cup from '../assets/cutecup.png';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-[#4E2C1F] to-[#D89F69] text-white p-4  w-full shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <a href='#' className='text-white hover:text-white flex items-center'>
                        <div className="relative flex items-center">
                            <img src={cup} className="w-[25px] h-[35px]" />
                            <span className="text-xl font-extralight italic ml-2">Catfé</span>
                        </div>
                    </a>
                </div>
                <ul className="md:flex space-x-6 md:space-x-4 items-center">
                    <li className="relative group">
                        <div className="px-4 py-2 text-white bg-transparent hover:bg-[#4E2C1F] duration-200 rounded cursor-pointer">
                            Home
                        </div>
                        <ul className="absolute bg-[#D89F69] mt-2 p-2 rounded shadow-lg space-y-2 w-40 hidden group-hover:block z-50">
                            <li>
                                <a href="#overview" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Overview</a>
                            </li>
                            <li>
                                <a href="#updates" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Updates</a>
                            </li>
                            <li>
                                <a href="#features" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Features</a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <div className="px-4 py-2 text-white bg-transparent hover:bg-[#4E2C1F] duration-200 rounded cursor-pointer">
                            About
                        </div>
                        <ul className="absolute bg-[#D89F69] mt-2 p-2 rounded shadow-lg space-y-2 w-40 hidden group-hover:block z-50">
                            <li>
                                <a href="#team" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Team</a>
                            </li>
                            <li>
                                <a href="#history" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">History</a>
                            </li>
                            <li>
                                <a href="#values" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Values</a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <div className="px-4 py-2 text-white bg-transparent hover:bg-[#4E2C1F] duration-200 rounded cursor-pointer">
                            Services
                        </div>
                        <ul className="absolute bg-[#D89F69] mt-2 p-2 rounded shadow-lg space-y-2 w-40 hidden group-hover:block z-50">
                            <li>
                                <a href="#web-dev" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Our Coffe</a>
                            </li>
                            <li>
                                <a href="#design" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Events</a>
                            </li>
                            <li>
                                <a href="#consulting" className="block px-4 py-2 hover:bg-[#4E2C1F] text-white hover:text-white rounded">Consulting</a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <div className="px-4 py-2 text-white bg-[#4E2C1F] rounded-lg flex items-center space-x-2">
                            <span className="text-xl">Order</span>
                            <FaCoffee className="text-2xl" />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
