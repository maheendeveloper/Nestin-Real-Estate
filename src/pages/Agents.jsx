import React, { useState } from 'react';
import agent from '../assets/agent.jpg';
import { BiSearch } from 'react-icons/bi';
import { FaLocationDot, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import poster from '../assets/poster.jpg'
import CardsandPagination from '../components/CardsandPagination';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'How to find a good real estate agent near me?',
    answer: 'You can search online, read reviews, and ask for referrals from friends or family to find a reputable real estate agent in your area.'
  },
  {
    question: 'How to pick a real estate agent?',
    answer: 'Choose an agent with local market knowledge, good communication skills, strong reviews, and experience in your property type.'
  },
  {
    question: 'How to contact a real estate agent?',
    answer: 'You can contact agents through real estate websites, email, phone, or by visiting their office. Always check their availability and credentials.'
  },
  {
    question: 'How do I leave a review for a real estate agent?',
    answer: 'Visit real estate platforms or review websites like Nestin, Google Reviews, or Yelp, and post your feedback based on your experience.'
  },
  {
    question: 'What is the difference between an agent and a broker?',
    answer: 'A broker is licensed to manage their own real estate firm and supervise agents, while an agent must work under a broker’s license.'
  }
];

const Agents = () => {
  const [activeTab, setActivetab] = useState('location');
  const [searchInput, setSearchInput] = useState('');
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
     
      <div className='relative w-full h-[440px] overflow-x-hidden'>
        <img src={agent} alt='agent' className='absolute top-0 left-0 w-full h-full object-cover z-0' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white px-4 z-10'>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight mb-4">
            A great agent makes <br /> all the difference
          </h1>
          <div className='bg-white text-black p-5 rounded-xl shadow-xl w-full max-w-3xl'>
            <h2 className='font-semibold text-lg mb-3'>Find a real estate agent.</h2>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className='flex gap-2 w-full md:w-auto'>
                <button
                  className={`w-1/2 md:w-auto px-4 py-2 rounded border ${
                    activeTab === 'location' ? 'border-blue-600 text-blue-600 font-semibold' : 'border-gray-400'
                  }`}
                  onClick={() => setActivetab('location')}
                >
                  Location
                </button>
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
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <FaLocationDot className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
                <BiSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500' size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <CardsandPagination activeTab={activeTab} searchInput={searchInput} />

      
      <div className="relative w-full h-[400px]">
  <img
    src={poster} 
    alt="Get help finding agent"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col justify-center items-center text-white px-4 z-10 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get help finding an agent</h2>
    <p className="text-lg mb-6 max-w-xl">
      We'll pair you with a Nestin Premier Agent who has the inside scoop on your market.
    </p>
    <Link
      to="/findanagent"
      className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
    >
      Connect with a local agent
    </Link>
  </div>
</div>

     
      <div className="bg-[#2c3e50] text-white py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-400 py-3">
              <button
                className="w-full flex justify-between items-center text-left text-white font-medium text-lg"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openFaqs.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqs.includes(index) && (
                <p className="text-gray-200 mt-2 text-sm leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
