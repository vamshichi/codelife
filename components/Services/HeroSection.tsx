const HeroSection = () => {
    return (
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl">
            We Build Modern, Responsive, and User-Friendly Websites & Web Apps
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Tailored solutions to meet your business needs and drive success.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            {/* <a href="/services" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
              View Services
            </a> */}
            <a href="/contact" className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  