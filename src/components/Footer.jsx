import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='footer' className='py-2 bg-black '>
            <div className='container ma-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-evenly'>

                    {/* first */}
                    <div>
                        <h1 className='font-semibold text-xl mb-4 text-white'>Fork&
                            <span className='text-red-700'>Flame</span>
                        </h1>
                        <p className='font-semibold  text-white '>
                            Experience the finest culinary journey in the heart of the city.
                        </p>
                    </div>

                    {/* second */}
                    <div className='text-center'>
                        <h1 className='text-xl  text-white font-semibold mb-4'>Quick Link</h1>

                        <ul className='font-semibold text-xl  text-white'>

                            <li>
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#about">About</a>
                            </li>

                            <li>
                                <a href="#menu">Menu</a>
                            </li>

                            <li>
                                <a href="#reservation">Reservation</a>
                            </li>


                        </ul>
                    </div>

                    {/* third */}

                    <div>
                        <h1 className='font-semibold text-xl
                        mb-4  text-white'>Contact Info</h1>
                        <p className='font-semibold  text-white'>
                            123 Gourmet Street, NY 10001
                            (123) 456-7890
                            info@forkandflame.com
                        </p>
                    </div>

                    {/* fourth */}

                    <div className=' items-center gap-4 mb-6'>
                        <h1 className=' text-xl  text-white font-semibold mb-4'>Follow Us</h1>

                        <div className='flex items-center gap-4 mb-6'>

                            <div className='w-12 h-12 text-white bg-red-600 rounded-full flex items-center justify-center'>
                                <FaFacebook />
                            </div>

                            <div className='w-12 h-12 text-white bg-red-600 rounded-full flex items-center justify-center'>
                                <FaTwitter />
                            </div>

                            <div className='w-12 h-12 text-white bg-red-600 rounded-full flex items-center justify-center'>
                                <FaInstagram />
                            </div>

                            <div className='w-12 h-12 text-white bg-red-600 rounded-full flex items-center justify-center'>
                                <FaWhatsapp />
                            </div>


                        </div>

                        <div>
                            <h1 className='font-semibold text-xl text-white '>Subscribe to newsletter</h1>

                            <div className='flex border '>

                                <input
                                className=' w-full px-4 py-2
                                 text-black  rounded outline
                                placeholder-text-xs bg-white' 
                                type="email"
                                placeholder='Your Email'
                                 />
                                 <button className='  px-4 py-2 cursor-pointer  text-black bg-white'>
                                    <FaLocationArrow />
                                 </button>

                            </div>
                        </div>

                    </div>


                </div>


            </div>
                <p className='text-center text-white '>© 2025 Fork&Flame. All rights reserved.</p>
        </div>
    )
}

export default Footer
