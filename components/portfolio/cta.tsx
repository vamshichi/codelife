import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want to be our next success story?
        </h2>
        <p className="text-lg mb-6">
          Let's collaborate and bring your vision to life with expert web solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Let's Work Together!
        </a>
      </div>
    </section>
  );
};

export default CTA;
