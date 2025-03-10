import { Briefcase, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={40} className="text-blue-500" />,
    title: "Innovative Solutions",
    description: "We focus on creativity and modern technology to build unique digital experiences.",
  },
  {
    icon: <Users size={40} className="text-blue-500" />,
    title: "Client-First Approach",
    description: "Your goals and vision drive our development process, ensuring tailored solutions.",
  },
  {
    icon: <Briefcase size={40} className="text-blue-500" />,
    title: "Dedicated Team",
    description: "A passionate team committed to delivering high-quality, scalable, and future-proof websites.",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We are a passionate team of developers and designers dedicated to bringing your ideas to life with cutting-edge technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
