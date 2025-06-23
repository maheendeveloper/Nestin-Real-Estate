import React, { useState } from 'react'
import agent from '../assets/agent.jpg'
import { BiLocationPlus, BiSearch } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import CardsandPagination from '../components/CardsandPagination'

const Agents = () => {
  const[activeTab,setActivetab]=useState('location')
  const [searchInput,setSearchInput]=useState('')
  return (
    <div>
    <div className='relative w-full h-[440px]  overflow-x-hidden'>
      <img src={agent} alt='agent ' className='absolute top-0 left-0 w-full h-full object-cover z-0'/>

      <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white px-4 z-10'>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight mb-6">
          A great agent makes <br /> all the difference
        </h1>
        <div className='bg-white text-black p-5 rounded-xl shadow-xl w-full max-w-3xl '>
          <h2 className='font-semibold text-lg mb-3'>Find a real estate agent.</h2>
          <div className='flex flex-col md:flex-row gap-3'>
            <div className='flex gap-2 w-full md:w-auto'>
              <button className={`w-1/2 md:w-auto px-4 py-2 rounded border ${activeTab==='location'?'border-blue-600 text-blue-600 font-semibold':'border-gray-400'}`} onClick={()=>setActivetab('location')}>Location</button>
              <button
                onClick={() => setActivetab('name')}
                className={`w-1/2 md:w-auto px-4 py-2 rounded border ${
                  activeTab === 'name' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-gray-400'
                }`}
              >
                Name
              </button>
            </div>

            <div className='relative flex-1'>
              <input 
              type='text'
              placeholder='City, neighbourhood, or ZIP code'
              className='w-full border rounder px-4 py-3 pl-10 text-sm outline-blue-500 '
              onChange={(e)=>setSearchInput(e.target.value)}/>
              <FaLocationDot className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={20}/>
              <BiSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500' size={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardsandPagination activeTab={activeTab} searchInput={searchInput}/>
    </div>
  )
}

export default Agents