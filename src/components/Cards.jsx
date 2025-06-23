import React from 'react'
import buy from '../assets/buy.png'
import sale from '../assets/sale.png'
import rent from '../assets/rent.png'

const Cards = () => {
  const data = [
    {
      title: "Buy a home",
      text: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      button: "Browse homes",
      img: buy,
    },
    {
      title: "Sell a home",
      text: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      button: "See your options",
      img: sale,
    },
    {
      title: "Rent a home",
      text: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      button: "Find rentals",
      img: rent,
    },
  ];
  return (
    <div className='bg-gray-200 px-4 py-10 lg:px-32 grid grid-cols-1 lg:grid-cols-3 gap-6'>{data.map((item,index)=>(
      <div key={index} className='bg-white rounded-3xl shadow-md p-8 text-center flex flex-col items-center'>
        <div className='flex lg:flex-col'>
          <div><img src={item.img} alt={item.title} className='w-40 h-40 object-contain mb-6 mx-auto '/></div>
          <div className='pl-9 lg:pl-0'>
            <h2 className='mb-3 font-bold text-2xl text-left lg:text-center lg:text-3xl'>{item.title}</h2>
            <p className=' mb-6 text-left lg:text-center'>{item.text}</p>
           <div className="text-left lg:text-center">
  <button className='px-5 py-2 lg:mt-5 lg:mb-10 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 cursor-pointer'>
    {item.button}
  </button>
</div>
          </div>
        </div>
      </div>
    ))}</div>
  )
}

export default Cards