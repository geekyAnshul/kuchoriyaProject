import React from 'react';

const LatestBlog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
         <div className="max-w-7xl mx-auto px-4  py-8 poppins relative">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Blog Card 1 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-500 hover:shadow-xl">
    <img
      className="w-full h-56 object-cover"
      src="https://img.freepik.com/free-vector/gradient-christmas-tinsel-background_52683-76117.jpg" // Replace with your actual image URL
      alt="Blog 1"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">
        Celebrate Christmas with Up to 30% Off on Digital Solutions
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        The holiday season is here, bringing joy, celebration, and the perfect opportunity to grow.....
      </p>
      <a href="#" className="text-orange-500 hover:underline">
        Read more...
      </a>
    </div>
  </div>

  {/* Blog Card 2 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-500 hover:shadow-xl">
    <img
      className="w-full h-56 object-cover"
      src="https://th.bing.com/th/id/OIP.JaHSn4XeHxuscKdVuhd1wwHaEK?rs=1&pid=ImgDetMain" // Replace with your actual image URL
      alt="Blog 2"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">
        Top 10 Pimcore Development Companies Driving Digital Innovation
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Pimcore is an advanced open-source digital experience platform (DXP) designed to help busi.....
      </p>
      <a href="#" className="text-orange-500 hover:underline">
        Read more...
      </a>
    </div>
  </div>

  {/* Blog Card 3 */} 
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-500 hover:shadow-xl">
    <img
      className="w-full h-56 object-cover"
      src="https://th.bing.com/th/id/OIP.vxtPuQcc2ZF891rgCfo5HQAAAA?rs=1&pid=ImgDetMain" // Replace with your actual image URL
      alt="Blog 3"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">
        How to Optimize Your Website for Better Performance
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Website performance is crucial for user experience and SEO. Here are some tips to improve.....
      </p>
      <a href="#" className="text-orange-500 hover:underline">
        Read more...
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default LatestBlog;