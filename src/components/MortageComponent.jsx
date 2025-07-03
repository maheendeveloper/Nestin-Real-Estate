import React from "react";
import imgloan from "../assets/loanimg.png";
import { useRef } from "react";
import { useState } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { FaCheck, FaRegChartBar, FaSign } from "react-icons/fa";
import { MdOutlineLocalOffer, MdPayment } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import approval from "../assets/approval.svg";
import approved from "../assets/approved.svg";
import finance from "../assets/financee.svg";
import highfive from "../assets/highfive.svg";
import qualified from "../assets/qualified.svg";
import buyhome from "../assets/buyhome.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const stepsData = [
  {
    id: 1,
    image: finance,
    title: "Prepare your finances",
    desc: "Review your credit score and income — and avoid taking out loans, opening credit cards or making large purchases for six months.",
    link: "Try this calculator",
  },
  {
    id: 2,
    image: qualified,
    title: "Get pre-qualified",
    desc: "In as little as five minutes, get an estimate of what you can borrow to shop for homes in your budget — with no impact to your credit.",
    link: "Pre-qualify today",
  },
  {
    id: 3,
    image: approved,
    title: "Get pre-approved",
    desc: "Make strong offers on homes with a verified pre-approval letter. A loan officer will review the documents you've prepared and verify the amount you're approved for.",
  },
  {
    id: 4,
    image: approval,
    title: "Apply for a mortgage loan",
    desc: "After the seller accepts your offer, you can formally apply for a mortgage. Our loan officers will provide expert guidance every step of the way.",
  },
  {
    id: 5,
    image: highfive,
    title: "Close on your new home",
    desc: "Congrats, homeowner! In most states, you'll close your loan with an escrow company. Once your loan is approved, the lender will finalize the sale.",
  },
];

const MortageComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = stepsData.length - visibleCards;

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };
  return (
    <div>
      <div className="mt-20 px-3 md:px-32 lg:px-40">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex flex-col lg:mr-16 lg:mt-12">
            <button className=" w-fit rounded-xl px-2 py-1 bg-gray-300 font-bold text-black mx-auto md:mb-2 md:mx-0">
              Nestin Home Loans
            </button>
            <h1 className="font-bold text-2xl mx-auto md:mx-0 md:text-3xl lg:text-4xl lg:mt-8 mb-2 lg:mb-6">
              Get the loan{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              that gets you home
            </h1>
            <p className="max-w-lg mb-9 mx-auto lg:text-lg">
              We offer mortgage loans with no hidden fees and guidance at every
              step. Start now by seeing what you can afford.
            </p>
            <button className=" text-center self-center md:self-start flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded lg:px-6 lg:py-4 cursor-pointer">
              Get pre qualified
            </button>
            <h1 className="font-bold mt-3 mx-auto md:mt-14 md:mx-0">
              Already working with us? {"     "}
              <span className="text-blue-600 underline">
                Access your dashboard
              </span>
            </h1>
          </div>
          <div>
            <img
              className="w-90 lg:w-135 md:w-150  mx-auto md:mx-0 md:mt-4 lg:mt-8"
              src={imgloan}
            />
          </div>
        </div>

        <div className="bg-blue-100  text-blue-900 rounded-xl px-6 py-4 flex items-center gap-3 max-w-3xl mx-auto mt-16 shadow-md">
          <BsCameraVideo className="text-2xl text-blue-700" />
          <p className="text-base md:text-lg font-medium">
            Got home-buying questions? Get answers in our live Q&A.{" "}
            <span className="underline cursor-pointer hover:text-blue-800">
              Register now.
            </span>
          </p>
        </div>

        <div className=" text-black">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-24 mt-16">
            Why Nestin Home Loans?
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-7 lg:px-28">
              <div className="flex flex-col items-center">
                <FaRegChartBar className="text-blue-500 text-[150px] mb-4" />
                <h3 className="text-xl font-bold mb-2">Competitive rates</h3>
                <p>
                  Strong rates, no hidden fees, and total transparency to keep
                  you informed and up to date.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <MdPayment className="text-blue-500 text-[150px] mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Low down payment options
                </h3>
                <p>
                  We offer a variety of loan options to meet your needs and help
                  make home ownership more affordable.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <MdOutlineLocalOffer className="text-blue-500 text-[150px] mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Top-rated loan officers
                </h3>
                <p>
                  With a 4.9-star average ratingHelp, our loan officers provide
                  step-by-step guidance and expertise in first-time home buying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-teal-800 text-white py-10 mt-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold ">
                <span>Your </span>
                <span className="text-lime-400">home financing journey </span>
                <span>starts here</span>
              </h2>
              <p className="text-base">
                Not sure where to begin? Follow these steps to get home on your
                budget.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prev}
                className={`rounded-full p-2 bg-white text-teal-800 shadow-md ${
                  startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={startIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={next}
                className={`rounded-full p-2 bg-white text-teal-800 shadow-md ${
                  startIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={startIndex >= maxIndex}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="md:hidden flex flex-col gap-6">
            {stepsData.map((step) => (
              <div
                key={step.id}
                className="bg-white text-black rounded-xl p-6 shadow-md"
              >
                <img
                  src={step.image}
                  alt="step"
                  className="w-24 h-24 mb-4 object-contain"
                />
                <div className="text-xs font-semibold bg-gray-200 rounded-full inline-block px-3 py-1 mb-2">
                  Step {step.id} of 5
                </div>
                <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                <p className="text-sm mb-2">{step.desc}</p>
                {step.link && (
                  <a href="#" className="text-blue-700 font-semibold underline">
                    {step.link}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
                width: `${(100 / visibleCards) * stepsData.length}%`,
              }}
            >
              {stepsData.map((step) => (
                <div
                  key={step.id}
                  className="bg-white text-black rounded-xl p-6 shadow-md flex-shrink-0"
                  style={{ width: `${100 / stepsData.length}%` }}
                >
                  <img
                    src={step.image}
                    alt="step"
                    className="w-24 h-24 mb-4 object-contain"
                  />
                  <div className="text-xs font-semibold bg-gray-200 rounded-full inline-block px-3 py-1 mb-2">
                    Step {step.id} of 5
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm mb-2">{step.desc}</p>
                  {step.link && (
                    <a
                      href="#"
                      className="text-blue-700 font-semibold underline"
                    >
                      {step.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className=" rounded-3xl overflow-hidden flex flex-col md:flex-row  px-3 md:px-32 lg:px-40 ">
        <div className="bg-[#001B7A] text-white flex flex-col justify-center p-8 md:w-1/2 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Track your <span className="text-cyan-400"> BuyAbility</span>
          </h1>
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-2 ">
              <FaCheck size={25} className="text-white  mt-1" />
              <span>
                <strong>
                  Get a personalized, real-time estimate of the home price and
                  monthly payment you can afford.
                </strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck size={25} className="text-white mt-1" />
              <span>
                <strong>
                  Scan the QR code to get the Zillow app. Tap the home loans tab
                  to get started.
                </strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck size={25} className="text-white mt-1" />
              <span>
                <strong>Looking for a quick, one-time estimate?</strong>
                <br />
                <p className="underline text-sm ">
                  Try this affordability calculator
                </p>
              </span>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 max-h-[360px] md:max-h-[630px] lg:max-h-[440px]">
          <img src={buyhome} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default MortageComponent;
