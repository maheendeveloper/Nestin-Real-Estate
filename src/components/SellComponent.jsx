import React from "react";
import { useState } from "react";
import poster from "../assets/posterr.png";
import showcase from "../assets/showcase.png";
import agent1 from "../assets/agent1.jpg";
import bechdo from "../assets/bechdo.jpg";
import besttime from "../assets/besttime.jpg";
import steps from "../assets/steps.jpg";
import trueagent from "../assets/trueagent.jpg";
import sellhome from "../assets/sellhome.jpg";
import cashoffer from "../assets/cashoffer.jpg";
import home from "../assets/home.png";
import findhome from '../assets/findhome.png'
import { BsArrowDown } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SellComponent = () => {
  const [openFaqs, setOpenFaqs] = useState([]);
  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "When selling my house, where should I begin?",
      answer:
        "Start your home selling process by gathering information and considering your options. After choosing a selling path that works best for you, take the first step; contact an iBuyer, a real estate agent or begin home prep.",
    },
    {
      question: "Where are cash offers available?",
      answer:
        "Cash offers are available in several markets including Midwest (Detroit, Indianapolis), Northeast (Boston, NY, NJ), Southeast (Atlanta, Miami, Orlando, etc.), Southwest (Austin, Dallas, Phoenix, etc.), and West (Denver, LA, San Diego, etc.).",
    },
    {
      question:
        "How do Nestin partner agents help sell homes faster and for more?",
      answer:
        "In select markets, Nestin partner agents offer Showcase listings which include increased exposure, virtual tours, and more. These listings are more likely to sell in 14 days and for 2% more on average.",
    },
    {
      question:
        "What are the benefits of having your home listed on public portals such as Nestin vs. on a private listing network?",
      answer:
        "MLS listings are syndicated to public sites like Nestin, increasing visibility and sale price. Homes listed on MLS sold for 17.5% more and faster than off-MLS listings. Private listings miss out on exposure.",
    },
    {
      question: "How long does it take to sell a house?",
      answer:
        "On average, homes take about one month to go under contract and another month or more to close. In 2020, the average time was 55–70 days.",
    },
    {
      question: "What home seller mistakes should I avoid?",
      answer:
        "Avoid overpricing, poor timing, incomplete repairs, bad photos, and ignoring closing costs. These can all reduce your sale price or delay selling.",
    },
    {
      question: "What is an MLS?",
      answer:
        "A Multiple Listings Service (MLS) is a database of homes for sale. Listings on the MLS are shared to public portals like Nestin for maximum exposure.",
    },
    {
      question: "What is the Clear Cooperation Policy?",
      answer:
        "The Clear Cooperation Policy (CCP) from NAR ensures that publicly advertised homes are listed on the MLS so all agents and buyers can access them.",
    },
    {
      question: "What is a pocket listing?",
      answer:
        "A pocket listing is a home sold privately without being on the MLS. Also known as private, hidden, exclusive, or off-market listings.",
    },
  ];

  const articles = [
    {
      image: bechdo,
      readTime: 8,
      title: "14 tips for selling your home fast and for more money",
      link: "#",
    },
    {
      image: trueagent,
      readTime: 6,
      title: "How to choose the right real estate agent",
      link: "#",
    },
    {
      image: steps,
      readTime: 15,
      title: "Steps to selling a house",
      link: "#",
    },
    {
      image: besttime,
      readTime: 7,
      title: "When is the best time to sell a house?",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="mt-20 px-3 md:px-32">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex flex-col lg:mr-16 lg:mt-12">
            <h1 className="font-bold text-2xl mx-auto md:mx-0 md:text-3xl lg:text-4xl lg:mt-4 mb-2 lg:mb-6">
              Sell your home with confidence
            </h1>
            <p className="max-w-lg mb-9 mx-auto lg:text-lg">
              We give you multiple options to sell your home with the
              flexibility to choose what works best for your unique situation,
              timeline and goals.
            </p>
            <button 
            onClick={()=>document.getElementById("partner-section")?.scrollIntoView({behavior:"smooth"})}
            className=" text-center self-center md:self-start flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded lg:px-6 lg:py-4 cursor-pointer">
              <BsArrowDown />
              Explore your options
            </button>
          </div>
          <div>
            <img
              className="w-90 lg:w-135 md:w-150  mx-auto md:mx-0 md:-mt-4 lg:mt-8"
              src={poster}
            />
          </div>
        </div>
      </div>

      <div id="partner-section" className="py-20 bg-teal-900 mt-20 px-3 md:px-32">
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-3 text-center">
          Sell with a {" "}
          <span className="text-green-300">Nestin partner agent</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
          <div className="bg-white rounded-2xl flex flex-col items-center text-center p-6 shadow-lg">
            <img className="w-40 mb-4" src={showcase} alt="Showcase" />
            <h1 className="text-2xl md:text-2xl font-bold mb-2">
              Sell for more with Showcase
            </h1>
            <p>
              Select partner agents offer
              <span className="text-blue-600 underline">Showcase</span> — a
              premium listing experience with 3D tours and interactive floor
              plans — at no extra cost. Showcase listings sell for $7K more on
              average.
            </p>
          </div>
          <div className="bg-white rounded-2xl flex flex-col items-center text-center p-6 shadow-lg">
            <img className="w-36 mb-4" src={home} alt="Showcase" />
            <h1 className="text-2xl md:text-2xl font-bold mb-2">
              Maximize your home’s visibility
            </h1>
            <p>
              Nestin helps you
              <span className="text-blue-600 underline">sell your home </span>
              with partner agents to reach the largest audience of buyers
              through public listings.
            </p>
          </div>
        </div>

        <p className="text-center mt-7 text-white max-w-lg mx-auto">
          Answer a few questions to connect with a Zillow partner agent who
          offers Showcase or explore other selling options — all in 3 minutes
          with no commitment.
        </p>

        <div className="flex justify-center mt-5">
          <button className="px-4 py-2 bg-white text-blue-600 hover:text-blue-700 shadow-lg rounded-md text-lg md:px-8">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-white px-6 md:px-32 mt-20">
        <h1 className="text-2xl md:text-4xl font-bold text-black mt-3 text-center mb-5 mx-auto">
          Explore more selling options
        </h1>
        <p className="text-center mb-24">
          Sell your home your way. Choose the path that fits your needs.
        </p>
        <div className=" rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
          <div className="bg-[#001B7A] text-white flex flex-col justify-center p-8 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get a <span className="text-cyan-400">cash offer</span>
            </h1>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-2 ">
                <FaCheck size={25} className="text-white  mt-1" />
                <span>
                  <strong>Get an all cash offer</strong> in select markets when
                  you sell directly to our trusted partner, Opendoor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={25} className="text-white mt-1" />
                <span>
                  <strong>Sell your home as-is</strong> and avoid the hassle of
                  showings and repairs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={25} className="text-white mt-1" />
                <span>
                  <strong>Sell your home on your timeline</strong> and choose
                  your closing day.
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base">
              Take 3 minutes to check your eligibility. No commitment needed.
            </p>

            <button className="mt-6 w-max px-5 py-2 bg-white text-[#001B7A] hover:text-blue-700 rounded-xl font-medium shadow-md flex items-center gap-2">
              Get a cash offer
              <HiArrowNarrowRight className="mt-1" size={20} />
            </button>
          </div>

          <div className="md:w-1/2 max-h-[360px] md:max-h-[630px] lg:max-h-[440px]">
            <img src={cashoffer} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className=" rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl mt-15">
          <div className="md:w-1/2 max-h-[360px] md:max-h-[630px] lg:max-h-[440px]">
            <img src={agent1} className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#001B7A] text-white flex flex-col justify-center p-8 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Find your <span className="text-cyan-400">own agent</span>
            </h1>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-2 ">
                <FaCheck size={25} className="text-white  mt-1" />
                <span>
                  <strong>Explore agents</strong> by local market expertise,
                  specialties and verified reviews to find the perfect match.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={25} className="text-white mt-1" />
                <span>
                  <strong>Already have an agent?</strong>See how Zillow can help
                  you get in front of the most buyers to{" "}
                  <span className="text-white underline">
                    maximize your sale
                  </span>
                  .
                </span>
              </li>
            </ul>

            <button className="mt-6 w-max px-5 py-2 bg-white text-[#001B7A] hover:text-blue-700 rounded-xl font-medium shadow-md flex items-center gap-2">
              Find agent near you
              <HiArrowNarrowRight className="mt-1" size={20} />
            </button>
          </div>
        </div>

        <div className=" rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl mt-15 mb-25">
          <div className="bg-[#001B7A] text-white flex flex-col justify-center p-8 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Sell your home<span className="text-cyan-400">yourself</span>
            </h1>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-2 ">
                <FaCheck size={25} className="text-white  mt-1" />
                <span>
                  <strong>Reach more potential buyers</strong>with a For Sale By
                  Owner listing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={25} className="text-white mt-1" />
                <span>
                  <strong>Manage everything, </strong> from home prep to
                  negotiations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck size={25} className="text-white mt-1" />
                <span>
                  <strong>Keep 100%</strong>of the proceeds.
                </span>
              </li>
            </ul>

            <button className="mt-6 w-max px-5 py-2 bg-white text-[#001B7A] hover:text-blue-700 rounded-xl font-medium shadow-md flex items-center gap-2">
              List your home on Nestin
              <HiArrowNarrowRight className="mt-1" size={20} />
            </button>
          </div>

          <div className="md:w-1/2 max-h-[360px] md:max-h-[630px] lg:max-h-[440px]">
            <img src={sellhome} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 px-4 md:px-12 lg:px-52">
        <h1 className="text-2xl md:text-4xl font-bold text-black mt-3 mb-4">
          Go-to resources for a successful sale
        </h1>
        <p className="md:text-lg mb-10">
          Get practical guides and strategies for every step of your selling
          process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {article.readTime} min read
                </span>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <a
                  href={article.link}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read article
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 md:text-lg">
          As you take the steps to sell your home, learn what to expect with our{" "}
          <span className="underline font-bold text-blue-600">
            Sellers Guide
          </span>
          .
        </p>

        <div className=" mt-28 px-4 md:px-12 ">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-400 py-3">
              <button
                className="w-full flex justify-between items-center text-left font-bold text-lg"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openFaqs.includes(index) ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </button>
              {openFaqs.includes(index) && (
                <p className=" mt-2  leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>


        <div className="p-8 rounded-2xl border border-gray-400 flex flex-col lg:flex-row gap-10 mt-25">
          <div>
            <img className="w-full md:w-[650px] lg:w-[900px] object-cover" src={findhome}/>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">Find your perfect selling path in minutes</h1>
            <p className="mt-5">Answer a few simple questions to determine whether selling with a partner agent or getting a cash offer is best for you. No commitment required.</p>
            <button className=" mt-6 px-4 py-2 bg-blue-500 text-white  hover:bg-blue-700 shadow-lg rounded-md text-lg md:px-8">
           Explore Selling Options
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SellComponent;
