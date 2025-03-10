import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 text-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Check out our past projects & success stories!</h1>
        <p className="text-lg text-gray-300 mb-6">
          Explore our portfolio and see how we've helped businesses thrive with modern web solutions.
        </p>
        <a
          href="/portfolio"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
