import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="w-full md:w-auto text-center md:text-left">
          <img
            src="https://www.elitefitforyou.com/img/EliteFitAI-Logo.21f550b3.svg"
            alt="EliteFit.AI Logo"
            className="h-12 mb-2 mx-auto md:ml-5"
          />
          <h2 className="text-lg mb-3 tracking-widest">ELITEFIT.AI</h2>
          <p className="text-md mb-1">Copyright © EliteFit Pte Ltd</p>
          <p className="text-md mb-4">All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-5">
            <FaFacebookF className="text-lg cursor-pointer hover:text-green-400" />
            <FaLinkedinIn className="text-lg cursor-pointer hover:text-green-400" />
            <FaYoutube className="text-lg cursor-pointer hover:text-green-400" />
            <FaInstagram className="text-lg cursor-pointer hover:text-green-400" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full md:w-auto text-center md:text-left">
          <div>
            <h3 className="text-[#6CB33F] font-bold mb-2 text-lg">
              Who We Serve
            </h3>
            <ul className="text-md space-y-3">
              <li>Healthcare</li>
              <li>Fitness/Yoga</li>
              <li>Sports</li>
              <li>Insurance</li>
              <li>Public Sector</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6CB33F] font-bold mb-2 text-lg">
              About EliteFit.AI
            </h3>
            <ul className="text-md space-y-3">
              <li>Why EliteFit.AI</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6CB33F] font-bold mb-2 text-lg">Resources</h3>
            <ul className="text-md space-y-3">
              <li>Videos</li>
              <li>Press</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6CB33F] font-bold mb-2 text-lg">Legal</h3>
            <ul className="text-md space-y-3">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookies & Ads</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
