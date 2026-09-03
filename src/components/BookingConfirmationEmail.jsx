import React from 'react'
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUsers, FaChair } from "react-icons/fa";


const BookingConfirmationEmail = ({ bookingData }) => {

    const data = bookingData || {
        fullName: "",
        date: "",
        time: "",
        partySize: "",
        tableRef: ""
    }

    return (
        <div className='max-w-md mx-auto bg-white rounded-2xl shadow-lg
    border border-gray-100 overflow-hidden font-sans'>

            {/* header */}
            <div className='bg-green-600 text-white text-center py-6 px-4'>
                <FaCheckCircle className='text-4xl mx-auto mb-2' />
                <h1 className='text-xl font-bold'>Booking Confirm</h1>
            </div>

            {/* body */}
            <div className='p-6'>

                <p className='text-gray-700 mb-4'>
                    Hi <span className='font-bold'>{data.fullName}</span>
                </p>

                <p className='text-gray-600 text-sm mb-6'>
                    Thank you for your reservation. Here are your booking details:
                </p>

                {/* detail card */}
                <div className='bg-gray-50 rounded-xl p-4 space-y-3'>

                    <div className='flex item-center gap-3'>
                        <FaCalendarAlt className='text-red-600' />
                        <span className='tex-sm text-gray-500'>Date:</span>
                        <span className='ml-auto font-semibold text-gray-800'>{data.date}</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaClock className='text-red-600' />
                        <span className='text-sm text-gray-500'>Time:</span>
                        <span className='ml-auto font-semibold text-gray-800'>{data.time}</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaUsers className='text-red-600' />
                        <span className='text-sm text-gray-500'>Party Size:</span>
                        <span className='ml-auto font-semibold text-gray-800'>{data.partySize}</span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaChair className='text-red-600' />
                        <span className='text-sm text-gray-500'>Table:</span>
                        <span className='ml-auto font-semibold text-gray-800'>{data.tableRef}</span>
                    </div>

                </div>

                <p className=' text-center text-gray-600 text-sm mt-6'>
                    We look forward to serving you
                </p>

            </div>

            {/* Footer */}
            <div className='bg-gray-50 text-center py-4 text-xs text-gray-400'>
                This is an automated confirmation email.
            </div>


        </div>
    )
}

export default BookingConfirmationEmail
