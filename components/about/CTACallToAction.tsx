"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CTACallToAction = () => {
  const router = useRouter();

  return (
    <section className="bg-blue-600 text-white py-16 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Want to know more? Let&apos;s connect!</h2>
        <p className="text-lg mb-6">
          We&apos;re here to help you take the next step. Reach out to us today!
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default CTACallToAction;
