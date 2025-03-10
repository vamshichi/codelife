"use client";

import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    review: "Highly professional & results-driven team!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "They understood my vision and delivered beyond expectations!",
    rating: 5,
  },
  {
    name: "David Kumar",
    review: "Excellent service! My website looks fantastic.",
    rating: 5,
  },
];

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Client Testimonials</h2>
        
        <MotionConfig transition={{ duration: 0.5 }}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white shadow-lg rounded-lg p-6 mx-4"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-lg text-gray-700 italic">{testimonials[index].review}</p>
            <h4 className="text-xl font-semibold text-gray-900 mt-4">{testimonials[index].name}</h4>
          </motion.div>
        </MotionConfig>

        <div className="flex justify-center gap-6 mt-6">
          <button onClick={prevTestimonial} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextTestimonial} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
