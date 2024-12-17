import React from 'react';

const Collaboration = () => {
  return (
<div className="max-w-7xl mx-auto px-4 mt-10 py-8 poppins relative">
          <h2 className="text-4xl font-medium text-center mb-6">
        Know How <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
  We Collaborate with our Clients
</span>

      </h2>
      <p className="text-sm leading-tight text-gray-600 text-center mb-12">
        We're always excited to listen to new ideas from clients and as one of the largest mobile app development and web development companies <br />
        worldwide, we create new levels of value through client's businesses. Here's how we work together with our clients as one across different <br />
        time zones.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:ml-32 lg:grid-cols-2 gap-8">
        {/* pahla Card  */}
        <div className="card rounded-lg">
      <div className="left-side">
        <div className="textt">
          <h1 className='text-orange-700 text-xl font-semibold'>Understand our</h1>
          <h1 className='text-orange-700 text-xl font-semibold'>Clients</h1>
        </div>
      </div>
      <div className="right-side">
        <div className="text">
          <h1>Call or Meeting</h1>
          <h1>NDA (Non-Disclosure)</h1>
        </div>
      </div>
    </div>
        {/*  Card dusra */}
        <div className="card rounded-lg">
      <div className="left-side">
        <div className="textt">
          <h1 className='text-orange-700 text-xl font-semibold'>Poject Estimates</h1>
          {/* <h1>Clients</h1> */}
        </div>
      </div>
      <div className="right-side">
        <div className="text">
          <h1>Gather Requirements</h1>
          <h1>Perfect Proposal</h1>
        </div>
      </div>
    </div>
        {/*  Card third */}
        <div className="card rounded-lg">
      <div className="left-side">
        <div className="textt pl-4">
          <h1 className='text-orange-700 text-xl font-semibold'>Strategic PartnerShip</h1>
         
        </div>
      </div>
      <div className="right-side">
        <div className="text">
          <h1>T&C Communicated</h1>
          <h1>Project Aggreement</h1>
        </div>
      </div>
    </div>
        {/*  Card 4 */}
        <div className="card rounded-lg">
      <div className="left-side">
        <div className="textt">
          <h1 className='text-orange-700 text-xl font-semibold'>Working Together</h1>
          {/* <h1 className='text-orange-700 text-xl font-semibold'>Clients</h1> */}
        </div>
      </div>
      <div className="right-side">
        <div className="text">
          <h1 className='bg-orange-500 text-white rounded-full px-4 py-2'>Let's Start</h1>
          {/* <h1>NDA (Non-Disclosure)</h1> */}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Collaboration;