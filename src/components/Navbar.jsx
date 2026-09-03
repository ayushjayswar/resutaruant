import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"


const Navbar = () => {

    const [showMenu, setshowMenu] = useState()

    return (
        <div className='shadow-md sticky top-0 z-50 backdrop-blur-3xl'>
            <div className='contianer mx-auto px-6 sm:px-8 md:px-12 lg:px-24'>

                <div className='flex justify-between items-center py-2'>
                    {/* logo */}
                    <div className='flex items-center text-2xl font-bold'>
                        <img className='w-12 h-12' src="./logo2.png" alt="logo" />
                        <h1 className='text-red-600'>
                            For&<span className='text-[#1e3a8a]'>Flame</span>
                        </h1>
                    </div>
                    {/* nav link */}
                    <nav className=' hidden md:flex  item-center space-x-6 text-blue-950'>
                        <a className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' href="/">
                            Home</a>

                        <a className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' href="/about">
                            About</a>

                        <a className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' href="/menu">
                            Menu</a>

                        <a className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' href="/reservation">
                            Reservation</a>

                        <a className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' href="/contact">
                            Contact</a>

                      

                    </nav>
                    {/* mobile menu create  */}
                    <div className='md:hidden'>
                        {
                            showMenu ?
                                <FaXmark onClick={() => setshowMenu(!showMenu)} className='text-xl cursor-pointer ' /> :
                                <FaBars onClick={() => setshowMenu(!showMenu)} className='text-xl cursor-pointer ' />
                        }
                    </div>

                </div>

            </div>
            {
                showMenu && (
                    <div className='md:hidden flex flex-col items-center space-y-6 py-20 h-screen'>
                        <Link onClick={() => setshowMenu(!showMenu)} className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' to="/">
                            Home</Link>

                        <Link onClick={() => setshowMenu(!showMenu)} className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' to="/about">
                            About</Link>

                        <Link onClick={() => setshowMenu(!showMenu)} className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' to="/menu">
                            Menu</Link>

                        <Link onClick={() => setshowMenu(!showMenu)} className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 active:scale-95' to="/reservation">
                            Reservation</Link>

                        <Link onClick={() => setshowMenu(!showMenu)} className='font-semibold  hover:text-red-600 hover:scale-110 duration-300 transition-all active:scale-95' to="/contact">
                            Contact</Link>


                    </div>

                )
            }
        </div>
    )
}

export default Navbar
