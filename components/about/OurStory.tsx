const OurStory = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Founded with a passion for innovation, we are dedicated to crafting exceptional digital experiences. 
            Our journey started with a simple vision—to empower businesses with cutting-edge technology and user-friendly solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To provide businesses with high-quality, scalable, and innovative web solutions that drive growth and success.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be a leading provider of digital solutions that revolutionize the way businesses connect with their audience.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600">Our Values</h3>
              <p className="text-gray-600 mt-2">
                Integrity, innovation, and customer success. We believe in transparency, creativity, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurStory;
  