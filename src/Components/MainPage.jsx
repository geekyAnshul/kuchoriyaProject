


import React from "react";
import { IoMdCall } from "react-icons/io";
import Cards from "./Cards";
import { Link } from "react-scroll";
import Service from "./Services";
import Collaboration from "./Collaboration";
import PartnerShipModel from "./PartnerShipModel";
import Technologies from "./Technologies";
import IndustryVerticals from "./IndustryVerticals";
import CaseStudy from "./CaseStudy";
import SuccessStories from "./SuccessStories";
import Companies from "./Companies";
import LatestBlog from "./LatestBlog";
import Contact from "./Contact";
const MainPage = () => {
   
  return (
    <div className="relative w-full h-screen ">
     
      <div className="absolute inset-0">
       <iframe
  className="w-full h-full object-cover z-20"
  width="1282"
  height="720"
  src="https://www.youtube.com/embed/gXFATcwrO-U?autoplay=1&mute=1&loop=1&rel=0"
  title="Business footage diverse team | Footage in office, meeting room | Free download stock footage"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      </div>

      

      
      <div className="relative poppins z-50 bg-black bg-opacity-70 h-full text-white">
        {/* Navbar */}
        <header className="flex fixed w-full z-50 bg-black justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold text-orange-500">KUCHORIYA</div>
          <nav className="hidden md:flex space-x-6 text-sm uppercase">
          <Link to="company" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Company
            </Link>
            <Link to="services" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Services
            </Link>
            <Link to="technologies" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Technologies
            </Link>
            <Link to="hire" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Hire Developers
            </Link>
            <Link to="portfolio" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Portfolio
            </Link>
            <Link to="latestblog" smooth={true} duration={800} className="hover:text-orange-500 cursor-pointer">
              Blogs
            </Link>
          </nav>
          <div className="space-x-4 flex items-center">
            <button className="text-orange-500 border border-orange-500 px-4 py-2 text-sm rounded hover:bg-orange-500 hover:text-white">
              Request A Quote
            </button>
          </div>
        </header>

       
        <main className="flex flex-col  items-center justify-center h-full px-4 text-center">
  <h1 className="text-5xl md:text-5xl font-bold leading-tight opacity-0 animate-fadeIn delay-100">
    Innovative Software Solutions <br />
    <span className="text-orange-500">For A Changing World</span>
  </h1>
  <p className="mt-4 text-gray-300  max-w-3xl opacity-0 animate-fadeIn text-sm delay-200">
    We design software solutions that accelerate progress and adapt to
    our world's ever-changing landscape.
  </p>
  <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 hover:scale-105 transform transition-all duration-300">
    Free Consulting
  </button>
</main>

<style jsx>{`
  /* Custom fade-in animation */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add fade-in animation to elements */
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  
  /* Add delay to each element for smooth appearance */
  .delay-100 {
    animation-delay: 0.1s;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
`}</style>


      
        <div className=" fixed bottom-10 right-4 flex flex-col space-y-4">
        <a
  href="#"
  className="bg-red-500 text-white p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-red-600"
>
  <IoMdCall className="text-xl" />
</a>
<a
  href="#"
  className="bg-green-500 text-white p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-green-600"
>
  💬
</a>
<a
  href="#"
  className="bg-blue-500 text-white p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-600"
>
  💻
</a>

        </div>

      
        <div className="fixed -right-10 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-l rotate-90">
  GET IN TOUCH
</div>

      </div>

      <div className=" max-w-7xl mx-auto px-4 py-8 poppins relative">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://kuchoriya-software.s3.ap-south-1.amazonaws.com/pages/1684313692445_H57dkNERT3Qt16yV1Sm0n4at.png" // Replace with your actual image path
                alt="Kuchoriya Softwares Team"
                className="w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-lg"></div>
            </div>
          </div>
          <div className="md:w-1/2 poppins px-4 md:px-8 mt-8 md:mt-0">
            <h1 className="text-4xl font-medium text-orange-500 mb-4">
              Kuchoriya Softwares
            </h1>
            <p className="text-sm  text-gray-600 mb-6">
              Since our founding in 2009, we have grown to become a recognized
              global brand by serving more than 1000 clients, and we are proud
              to offer full-range, end-to-end development and designing
              solutions.....
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded">
              Read More..
            </button>
          </div>
        </div>
       <Cards/>
       <div id="services">
            <Service />
          </div>

      
      </div>

      

    </div>
    <div className="bg-black text-white text-center py-16">
      <div className="max-w-7xl mx-auto px-4 py-8 poppins relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-3">Transforming Businesses With</h1>
      <h2 className="text-3xl md:text-4xl text-orange-500 font-bold mb-6">Top-Ranked Web and Mobile App Development Company</h2>
      <p className="text-lg md:text-xl mb-8">
        We've worked with hundreds of startups, small-medium enterprises and top brands, empowering them with our digital intelligence and expertise. We deliver the right business outcomes 5X faster than our competitors and help our clients monetize more effectively.
      </p>
      
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded">Get a quote</button>
    </div>
    </div>


    <Collaboration/>
    <PartnerShipModel/>
    <div id="technologies">
        <Technologies />
      </div>
    <IndustryVerticals/>

    <div id="hire">
    <CaseStudy/>
      </div>
   
    
    <div id="portfolio">
        <SuccessStories />
      </div>
      <div id="company">
      <Companies/>
      </div>
   
    <div id="latestblog">
    <LatestBlog/>
      </div>


   {/* contact page is not built properly */}
    {/* <Contact/> */}
    </div>
  );
};

export default MainPage;

