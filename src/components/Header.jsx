import React from 'react'
import pic from '../assets/header.jpg'
import { BiBold, BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <header className='relative overflow-x-hidden'>
      <img src={pic} alt='picture of real estate' className='w-full h-[370px] object-cover'/>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 md:px-20 text-white bg-black/40 lg:ml-24'>
      
        <h1 className="text-5xl md:text-6xl font-bold max-w-2xl leading-tight  mx-auto md:mx-0 text-center md:text-left md:pb-6 pb-3">
            Agents. Tours.<br/> Loans. Homes.
          </h1>
          
         <div className="relative w-full sm:w-lg mx-auto md:mx-0">
  <input
    type="text"
    placeholder="Enter an address, neighborhood, city, or ZIP code"
    className="py-6 text-left w-full p-4 pr-12 rounded-xl shadow-xl text-black bg-white md:text-left truncate sm:whitespace-normal sm:overflow-visible sm:text-clip "
  />
  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black">
    <BiSearch size={28}  />
  </span>
</div>
            </div>
    </header>
  )
}

export default Header