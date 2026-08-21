import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='relative h-screen bg-cover 
    bg-center w-full
    ' style={{backgroundImage:"url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
         
         <div className='absolute inset-0 bg-black opacity-80'>
                <div className='container mx-auto px-6 h-full flex items-center z-10 relative'>
                  <div className='text-white max-w-2xl'>
                    <h2 className='font-bold mb-4 text-5xl tracking-tight  '>Experience Fine Dining</h2>
                    <p className='font-semibold text-2xl mb-8'>Indulge in our exquisite culinary creations crafted with passion and the finest ingredients.</p>

                    <a className='bg-red-700 rounded-full px-8 py-3 cursor-pointer hover:bg-red-900 transition duration-300 transform active:scale-95 '
                    href='#reservation'
                    >Book a Table </a>
                  </div>

                </div>
         </div>
    </div>
  )
}

export default Hero
