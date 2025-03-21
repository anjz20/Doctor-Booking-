import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------Left Section_------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to our clinic! Our dedicated team of experienced doctors is
            committed to providing exceptional healthcare tailored to meet your
            individual needs. We strive to create a compassionate and
            professional environment where your well-being is our top priority
          </p>
        </div>
         {/* ------Center Section_------- */}
         <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
       </div>
        {/* ------Right Section_------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+194-674-8393</li>
            <li>anjalisharma7978@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------------Copyright Text ------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ medicare - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


