import React, { useState } from 'react'
import InputField from "../components/InputField";
import SelectInput from "../components/SelectInput";
import {timeOptions} from "../assets/time";
import { partySizeOptions } from "../assets/PartySize";
import { tableRefOptions } from "../assets/TableRef";
import  Textarea  from "../components/Textarea";
import BookingModal from '../components/BookingModal';

const Reservation = () => {
  
  const [isModalOpen, setisModalOpen] = useState(false)

  const [formData , setformData] = useState({
    fullName :'',
    phone : '',
    email:'',
    specialRequest :'',
    time:'',
    partySize:'',
    tableRef:'',
  });

  const handleChange =(e)=>{
      const {name ,value} = e.target;
      setformData((prev)=>({
        ...prev , [name]:value
      }))
  }

    const handleSubmit = (e)=>{
      e.preventDefault();
      setisModalOpen(true);
      setformData({
        fullName: '',
        phone: '',
        email: '',
        specialRequest: '',
        time: '',
        partySize: '',
        tableRef: '',
      })
    }

    const closeModal =()=>{
      setisModalOpen(false)
    }

  return (
    <div id='reservation' className='py-8 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center'>

          {/* for heading main */}
          <h1 className='text-3xl font-bold text-black underline underline-offset-4 decoration-red-600 '>Make a Reservation</h1>

          {/* heading ke niche ki line  */}
          <div className='py-3 font-medium'>
            Book your table in advance to ensure the best dining experience
          </div>
        </div>

        {/* form  */}
        <div className='max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow'>

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <InputField 
              label={"Date"}
              name={"date"}
              value={formData.date}
              onChange={handleChange}
              type='date'
              />

              {/* for time  */}
              <SelectInput
               label={"Time"}
              name={'time'}
              value={formData.time}
              onChange={handleChange}
              options={timeOptions}
              />

              {/* for person  */}
              <SelectInput
               label={"Party Size"}
              name={'Party Size'}
              value={formData.partySizeOptions}
              placeholder={"Enter how many peron"}
              onChange={handleChange}
              options={partySizeOptions}
              />

              {/* for table */}

              <SelectInput
               label={"Table Preference"}
              name={'TableRef'}
              value={formData.tableRefOptions}
              onChange={handleChange}
              placeholder={"which Table you choose:"}
              options={tableRefOptions}
              />

              {/* for Full Name*/}
              <InputField
                label={"Full Name"}
                name={"fullName"}
                value={formData.fullName}
                onChange={handleChange}
                placeholder={'Enter your full name:'}
                maxLength={50}
              />

              {/* for Phone */}
                 <InputField
                label={"Phone Number"}
                type='text'
                name={"phone"}
                value={formData.phone}
                placeholder={'Enter your mobile no:'}
                onChange={handleChange}
                // maxlength={10}
              />

              {/* for email */}
              <InputField
                label={"Email"}
                type='email'
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                placeholder={'Enter your email id:'}
                // maxlength={10}
              />

              <Textarea
                label={"FeedBack"}
                name={"feedback"}
                value={formData.feedback}
                onChange={handleChange}
                placeholder={'Enter your feed back'}
              />

            </div>
            <button type='submit' className='mt-4 w-full bg-red-600 rounded-full active:scale-95 cursor-pointer px-3 py-2'>Confirm Reservation</button>
          </form>

          {/* Booking Confirm */} 

          <BookingModal isOpen={isModalOpen} onClose={closeModal} />

        </div>


      </div>

    </div>
  )
}

export default Reservation
