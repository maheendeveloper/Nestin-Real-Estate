import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const AboutSection = () => {

  const [openSection, setOpenSection] = useState({});

  const toggleSection = (key) => {
    setOpenSection((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const footerData = [
    {
      title: 'Real Estate',
      items: [
        'Browse all homes',
        'Albuquerque real estate',
        'Atlanta real estate',
        'Austin real estate',
        'Baltimore real estate',
        'Boston real estate',
        'Calgary real estate',
        'Charlotte real estate',
        'Chicago real estate',
        'Cleveland real estate',
        'Colorado Springs real estate',
        'Columbus real estate',
        'Dallas real estate',
        'Denver real estate',
        'Detroit real estate',
        'Edmonton real estate',
        'El Paso real estate',
        'Fort Worth real estate',
        'Fresno real estate',
        'Houston real estate',
        'Indianapolis real estate',
        'Jacksonville real estate',
        'Kansas City real estate',
        'Las Vegas real estate',
        'Long Beach real estate',
        'Los Angeles real estate',
        'Louisville real estate',
        'Memphis real estate',
        'Mesa real estate',
        'Miami real estate',
        'Milwaukee real estate',
        'Minneapolis real estate',
        'Nashville real estate',
        'New Orleans real estate',
        'New York real estate',
        'Oakland real estate',
        'Oklahoma real estate',
        'Omaha real estate',
        'Ottawa real estate',
        'Philadelphia real estate',
        'Phoenix real estate',
        'Portland real estate',
        'Raleigh real estate',
        'Sacramento real estate',
        'San Antonio real estate',
        'San Diego real estate',
        'San Francisco real estate',
        'San Jose real estate',
        'Seattle real estate',
        'Toronto real estate',
        'Tucson real estate',
        'Tulsa real estate',
        'Vancouver real estate',
        'Virginia Beach real estate',
        'Washington DC real estate',
        'Wichita real estate'
      ]
    },
    {
      title: 'Rentals',
      items: [
        'Rental Buildings',
        'Atlanta apartments for rent',
        'Austin apartments for rent',
        'Baltimore apartments for rent',
        'Boston apartments for rent',
        'Bronx NYC apartments for rent',
        'Brooklyn NYC apartments for rent',
        'Charlotte apartments for rent',
        'Chicago apartments for rent',
        'Dallas apartments for rent',
        'Denver apartments for rent',
        'Houston apartments for rent',
        'Jersey City apartments for rent',
        'Long Beach apartments for rent',
        'Manhattan NYC apartments for rent',
        'Miami apartments for rent',
        'Minneapolis apartments for rent',
        'New York City apartments for rent',
        'Oakland apartments for rent',
        'Oklahoma City apartments for rent',
        'Philadelphia apartments for rent',
        'Queens NYC apartments for rent',
        'Sacramento apartments for rent',
        'San Francisco apartments for rent',
        'Seattle apartments for rent',
        'Washington DC apartments for rent',
        'Atlanta houses for rent',
        'Austin houses for rent',
        'Boston houses for rent',
        'Charlotte houses for rent',
        'Columbus houses for rent',
        'Fort Worth houses for rent',
        'Fresno houses for rent',
        'Houston houses for rent',
        'Indianapolis houses for rent',
        'Jacksonville houses for rent',
        'Las Vegas houses for rent',
        'Memphis houses for rent',
        'Milwaukee houses for rent',
        'Nashville houses for rent',
        'Oakland houses for rent',
        'Oklahoma City houses for rent',
        'Philadelphia houses for rent',
        'Phoenix houses for rent',
        'Portland houses for rent',
        'San Antonio houses for rent',
        'San Francisco houses for rent',
        'San Jose houses for rent',
        'Tampa houses for rent',
        'Tucson houses for rent',
        'Washington DC houses for rent'
      ]
    },
    {
      title: 'Mortgage Rates',
      items: [
        'Current mortgage rates',
        'Alaska mortgage rates',
        'Alabama mortgage rates',
        'Arkansas mortgage rates',
        'Arizona mortgage rates',
        'California mortgage rates',
        'Colorado mortgage rates',
        'Connecticut mortgage rates',
        'Delaware mortgage rates',
        'Florida mortgage rates',
        'Georgia mortgage rates',
        'Hawaii mortgage rates',
        'Iowa mortgage rates',
        'Idaho mortgage rates',
        'Illinois mortgage rates',
        'Indiana mortgage rates',
        'Kansas mortgage rates',
        'Kentucky mortgage rates',
        'Louisiana mortgage rates',
        'Massachusetts mortgage rates',
        'Maryland mortgage rates',
        'Maine mortgage rates',
        'Michigan mortgage rates',
        'Minnesota mortgage rates',
        'Missouri mortgage rates',
        'Mississippi mortgage rates',
        'Montana mortgage rates',
        'North Carolina mortgage rates',
        'North Dakota mortgage rates',
        'Nebraska mortgage rates',
        'New Hampshire mortgage rates',
        'New Jersey mortgage rates',
        'New Mexico mortgage rates',
        'Nevada mortgage rates',
        'New York mortgage rates',
        'Ohio mortgage rates',
        'Oklahoma mortgage rates',
        'Oregon mortgage rates',
        'Pennsylvania mortgage rates',
        'Rhode Island mortgage rates',
        'South Carolina mortgage rates',
        'South Dakota mortgage rates',
        'Tennessee mortgage rates',
        'Texas mortgage rates',
        'Utah mortgage rates',
        'Virginia mortgage rates',
        'Vermont mortgage rates',
        'Washington mortgage rates',
        'Wisconsin mortgage rates',
        'West Virginia mortgage rates',
        'Wyoming mortgage rates'
      ]
    },
    {
      title: 'Browse Homes',
      items: [
        'California','Texas','New York','Florida','Illinois','Pennsylvania','Ohio','Michigan','Georgia','North Carolina','New Jersey','Virginia','Washington','Massachusetts','Indiana','Arizona','Tennessee','Missouri','Maryland','Wisconsin','Minnesota','Colorado','Alabama','South Carolina','Louisiana','Kentucky','Oregon','Oklahoma','Connecticut','Iowa','Mississippi','Arkansas','Kansas','Utah','Nevada','New Mexico','West Virginia','Nebraska','Idaho','Hawaii','Maine','New Hampshire','Rhode Island','Montana','Delaware','South Dakota','Alaska','North Dakota','Vermont','Washington, DC','Wyoming','Puerto Rico','Virgin Islands'
      ]
    }
  ];


   const bottomLinks = [
    'About', 'Zestimates', 'Research', 'Careers', 'Careers - U.S. Privacy Notice',
    'Careers - Mexico Privacy Notice', 'Help', 'Advertise', 'Fair Housing Guide',
    'Advocacy', 'Terms of use', 'Privacy Notice', 'Cookie Preference', 'Learn', 'AI',
    'Mobile Apps', 'Trulia', 'StreetEasy', 'HotPads', 'Out East', 'ShowingTime+'
  ];



  return (
    <div className='px-4 py-12 lg:px-32'>
      <h1 className='text-lg mt-7 font-bold  text-center'>About Nestin's Recommendations</h1>
      <p className='text-center mb-16'>Recommendations are based on your location and search activity, such as the homes you've viewed and saved and the filters you've used. We use this information to bring similar homes to your attention, so you don't miss out.</p>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  pb-6'>
        {footerData.map((section,idx)=>(
          <div key={idx} className=' pr-4 sm:mb-6'>
            <div className='flex justify-between items-center cursor-pointer py-2 sm:border sm:border-blue-300 hover:border-blue-500' onClick={()=>toggleSection(section.title)}>
              <h3 className=' text-lg ml-4 '>{section.title}</h3>
              <span className='text-blue-600 text-lg hover:text-shadow-blue-700 cursor-pointer'>{openSection[section.title]?<IoMdArrowDropup/>:<IoMdArrowDropdown/>}</span>
            </div>
            {openSection[section.title]&&(
              <ul className='mt-2 space-y-2 text-sm'>
                {section.items.map((item,index)=>(
                  <li key={index}>
                    <a href='#' className='block py-1 px-2 hover:bg-gray-100 rounded'>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>


      <hr className='text-gray-300 mb-10'/>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 py-6 text-sm text-gray-600">
        {bottomLinks.map((link, idx) => (
          <a href="#" key={idx} className="hover:underline">
            {link}
          </a>
        ))}
      </div>

      <div className="text-center text-blue-600 text-sm hover:underline">
        <a href="#">Do Not Sell or Share My Personal Information →</a>
      </div>
       <hr className='text-gray-300 mt-10'/>
    </div>
   
  )
}

export default AboutSection