import React from "react";

const services = [
  { name: "Domain Registration (.com, .in, etc.)", price: "₹2,500 - ₹5,000/year" },
  { name: "Hosting Setup (AWS, DigitalOcean, Vercel)", price: "₹10,000 - ₹25,000/year" },
  { name: "SEO Optimization (Basic)", price: "₹10,000 - ₹20,000" },
  { name: "SEO Optimization (Advanced)", price: "₹50,000+" },
  { name: "Maintenance (Bug Fixes, Updates)", price: "₹10,000 - ₹25,000/month" },
  { name: "Content Writing (Per Page)", price: "₹2,500 - ₹7,500" },
  { name: "Logo & Branding", price: "₹10,000 - ₹30,000" },
];

const AdditionalServices = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Additional Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Elevate your website with our premium add-ons and expert services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 hover:border-gray-400"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
              <p className="mt-3 text-lg font-medium text-gray-700">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
