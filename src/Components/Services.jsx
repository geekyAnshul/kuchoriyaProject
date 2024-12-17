
import React from 'react';

function Service() {
  const services = [
    {
      title: 'Our Services',
      description:
        'We bring your ideas to life with our high-quality web and mobile app development services.',
      imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ccb6f7188427153.659c2879a1054.png',
    },
    {
      title: 'Web Development',
      description:
        'Our customized web development services help your business craft interactive and engaging web experiences for customers.',
      imageSrc: 'https://wallpaperaccess.com/full/3239444.jpg',
    },
    {
      title: 'UI/UX Design',
      description:
        'Our skilled UI/UX designers produce cutting-edge, responsive interfaces that improve the perception of your brand and simplify user interactions.',
      imageSrc: 'https://th.bing.com/th/id/OIP.uSHN4HaDBX5T94k14Fw48gHaFp?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Blockchain Development',
      description:
        'Our blockchain knowledge is unmatched, from developing Smart Contracts to creating decentralized apps.',
      imageSrc: 'https://th.bing.com/th/id/OIP.hQMOTiD33Gh8ShGP3PLGjAHaEo?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Mobile App Development',
      description:
        'Custom mobile app solutions for all platforms and devices can revolutionize your business.',
      imageSrc: 'https://www.panoramicinfotech.com/wp-content/uploads/2021/07/app-development-min.jpg',
    },
    {
      title: 'Quality Analysis',
      description:
        'Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.',
      imageSrc: 'https://www.pmworld360.com/wp-content/uploads/2019/02/Depositphotos_16372601_original.jpg',
    },
    {
        title: 'Product Development',
        description:
          'Transform your ideas into scalable products with our end-to-end product development solutions.',
        imageSrc: 'https://i.pinimg.com/originals/64/f4/3b/64f43b77863ec99085e13141d9b077a7.png',
      },
      {
        title: 'Digital Marketing',
        description:
          'Boost your online presence with our cutting-edge digital marketing strategies and expert team.',
        imageSrc: 'https://ozbilens.com/wp-content/uploads/2020/01/o-que-considerar-na-hora-de-contratr-uma-agencia-de-marketing-digital.jpg',
      },
      {
        title: 'CTO Services',
        description:
          'Leverage our experienced CTO services to strategize and lead your tech vision effectively.',
        imageSrc: 'https://th.bing.com/th/id/OIP.MDWCUuS96XfdzNX26i5aLQHaD4?rs=1&pid=ImgDetMain',
      }
      
  ];

  return (
    <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {services.map((service, index) => (
        <div key={index} className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden group">
        
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover rounded-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300"
          />

          
          <div
            className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20"
          ></div>

        
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-30">
  <span className="text-white text-4xl font-medium opacity-0  group-hover:opacity-100 transition-opacity duration-300">
    View More
  </span>
</div>

         
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 p-6 text-center">
            <h2 className="text-3xl font-medium text-orange-500 mb-4">{service.title}</h2>
            <p className="text-gray-800 mb-4">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
