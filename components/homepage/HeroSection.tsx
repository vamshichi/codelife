export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-100 py-40 px-6 ">
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
        Build Your Dream Website
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Get transparent pricing & scalable solutions for your business.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/contact"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Quote
        </a>
        {/* <a
          href="/pricing"
          className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          View Pricing
        </a> */}
      </div>
    </section>
  );
}
