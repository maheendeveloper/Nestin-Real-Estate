import React from "react";
import topimg from "../assets/top-img.jpg";
import sidecard from "../assets/sidecard.png";
import { useState } from "react";
import rentclients from '../assets/rentclients.jpg'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const testimonials = [
  {
    quote:
      "Nestin made managing my rentals seamless—from listing to lease signing, every step was intuitive and hassle-free.",
    author: "Jeff C., OK",
  },
  {
    quote:
      "Using Nestin Rental Manager, I could easily connect with tenants, run background checks, and send out leases in one platform.",
    author: "Greg C., TX",
  },
  {
    quote:
      "All my units are listed with Nestin because it’s fast, reliable, and makes collecting rent and managing leases incredibly simple.",
    author: "Joe W., FL",
  },
  {
    quote:
      "Nestin took the stress out of renting. The application process, lease builder, and payment system are all top-notch.",
    author: "Veronica P., WI",
  },
  {
    quote:
      "Nestin’s tools are exactly what landlords need—efficient communication, tenant screening, and lease management all in one place.",
    author: "Connor F., IA",
  },
];

const ManageRentalsPage = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div>
      <div className="relative w-full h-[370px] overflow-hidden">
        <img
          src={topimg}
          alt="Manage Rentals Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center">
          <div className="text-white px-6 sm:px-12 lg:px-20 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
              Level up your landlording <br /> simply and confidently
            </h1>
            <p className="text-base sm:text-lg mb-6">
              Take the extra legwork out of running your rental. From leases and
              payments to maintenance and move-out, Rental Manager has the tools
              to help you get more done.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 cursor-pointer rounded text-white font-semibold">
                Get started
              </button>
              <a
                href="#"
                className="text-white font-medium underline hover:text-gray-200"
              >
                View paid services →
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Already have an account?{" "}
              <a href="#" className="underline hover:text-white">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white min-h-screen py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid gap-6">
          <div className=" p-6 rounded-2xl shadow text-white">
            <h1 className="text-4xl font-bold mb-4">
              Rent like a pro with <br />
              Nestin Rental Manager
            </h1>
            <p className="text-lg mb-6">
              Posting a listing is just the beginning. Build and sign leases,
              screen tenants, collect rent and fill vacancies with over 30
              million monthly visitors.
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
                Get started for free
              </button>
              <a href="#" className="text-white underline font-medium mt-2">
                View paid services →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-black p-6 rounded-2xl shadow">
              <div className="text-2xl mb-2">🏠</div>
              <h3 className="text-lg font-bold mb-2">
                Post listings & find renters quickly and easily
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                Create listings in minutes to reach the most visitors of any
                rentals network.*
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl shadow">
              <div className="text-2xl mb-2">📄</div>
              <h3 className="text-lg font-bold mb-2">
                Create & send leases for signing
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                Build a new lease online or upload your own for signing. Our
                lease tools make it simple.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl shadow">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="text-lg font-bold mb-2">
                Screen applicants efficiently
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                Renter history, income verification, credit and background
                checks, all in one place.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl shadow">
              <div className="text-2xl mb-2">🐷</div>
              <h3 className="text-lg font-bold mb-2">Collect rent online</h3>
              <p className="mb-4 text-sm text-gray-700">
                Get paid for rent, utilities, move-in fees and more for free.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="bg-white text-black p-6 rounded-2xl shadow">
              <div className="text-2xl mb-2 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded font-semibold">
                  NEW
                </span>
                🗓️
              </div>
              <h3 className="text-lg font-bold mb-2">
                Manage tours effortlessly
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                Save time coordinating tours by letting renters know upfront
                when you're free.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 px-4 py-16">
        <h1 className="text-center font-bold text-3xl mb-16">
          Take the guesswork out of managing your business
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-20 max-w-5xl mx-auto mt-32">
          <div className="flex-shrink-0">
            <img
              className="w-96 md:w-[480px] rounded-xl shadow-xl"
              src={sidecard}
              alt="Rental Pricing Illustration"
            />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left w-full md:mt-9 lg:mt-16">
            <h2 className="text-2xl font-bold">
              Price your rental competitively
            </h2>
            <p className="text-gray-700">
              Use our pricing tools to optimize the return on investment for
              your property.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-8 py-3 bg-white text-blue-600 border border-blue-600 hover:bg-blue-100 transition-colors rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#041f59] text-white px-6 py-48 text-center pt-20 pb-20">
        <h2 className="text-3xl font-bold mb-12">
          Here's what the pros are saying
        </h2>

        <div className="max-w-3xl mx-auto relative px-8">
          <p className="text-xl leading-relaxed transition-all duration-300">{`"${testimonials[index].quote}"`}</p>
          <p className="mt-4 font-semibold italic">
            {testimonials[index].author}
          </p>

          <button
            onClick={prev}
            className="absolute  left-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-full"
          >
            <BiLeftArrow className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-full"
          >
            <BiRightArrow className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-16 space-x-2 ">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>





       



<div className="bg-gray-200">
  <div className="flex flex-col lg:flex-row items-center md:items-start gap-8 lg:gap-30 max-w-5xl mx-auto pb-32 pt-32 px-4">
    <div className="flex flex-col gap-1 text-left w-full md:mt-9 lg:mt-16">
      <h1 className="text-4xl font-bold">Fill vacancies faster with Premium</h1>
      <p className="text-gray-700 mt-1">
        Get noticed by more renters with the best Rental Manager has to offer.
      </p>

      <h2 className="font-bold mt-2">More exposure</h2>
      <p className="text-gray-700 text-sm">
        Renters searching in your area will see your listing more often, so you can fill your vacancy faster.
      </p>

      <h2 className="font-bold mt-2">Listing recommendations</h2>
      <p className="text-gray-700 text-sm">
        Appeal to more renters by following our customized tips.
      </p>

      <h2 className="font-bold mt-2">Pricing & market insights</h2>
      <p className="text-gray-700 text-sm">
        Track your listing's performance and trends in your market to find out if you've positioned your rental competitively.
      </p>

      <h2 className="font-bold mt-2">Priority support</h2>
      <p className="text-gray-700 text-sm">
        Save time and effort with prioritized responses to your questions.
      </p>

      <div className="flex justify-start">
        <button className="px-8 mt-7 py-3 text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 cursor-pointer transition-colors rounded">
          Upgrade to premium
        </button>
      </div>
    </div>

    <div className="flex-shrink-0">
      <img
        className=" hidden lg:block w-96 md:w-[480px] lg:w-[520px] rounded-xl mt-30  shadow-xl md:mx-auto"
        src={sidecard}
        alt="Rental Pricing Illustration"
      />
    </div>
  </div>
</div>


<div className="relative w-full h-[370px] overflow-hidden">
  <img
    src={rentclients}
    alt="Manage Rentals Background"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  <div className="absolute w-full h-full bg-black/60 z-10"></div>

 
  <div className="absolute w-full h-full z-20 flex items-center justify-center">
    <div className="text-white text-center px-6 sm:px-12 lg:px-20 max-w-7xl">
      <h1 className="text-xl sm:text-4xl font-bold mb-4 ">
        Renting you can feel confident about
      </h1>
      <p className="text-base sm:text-lg mb-6 mt-6">
        List a property, schedule showings, screen tenants, collect payments — do it all in one place with Rental Manager.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-3">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded text-white font-semibold">
          Get started today
        </button>
      </div>
    
    </div>
  </div>
</div>

    </div>
  );
};

export default ManageRentalsPage;
