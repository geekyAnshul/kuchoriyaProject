import React from 'react';
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";
import { GiMountains } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";
import { MdSettingsSuggest } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { FaArrowUpRightDots } from "react-icons/fa6";

const IndustryVerticals = () => {
  return (
    <div className="bg-black text-white p-10">
         <div className="max-w-7xl mx-auto px-4  py-8 poppins relative">
      <h1 className="text-center text-4xl font-medium mb-5">
        Best IT Consulting Company Across Different <br /> <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
        Industry Verticals
</span> 
      </h1>
      <p className="text-center text-sm mb-10">
        We have successfully connected countless businesses with great software
        developers for bespoke development thanks to our track record of
        delivering high-quality <br /> projects under expert supervision and within
        budget. Partner with us - the premier provider of custom software
        development - to hire programmers for numerous industry verticals. We
        have a vast reach and competence across multiple sectors.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
   
    <div className="flex flex-col items-center justify-center py-8 group">
        <LiaHamburgerSolid className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Food & Restaurants</p>
    </div>

   
    <div className="flex flex-col items-center justify-center py-8 group">
        <IoGameControllerOutline className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Game Developments</p>
    </div>

    
    <div className="flex flex-col items-center justify-center py-8 group">
        <MdOutlineHealthAndSafety className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Healthcare</p>
    </div>

   
    <div className="flex flex-col items-center justify-center py-8 group">
        <MdCastForEducation className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Education</p>
    </div>

   
    <div className="flex flex-col items-center justify-center py-8 group">
        <BsCart4 className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">E-commerce</p>
    </div>

    <div className="flex flex-col items-center justify-center py-8 group">
        <BiBus className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Travel & Hospitality</p>
    </div>

    
    <div className="flex flex-col items-center justify-center py-8 group">
        <MdMovieFilter className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Media Entertainment</p>
    </div>

    <div className="flex flex-col items-center justify-center py-8 group">
        <MdRealEstateAgent className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Real Estate</p>
    </div>

    <div className="flex flex-col items-center justify-center py-8 group">
        <GiMountains className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Tours and Travel</p>
    </div>

    <div className="flex flex-col items-center justify-center py-8 group">
        <MdSettingsSuggest className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Utility</p>
    </div>

    
    <div className="flex flex-col items-center justify-center py-8 group">
        <RiBankFill className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">Finance and Banking</p>
    </div>

   
    <div className="flex flex-col items-center justify-center py-8 group">
        <FaArrowUpRightDots className='text-7xl group-hover:text-orange-500 transition-colors duration-300' />
        <p className="text-center mt-2 group-hover:text-white transition-colors duration-300">On-Demand</p>
    </div>
</div>

    </div>
    </div>
  );
};

export default IndustryVerticals;