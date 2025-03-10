import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does website development take?",
    answer: "The timeline depends on the complexity of the project. Typically, a personal or business website takes 1-3 weeks, while e-commerce and custom websites may take 4-8 weeks.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. We offer flexible scaling options to accommodate your business growth.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely! We offer maintenance plans that include bug fixes, updates, and additional feature enhancements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-40 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center md:text-4xl">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mt-3">Find answers to common questions about our services.</p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white p-4 shadow-sm">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
