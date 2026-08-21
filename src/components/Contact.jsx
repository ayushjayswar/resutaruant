import React, { useState } from 'react'
import {FaLocationArrow} from "react-icons/fa";
import InputField from './InputField';
import Textarea from "../components/Textarea";

const Contact = () => {

    const [FromData , setFromData] = useState({
        fullname:'',
        email:'',
        message:'',
        subject:''
    });

    const handleChange = (e) =>{
        const {name , value} =e.target;
        setFromData((...prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFromData({
            fullname: '',
            email: '',
            message: '',
            subject: ''
        })
    }
    return (
        <div id='contact' className='py-15 bg-white '>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl text-black font-bold mb-4 underline underline-offset-2 decoration-red-600'>Lets's Talk</h1>
                    <div></div>
                    <p className='font-bold'>We'd love to hear from you</p>

                </div>

                <div className='flex flex-col md:flex-row items-center justify-between'>
                    
                    {/*  left */}
                    <div className='md:w-1/2  '>
                     <div className='w-full overflow-hidden p-8'>
                        <h1 className='text-2xl font-bold text-gray-700'>Get in Touch</h1>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                               <FaLocationArrow  />
                            </div>

                            <div className='mt-4'>
                                <p className='text-xl text-black font-semibold '>Address</p>
                                <p className='text-xl text-black font-semibold '>Adarsh Colony</p>
                            </div>

                            
                        </div>

                        <div className='flex items-center gap-6 mb-6'>
                            <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                               <FaLocationArrow  />
                            </div>

                            <div className='mt-4'>
                                <p className='text-xl text-black font-semibold '>Phone</p>
                                <p className='text-xl text-black font-semibold '>1234567890</p>
                            </div>

                            
                        </div>

                        <div className='flex items-center gap-6 mb-6'>
                            <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                               <FaLocationArrow  />
                            </div>

                            <div className='mt-4'>
                                <p className='text-xl text-black font-semibold '>Email</p>
                                <p className='text-xl text-black font-semibold '>Ayush@gmail.com</p>
                            </div>

                        </div>

                         <div className='flex items-center gap-6 mb-6'>
                            <div className='w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center'>
                               <FaLocationArrow  />
                            </div>

                            <div className='mt-4'>
                                <p className='text-xl text-black font-semibold '>Hours</p>
                                <p className='w-60 text-black font-semibold '>Monday - Thursday: 5:00 PM - 10:00 PM Friday - Saturday: 5:00 PM - 11:00 PM Sunday: 11:00 AM - 9:00 PM</p>
                            </div>

                        </div>
                       
                    </div>

                    </div>

                    {/* for right  */}
                    <div className='md:w-1/2  '>
                        <div className='w-full overflow-hidden p-8'>
                            <h1 className='text-2xl font-bold text-gray-700'>Send Message</h1>
                            <form onSubmit={handleSubmit}>

                                {/* full name field */}
                                <InputField
                                    label={"Full Name"}
                                    name={"fullName"}
                                    value={FormData.fullname}
                                    onChange={handleChange}
                                    placeholder={"Enter your name"}
                                />

                                <InputField
                                    label={"Email Address"}
                                    name={"email"}
                                    value={FormData.email}
                                    onChange={handleChange}
                                    placeholder={"Enter your email"}
                                />

                                <InputField
                                    label={"Subject"}
                                    name={"subject"}
                                    value={FormData.subject}
                                    onChange={handleChange}
                                    placeholder={"Enter your Subject"}
                                />

                                <Textarea 
                                name={"message"}
                                label={"Message"}
                                value={FormData.message}
                                onChange={handleChange}
                                placeholder={"Enter message"}
                                />

                            <button type='submit' className='font-semibold bg-red-600 text-white active:scale-95 px-4 py-2 rounded-full cursor-pointer '>Send</button>
                            </form>
                        </div>

                    </div>

                    
                </div>

                
            </div>


        </div>
    )
}

export default Contact
