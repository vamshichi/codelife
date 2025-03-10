import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-200 to-gray-500 text-white py-12">
      <div className="container px-4 mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Get Your Website Built by Experts!</h2>
        <p className="mt-3 text-lg text-gray-200">
          Fill out the form or call us today to discuss your project. Let&apos;s bring your vision to life!
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:+91 9886603072"
            className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <Phone className="w-5 h-5" />
            Call/WhatsApp: +91 9886603072
          </a>

          <a
            href="#quote-form"
            className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
