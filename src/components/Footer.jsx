import React from "react";
import appstore from '../assets/appstore.png'
import playstore from '../assets/googleplay.png'
import logo from "../assets/logo-design.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import AboutSection from "./AboutSection";

const Footer = () => {
  return (
    <div>
      <AboutSection />
      <div className="px-16 md:px-32 mb-10">
        <p className="text-[0.70rem] text-center mb-2">
          Nestin Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please{" "}
          <span className="underline cursor-pointer text-blue-600 hover:text-blue-900">
            <a href="#">let us know</a>
          </span>
        </p>
        <p className="text-[0.70rem] text-center">
          Nestin, Inc. holds real estate brokerage{" "}
          <span className="underlinecursor-pointer text-blue-600 hover:text-blue-900">
            <a href="#">licenses</a>
          </span>{" "}
          in multiple states. Nestin (Pakistan), Inc. holds real estate
          brokerage
          <span className="underline cursor-pointer text-blue-600 hover:text-blue-900">
            <a href="#">licenses</a>
          </span>{" "}
          in multiple provinces.
        </p>
        <p className="text-[0.75rem] underline text-blue-600 text-center hover:text-blue-900 cursor-pointer">
          <a href="#">§ 442-H New York Standard Operating Procedures</a>
        </p>
        <p className="text-[0.70rem] underline text-blue-600 text-center hover:text-blue-900 cursor-pointer">
          <a href="#">§ New York Fair Housing Notice</a>
        </p>
        <p className="text-[0.70rem] underline text-blue-600 text-center hover:text-blue-900 cursor-pointer">
          TREC:
          <span>
            <a href="#">
              nformation about brokerage services, Consumer protection notice
            </a>
          </span>
        </p>
        <p className="text-[0.70rem] text-center mb-1">
          California DRE #1522444
        </p>
        <p className="text-[0.95rem] underline text-blue-600 text-center hover:text-blue-900 cursor-pointer mb-5">
          <a href="#">Contact Nestin, Inc. Brokerage</a>
        </p>
        <p className="text-center text-[0.70rem] mb-5">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>

        <div className="py-6 px-4 flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <img src={appstore} alt="App Store" className="h-8" />
            <img src={playstore} alt="Google Play" className="h-8" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-1">
              <img className="w-20" src={logo} />
            </div>

            <span className="text-gray-600 italic text-sm">Follow us:</span>

            <div className="flex space-x-3 text-blue-600 text-xl">
              <FaFacebook className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTiktok className="cursor-pointer" />
            </div>

            <span className="text-sm text-gray-500 italic">
              © 2006–2025 Nestin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
