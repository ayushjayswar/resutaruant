import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black border-t border-gray-800'>
            <div className='container mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

                    {/* first */}
                    <div>
                        <h1 className='font-bold text-2xl mb-4 text-white'>
                            Fork&<span className='text-red-600'>Flame</span>
                        </h1>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Experience the finest culinary journey in the heart of the city.
                        </p>
                    </div>

                    {/* second */}
                    <div>
                        <h1 className='text-lg text-white font-semibold mb-4'>Quick Links</h1>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <Link to="/" className='hover:text-red-600 transition-colors duration-200'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='hover:text-red-600 transition-colors duration-200'>About</Link>
                            </li>
                            <li>
                                <Link to="/menu" className='hover:text-red-600 transition-colors duration-200'>Menu</Link>
                            </li>
                            <li>
                                <Link to="/room-booking" className='hover:text-red-600 transition-colors duration-200'>Room-Booking</Link>
                            </li>

                            <li>
                                <Link to="/reservation" className='hover:text-red-600 transition-colors duration-200'>Table-Reservation</Link>
                            </li>
                        </ul>
                    </div>

                    {/* third */}
                    <div>
                        <h1 className='text-lg text-white font-semibold mb-4'>Contact Info</h1>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>123 Gourmet Street, NY 10001</li>
                            <li>(123) 456-7890</li>
                            <li>info@forkandflame.com</li>
                        </ul>
                    </div>

                    {/* fourth */}
                    <div>
                        <h1 className='text-lg text-white font-semibold mb-4'>Follow Us</h1>
                        <div className='flex items-center gap-3 mb-6'>
                            <a href="#" className='w-10 h-10 text-white bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaFacebook />
                            </a>
                            <a href="#" className='w-10 h-10 text-white bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/rashmika_mandanna/?hl=en" target="_blank" rel="noopener noreferrer" className='w-10 h-10 text-white bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaInstagram />
                            </a>
                            <a href="#" className='w-10 h-10 text-white bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200'>
                                <FaWhatsapp />
                            </a>
                        </div>

                        <h2 className='text-sm text-white font-semibold mb-2'>Subscribe to newsletter</h2>
                        <div className='flex rounded overflow-hidden'>
                            <input
                                className='w-full px-3 py-2 text-sm text-black bg-white outline-none placeholder-gray-500'
                                type="email"
                                placeholder='Your Email'
                            />
                            <button className='px-4 py-2 cursor-pointer text-white bg-red-600 hover:bg-red-700 transition-colors duration-200'>
                                <FaLocationArrow />
                            </button>
                        </div>
                    </div>

                </div>

                <div className='border-t border-gray-800 mt-10 pt-6'>
                    <p className='text-center text-gray-400 text-sm'>
                        © 2025 Fork&Flame. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer