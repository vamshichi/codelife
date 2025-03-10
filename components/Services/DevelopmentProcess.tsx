import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: "Discovery",
    description: "Understand requirements & business goals.",
  },
  {
    icon: <FaPencilRuler className="text-white text-3xl" />,
    title: "Design",
    description: "Create wireframes & UI/UX designs for approval.",
  },
  {
    icon: <FaCode className="text-white text-3xl" />,
    title: "Development",
    description: "Build using best coding practices & technologies.",
  },
  {
    icon: <FaRocket className="text-white text-3xl" />,
    title: "Launch",
    description: "Deploy, test, and make your website live.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="w-full py-12 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Development Process</h2>
        <p className="text-gray-600 mt-2">A structured approach to ensure high-quality results.</p>
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full">{step.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
