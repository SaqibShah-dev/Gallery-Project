import React from 'react';

const Hero = () => {
  return (
        <div className="h-[80vh] w-full flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100 to-pink-100">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to the Gallery
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Discover stunning artwork from talented creators across the world. 
        Explore, enjoy, and get inspired by our digital collection.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
        Explore Gallery
      </button>
    </div>
  );
}

export default Hero;
