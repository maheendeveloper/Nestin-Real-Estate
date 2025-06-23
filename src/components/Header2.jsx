import React from 'react'
import header from '../assets/header.jpg'

const Header2 = () => {
  return (
    <div className='flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto mt-10 lg:gap-20'>
        <div className='flex flex-col md:mt-20 lg:mt-32'>
          <h1 className='text-2xl font-bold text-center mb-2 lg:text-3xl'>Get home recommendations</h1>
          <p className='text-lg text-gray-600 text-center mb-3 lg:text-xl'>Sign in for a more personalized experience.</p>
          <button className='text-blue-600 font-bold px-3 py-2  border rounded-md self-center border-blue-600 mb-10 hover:bg-blue-600 hover:text-white cursor-pointer lg:px-4 lg:py-3'>Sign In</button>
          </div>
          <div>
            <img className='w-100 shadow-2xl  md:mr-5 mb-10 md:w-[400px] lg:w-[500px]' src={header}/>
          </div>
      </div>
    </div>
  )
}

export default Header2