import React from 'react';

const Home = () => {
  return (
    <div
      className='flex flex-col items-center justify-center h-screen w-full text-center'
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <div className=" text-white p-8 rounded mb-8"style={{ backgroundColor: '#082804' }} >
        <h1 className="text-4xl font-bold mb-4" >Fresh Fruits & Vegetables – Delivered to Your Door</h1>
        <p className="text-lg">
          We handpick the best seasonal produce from local farms. Simple, sustainable, and full of flavor — order your box today and taste the difference.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <img
            src="/fruit.jpg"
            alt="Fresh Fruits"
            className="w-100 h-100 object-cover rounded-lg shadow-lg "
          />
        
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/vegi.avif"
            alt="Fresh Vegetables"
            className="w-100 h-100 object-cover rounded-lg shadow-lg"
          />
        
        </div>
      </div>
    </div>
  );
};

export default Home;