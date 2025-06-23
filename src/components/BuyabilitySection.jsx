import React from 'react'
import logo from '../assets/logo-design.png'
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'

const BuyabilitySection = () => {

  const imgs=[home1,home2,home3]
  return (
    <div className='mt-24 px-4 lg:px-32 mb-24'>
      <h1 className='text-xl md:text-2xl font-bold'>
        Find homes you can afford with BuyAbility<sup>SM</sup>
      </h1>
      <p className="text-gray-600 mb-6">
        Answer a few questions. We'll highlight homes you're likely to qualify for.
      </p>

      
      <div className='flex flex-col md:flex-row gap-6'>
        
      
        <div className='w-full max-w-md mx-auto lg:mx-0 rounded-2xl border p-6 shadow-md'>
          <div className='flex items-center gap-1 mb-4'>
            <img src={logo} className='h-4' alt="Logo" />
            <p className='font-medium'>HomeLoans</p>
          </div>

          <div className='flex justify-between mb-4'>
            <div>
              <h1 className='font-bold text-2xl'>$ - -</h1>
              <p className='text-gray-600 text-sm'>Suggested target price</p>
            </div>
            <div>
              <h1 className='font-bold text-2xl'>$ - -</h1>
              <p className='text-gray-600 text-sm'>BuyAbility<sup>SM</sup></p>
            </div>
          </div>

          <div className='flex justify-between text-sm text-gray-600'>
            <div>
              <h1 className='font-bold text-2xl'>$ - -</h1>
              <p className='mt-1'>Mo. payment</p>
            </div>
            <div>
              <h1 className='font-bold text-2xl'>--%</h1>
              <p className='mt-1'>Today's rate</p>
            </div>
            <div>
              <h1 className='font-bold text-2xl'>--%</h1>
              <p className='mt-1'>APR</p>
            </div>
          </div>

          <button className='mt-6 bg-blue-600 text-white font-bold w-full py-3 rounded-xl'>
            Let’s get started
          </button>
        </div>

   
        <div className='flex gap-4 overflow-x-auto w-full pb-2 no-scrollbar'>
          {imgs.map((i) => (
            <div key={i} className='min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden'>
              <div className='relative'>
                <img
                  src={i}
                  className='w-full h-36 object-cover'
                />
                <span className='absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
                  Within BuyAbility
                </span>
              </div>
              <div className='p-3 space-y-2'>
                <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                <div className='h-4 bg-gray-200 rounded w-5/6'></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BuyabilitySection
