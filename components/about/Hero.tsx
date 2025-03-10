const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          We Craft Digital Experiences That Drive Results.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Elevate your brand with stunning websites and high-performance digital solutions.
        </p>
        <div className="flex gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
          <a
            href="/portfolio"
            className="px-6 py-3 border border-white rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition"
          >
            View Portfolio
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  