import React from 'react';

const PartnerShipModel = () => {
  return (

    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className='max-w-7xl mx-auto px-4 py-8 poppins relative'>
      <h2 className="text-4xl font-semibold text-orange-500 text-center mb-8">Partnership Models</h2>
      <p className="text-center mb-16">We offer collaboration that is tailored to your needs. We provide everything you need, whether you need a single developer or a full-fledged <br /> project team. Our three partnership models were specially developed to meet the particular needs of businesses and increase client <br /> revenues.</p>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "Fixed Price Project",
      description:
        "We offer skilled resources and time estimates to collaborate with you on your project at a fixed price.",
    },
    {
      title: "Hosted Team Extension",
      description:
        "We provide knowledgeable experts who can collaborate remotely with your team on your project, which is one method to boost its effectiveness.",
    },
    {
      title: "Dedicated Team Model",
      description:
        "We provide you with a specialized team of designers, developers, project managers, and quality assurance specialists who will collaborate for at least three months to complete your project.",
    },
  ].map((card, index) => (
    <div
      key={index}
      className="relative group p-1 rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-orange-500 hover:shadow-md"
    >
     
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-500 to-red-500 opacity-75 transition-transform duration-500 group-hover:scale-110"></div>
     
      <div className="absolute inset-0 bg-white rounded-lg blur-lg opacity-0 group-hover:opacity-100 animate-wavy"></div>
     
      <div className="relative z-10 bg-gray-800 h-full rounded-lg p-8 shadow-lg">
        <h3 className="text-3xl font-semibold mb-4 text-white">{card.title}</h3>
        <p className="text-gray-300">{card.description}</p>
      </div>
    </div>
  ))}
</div>


     

      <div className="text-center mt-16">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full">
          Let's Discuss
        </button>
      </div>
    </div>
    </div>
  );
};

export default PartnerShipModel;
