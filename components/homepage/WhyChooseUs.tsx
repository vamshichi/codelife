import { ShieldCheck, Search, TrendingUp, Headphones, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees, clear cost breakdown for every package.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "SEO-Optimized Websites",
      description: "Better Google rankings for increased traffic and visibility.",
      icon: <Search className="h-6 w-6 text-primary" />,
    },
    {
      title: "Scalable & Future-Proof",
      description: "Websites designed to grow with your business seamlessly.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
    {
      title: "Expert Support & Maintenance",
      description: "Dedicated team for bug fixes, updates, and ongoing support.",
      icon: <Headphones className="h-6 w-6 text-primary" />,
    },
    {
      title: "Custom Features",
      description: "Tailored solutions to fit your unique business requirements.",
      icon: <Wrench className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="w-full  bg-gray-50 py-40">
      <div className="container px-4 mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us?</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          We provide high-quality, scalable, and SEO-friendly websites tailored to your business needs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
