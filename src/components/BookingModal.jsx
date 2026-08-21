import React from 'react'
import { FaCheck } from "react-icons/fa";

const BookingModal = ({isOpen , onClose}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>

        <div className='bg-white rounded-lg p-8 max-w-md w-full mx-4 shado-lg'>
            <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <FaCheck className='bg-green-400 text-white h-6 w-6 px-2 py-1 rounded-full'/>

                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                Booking Confirmed!
                </h3>
                <p className='text-gray-600 mb-6'>Your table has been successfully reserved. We look forward to serving you!</p>

                <button onClick={onClose} className='bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-full transition cursor-pointer'>Confirmed</button>

            </div>

        </div>
      
    </div>
  )
}

export default BookingModal
