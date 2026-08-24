import React from 'react'
import { FaUtensils, FaWineGlassAlt } from "react-icons/fa";

const About = () => {
    return (
        <div id='about' className='py-12 bg-white'>
            <div className='mx-auto px-6'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl sm:text-4xl mb-4 font-bold text-black underline underline-offset-15 decoration-red-600 '>Our Story</h1>
                </div>

                <div className='flex flex-col md:flex-row items-center  gap-12'>

                    {/* left side div */}
                    <div className='md:w-1/2'>

                    {/* image abiut section */}
                        <img className='w-full h-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                    </div>

                    {/* right side div */}
                    <div className='md:w-1/2'>
                        <h3 className='text-5xl font-serif font-bold py-3'>A Culinary Journey</h3>

                        <p className='text-1xl text-gray-700 py-8'>Founded in 2010, Fork & Flame brings together world-class chefs and sommeliers to create an unforgettable dining experience. Our philosophy is simple: exceptional food, impeccable service, and a warm atmosphere.</p>

                        <p className='text-1xl text-gray-700 pb-8'>We source our ingredients from local farmers and producers, ensuring the freshest seasonal dishes that celebrate the region's bounty while supporting our community.</p>

                        {/* button section div */}
                        <div className=' flex space-x-4 items-center '>
                            <div className=' flex items-center  gap-2 md:justify-start '>
                                <div className='w-12 h-12 rounded-full bg-red-600 flex items-center justify-center'>
                                    <FaUtensils className='text-white text-xl' />
                                </div>

                                <div>
                                    <span className='text-gray-800 font-semibold'>Fine Dining</span>
                                </div>
                            </div>

                            <div className=' flex items-center   gap-2 '>
                                <div className='w-12 h-12 rounded-full bg-red-600 flex items-center justify-center md:flex'>
                                    <FaWineGlassAlt className='text-white text-xl' />
                                </div>

                                <div>
                                    <span className='text-gray-800 font-semibold'>Wine Parinig</span>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
