import React, { useState } from 'react'
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdTimer } from "react-icons/md";
import InputField from './InputField';
import Textarea from "../components/Textarea";

const Contact = () => {

    const [FormData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
        subject: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(FormData);

        setFormData({
            fullname: '',
            email: '',
            message: '',
            subject: ''
        })
    }

    return (
        <div
            id='contact'
            className='relative py-15 bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1621293954908-907159247fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByZWNlcHRpb258ZW58MHx8MHx8fDA%3D')"
            }}
        >

            {/* Main Content */}
            <div className='relative z-10 container mx-auto px-6'>

                {/* Heading */}
                <div className='text-center mb-12'>

                    <h1 className='text-3xl sm:text-4xl text-black font-bold mb-4 underline underline-offset-4 decoration-red-600'>
                        Let's Talk
                    </h1>

                    <p className='font-bold text-black'>
                        We'd love to hear from you
                    </p>

                </div>


                <div className='flex flex-col md:flex-row items-center justify-between gap-10'>


                    {/* ================= LEFT SIDE ================= */}

                    <div className='md:w-1/2 w-50 bg-white rounded-2xl shadow-2xl'>

                        <div className='w-full p-8'>

                            <h1 className='text-2xl font-bold text-gray-700 mb-8'>
                                Get in Touch
                            </h1>


                            {/* Address */}
                            <div className='flex items-center gap-6 mb-6'>

                                <div className='w-12 h-12 shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center'>
                                    <FaLocationArrow />
                                </div>

                                <div>
                                    <p className='text-xl text-black font-semibold'>
                                        Address
                                    </p>

                                    <p className='text-xl text-black font-semibold'>
                                        Adarsh Colony
                                    </p>
                                </div>

                            </div>


                            {/* Phone */}
                            <div className='flex items-center gap-6 mb-6'>

                                <div className='w-12 h-12 shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center'>
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <p className='text-xl text-black font-semibold'>
                                        Phone
                                    </p>

                                    <p className='text-xl text-black font-semibold'>
                                        1234567890
                                    </p>
                                </div>

                            </div>


                            {/* Email */}
                            <div className='flex items-center gap-6 mb-6'>

                                <div className='w-12 h-12 shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center'>
                                    <MdEmail />
                                </div>

                                <div>
                                    <p className='text-xl text-black font-semibold'>
                                        Email
                                    </p>

                                    <p className='text-xl text-black font-semibold'>
                                        Ayush@gmail.com
                                    </p>
                                </div>

                            </div>


                            {/* Time */}
                            <div className='flex items-start gap-6 mb-6'>

                                <div className='w-12 h-12 shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center'>
                                    <MdTimer />
                                </div>

                                <div>

                                    <p className='text-xl text-black font-semibold'>
                                        Time
                                    </p>

                                    <p className='max-w-md text-black font-semibold leading-6'>
                                        Monday - Thursday: 5:00 PM - 10:00 PM
                                        <br />
                                        Friday - Saturday: 5:00 PM - 11:00 PM
                                        <br />
                                        Sunday: 11:00 AM - 9:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= RIGHT SIDE ================= */}

                    <div className='md:w-1/2 w-full bg-white rounded-2xl shadow-2xl'>

                        <div className='w-full p-8'>

                            <h1 className='text-2xl font-bold text-gray-700 mb-6'>
                                Send Message
                            </h1>

                            <form onSubmit={handleSubmit}>

                                {/* Full Name */}
                                <InputField
                                    label={"Full Name"}
                                    name={"fullname"}
                                    value={FormData.fullname}
                                    onChange={handleChange}
                                    placeholder={"Enter your name"}
                                />


                                {/* Email */}
                                <InputField
                                    label={"Email Address"}
                                    name={"email"}
                                    value={FormData.email}
                                    onChange={handleChange}
                                    placeholder={"Enter your email"}
                                />


                                {/* Subject */}
                                <InputField
                                    label={"Subject"}
                                    name={"subject"}
                                    value={FormData.subject}
                                    onChange={handleChange}
                                    placeholder={"Enter your Subject"}
                                />


                                {/* Message */}
                                <Textarea
                                    name={"message"}
                                    label={"Message"}
                                    value={FormData.message}
                                    onChange={handleChange}
                                    placeholder={"Enter message"}
                                />


                                {/* Send Button */}

                                <button className="relative px-8 py-3 rounded-lg bg-red-600 isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700 before:-right-full before:hover:right-0 before:rounded-full before:bg-red-700 before:z-[-1] before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-bold text-black shadow-sm gap-x-2 disabled:opacity-50 disabled:pointer-events-none">
                                    Send
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact