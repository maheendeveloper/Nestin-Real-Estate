import React from "react";
import manager from "../assets/manager.jpg";
import loan from "../assets/loan.jpg";
import landlord from "../assets/landlord.jpg";
import builder from "../assets/builder.jpg";
import broker from "../assets/broker.jpg";
import brand from "../assets/brand-advisor.jpg";
import logo1 from "../assets/logo-design.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { FaSign, FaHome } from "react-icons/fa";
import { MdApartment } from "react-icons/md";

const cardsData = [
  {
    title: "I'm an agent or broker",
    image: broker,
  },
  {
    title: "I'm a property manager",
    image: manager,
  },
  {
    title: "I'm a landlord",
    image: landlord,
  },
  {
    title: "I'm a lender or loan officer",
    image: loan,
  },
  {
    title: "I'm a builder",
    image: builder,
  },
  {
    title: "I'm a brand or local advertiser",
    image: brand,
  },
];

const AdvertiseComponent = () => {
  return (
    <div>
      <div className="mt-32 px-3 md:px-32">
        <h1 className=" text-3xl md:text-4xl font-bold text-center leading-10">
          Partner with Zillow to Grow Your Business
        </h1>
        <p className="text-center px-6 mt-3">
          Reach millions of buyers, sellers and renters on the largest real
          estate network on the web.
        </p>
        <div className="mx-auto w-48 h-1 bg-yellow-500 mt-6"></div>
        <h1 className="text-xl font-bold text-center px-6 mt-6 mb-16">
          Select your industry to get started
        </h1>
        <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-md overflow-hidden"
            >
              <img src={card.image} className="w-full h-52 object-cover" />
              <div className="p-6 flex flex-col items-center justify-between">
                <h2 className="text-xl font-semibold text-center mb-4">
                  {card.title}
                </h2>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl text-center px-6  font-bold mt-36 mb-6">
          Reach your target audience on our network of leading real estate
          sites.
        </h1>
        <div className="flex items-center justify-center gap-4 lg:gap-7 my-6 mb-36">
          <img
            className="w-20 h-20 md:w-32 md:h-32 lg:h-40 lg:w-40 object-contain"
            src={logo1}
            alt="Logo 1"
          />
          <img
            className="w-20 h-20 md:w-32 md:h-32 lg:h-40 lg:w-40 object-contain"
            src={logo2}
            alt="Logo 2"
          />
          <img
            className="w-20 h-20 md:w-32 md:h-32 lg:h-40 lg:w-40 object-contain"
            src={logo3}
            alt="Logo 3"
          />
          <img
            className="w-20 h-20 md:w-32 md:h-32 lg:h-40 lg:w-40 object-contain"
            src={logo4}
            alt="Logo 4"
          />
        </div>
      </div>

      <div className="bg-blue-900 text-white p-10 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-24 mt-16">
          Nestin Group Audience
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-7 lg:px-28">
            <div className="flex flex-col items-center">
              <FaSign className="text-blue-500 text-[150px] mb-4" />
              <h3 className="text-xl font-bold mb-2">41% to buy or sell</h3>
              <p>
                Nearly 41% of people who visited Nestin and/or Trulia in the
                past 12 months are planning to buy and/or sell a home in the
                next 12 months.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaHome className="text-blue-500 text-[150px] mb-4" />
              <h3 className="text-xl font-bold mb-2">194 million</h3>
              <p>
                More than 194 million average monthly unique users visited
                Nestin Group brands’ mobile apps and websites in Q2 2019.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <MdApartment className="text-blue-500 text-[150px] mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Most visited rental network
              </h3>
              <p>Nestin Rentals is the most visited rental network.</p>
            </div>
          </div>

          <p className="text-xs text-center mt-16 max-w-5xl mx-auto text-gray-300 px-6">
            Source: 41% stat: Nestin Group Tracking Survey, Q2 2019. 194 million
            stat: Google Analytics and Adobe Analytics. Rental network claim:
            Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined
            list including: Nestin Rentals, Apartments.com Network, RentPath
            Network, ForRent.com & Homes.com Network, Total Visits, July 2020,
            United States. Nestin Rentals is the deduplicated reach of
            Nestin.com Rentals, Trulia.com Rentals and HotPads.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseComponent;
