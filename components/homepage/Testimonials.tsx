import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    company: "XYZ Company",
    feedback:
      "Our business grew 3x after launching our website with [Your Company]. The team is professional, and the results speak for themselves!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Williams",
    company: "ABC Solutions",
    feedback:
      "The website exceeded our expectations! It’s fast, user-friendly, and SEO-optimized. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Brown",
    company: "Ecom Trends",
    feedback:
      "Thanks to the team, our e-commerce store saw a 200% increase in conversions. Amazing work!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-40 bg-gray-50">
      <div className="container px-4 mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Hear from businesses that trusted us with their website development.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground italic">
                <Quote className="inline-block w-5 h-5 text-primary mr-1" />
                {testimonial.feedback}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
