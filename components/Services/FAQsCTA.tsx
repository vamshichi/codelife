import React from "react";

const FAQsCTA = () => {
  const faqs = [
    {
      question: "How long does website development take?",
      answer: "It depends on the project scope. A basic website takes 1-2 weeks, while custom solutions may take longer."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes! You can scale your website with additional features or migrate to a bigger plan anytime."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely! We offer maintenance packages for updates, bug fixes, and improvements."
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-blue-600 text-white py-6 px-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Need help deciding? Get a free consultation!</h3>
          <p className="mt-2 text-lg">Let’s discuss your project and find the best solution for you.</p>
          <a href="/contact" className="mt-4 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQsCTA;
