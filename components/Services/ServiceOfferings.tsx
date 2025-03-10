const services = [
    { name: "Basic Website", description: "Static site with 3-5 pages", price: "₹15,000+" },
    { name: "Business Website", description: "CMS/Admin Panel, 6-10 pages", price: "₹30,000+" },
    { name: "E-commerce Website", description: "Product catalog, cart & payment", price: "₹50,000+" },
    { name: "Custom Web Apps", description: "CRM, SaaS, Job Portals, etc.", price: "₹75,000+" },
    { name: "UI/UX Design", description: "Wireframes & designs", price: "₹10,000+" },
    { name: "Website Maintenance", description: "Bug fixes, updates", price: "₹5,000/month+" },
  ];
  
  const ServiceOfferings = () => {
    return (
      <section className="w-full py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Service Offerings</h2>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4 font-semibold">{service.name}</td>
                    <td className="py-3 px-4">{service.description}</td>
                    <td className="py-3 px-4 text-blue-600 font-bold">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceOfferings;
  