import React from 'react';
const feedbacks = [
    {
      id: 1,
      name: "James Mitchell",
      role: "CEO",
      image:
        "https://randomuser.me/api/portraits/men/1.jpg",
      feedback:
        "From the initial consultation to the completion of the project, the team was professional, responsive, and delivered exceptional results. I highly recommend their services to anyone looking for quality work.",
    },
    {
      id: 2,
      name: "Sophia Williams",
      role: "Marketing Head",
      image:
        "https://randomuser.me/api/portraits/women/2.jpg",
      feedback:
        "The service provided exceeded my expectations. The team delivered everything on time and maintained excellent communication throughout the process.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "CTO",
      image:
        "https://randomuser.me/api/portraits/men/3.jpg",
      feedback:
        "Working with this team was an absolute pleasure. Their expertise and dedication to the project ensured outstanding results.",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Product Manager",
      image:
        "https://randomuser.me/api/portraits/women/4.jpg",
      feedback:
        "They delivered quality work on time and exceeded expectations. I would happily recommend their services to anyone looking for professionalism.",
    },
  ];
const SuccessStories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  py-8 poppins relative">
      <h2 className="text-5xl text-orange-500 mt-16  font-semibold text-center mb-8">Success Stories</h2>
      <h3 className="text-3xl font-medium text-center mb-4">Words From our Clients</h3>
      <p className="text-center mb-8 text-lg">
        Grateful to hear the beautiful words from our clients that motivate us to perform better for their workings
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Left Section */}
  <div className="flex flex-wrap justify-center gap-8">
  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.Sh_bmUnrcataTwbBfdd7BAHaHa?rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Image Label</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://images.credly.com/images/ecfde2c7-d9bc-473f-a8ac-d24dc79c7aa8/twitter_thumb_201604_Inteligencia_Artificial_Master_in_Artificial_Intelligence.png" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Image Label</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Image Label</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.U6dkEvHKwIMPb0oI3Y31hQHaHc?rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://assets.leetcode.com/static_assets/others/annual-badge-2021-front.png" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://image.shutterstock.com/shutterstock/photos/1638046471/display_1500/stock-vector-certified-technician-vector-golden-badge-1638046471.jpg" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.GVrxXw0hxEg4eQ5uIrYaRwHaH_?w=1000&h=1080&rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.nKXYh6Xs0vqT_xo7VyINUQAAAA?rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.gOqd_u2AqHphvAc1kUXOcAAAAA?rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>

  <div className="flex flex-col items-center transform hover:scale-110 transition duration-300 hover:shadow-lg">
    <img 
      src="https://th.bing.com/th/id/OIP.7KlXbaHR6Ghgurny5ogB2wHaJs?w=782&h=1024&rs=1&pid=ImgDetMain" 
      alt="Image" 
      className="w-24 h-24 object-contain mb-2"
    />
    <p className="text-center font-semibold">Trustpilot</p>
  </div>
</div>


 
  {/* <div className="bg-gray-100 p-8 rounded-lg flex flex-col justify-start">
    <div className="flex items-center mb-4">
     
      <h4 className="font-bold text-lg ml-4">JAMES MITCHELL</h4>
    </div>
    <p className="text-gray-600 font-medium mb-2">CEO</p>
    <p className="text-gray-700 leading-relaxed">
      Initially, I was skeptical, given how many scams start with a LinkedIn approach, 
      especially when the solution is overseas and involves "clicking on this link." However, 
      this was different. From the initial consultation to the completion of the project, 
      the team was professional, responsive, and delivered exceptional results. I highly 
      recommend their services to anyone looking for quality work.
    </p>
  </div> */}
  <div className="w-full overflow-hidden bg-white">
      <div className="flex md:w-[1000px] animate-loop-scroll">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] p-4"
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              {/* Client Photo */}
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              {/* Client Name & Role */}
              <h4 className="text-lg font-bold">{feedback.name}</h4>
              <p className="text-gray-600 mb-4">{feedback.role}</p>
              {/* Feedback */}
              <p className="text-gray-700 text-center">{feedback.feedback}</p>
            </div>
          </div>
        ))}
       
        {feedbacks.map((feedback) => (
          <div
            key={`${feedback.id}-duplicate`}
            className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] p-4"
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h4 className="text-lg font-bold">{feedback.name}</h4>
              <p className="text-gray-600 mb-4">{feedback.role}</p>
              <p className="text-gray-700 text-center">{feedback.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>

    </div>
  );
};

export default SuccessStories;