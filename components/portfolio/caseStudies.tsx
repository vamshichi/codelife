import React from "react";

const caseStudies = [
  {
    title: "How Codelife helped XYZ scale their business by 3X",
    challenge: "Needed an online presence",
    solution: "Built a mobile-friendly website",
    result: "Increased sales & brand visibility",
  },
  {
    title: "Boosting ABC Agency’s client engagement",
    challenge: "Low website traffic & engagement",
    solution: "Optimized website for SEO & user experience",
    result: "Doubled traffic & lead generation",
  },
  {
    title: "Helping Finance360 automate customer management",
    challenge: "Manual & time-consuming CRM processes",
    solution: "Developed a custom CRM platform",
    result: "Saved 40% of operational time & improved efficiency",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Case Studies / Client Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{caseStudy.title}</h3>
              <p className="text-gray-600 mt-3">
                <strong>🔹 Challenge:</strong> {caseStudy.challenge}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>🔹 Solution:</strong> {caseStudy.solution}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>🔹 Result:</strong> {caseStudy.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
