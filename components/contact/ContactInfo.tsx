"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>

        <p className="text-lg text-gray-600 mb-2">📍 <strong>Location:</strong> Bangalore, India</p>
        <p className="text-lg text-gray-600 mb-2">📞 <strong>Phone:</strong> +91 9886603072</p>
        <p className="text-lg text-gray-600 mb-6">📧 <strong>Email:</strong> <a href="mailto:hello@codelife.com" className="text-blue-600 hover:underline">hello@codelife.com</a></p>

        {/* Google Map Embed */}
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.9282345765155!2d77.59456201482292!3d12.971598790852314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c576c1d9%3A0x9d5563b7e6f10d7b!2sBangalore!5e0!3m2!1sen!2sin!4v1638866647854!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-blue-700 text-2xl hover:text-blue-900"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
 