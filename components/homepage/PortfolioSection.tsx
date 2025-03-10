import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Chandamama Tech",
    description: "An affiliate marketing website featuring news, ebooks, and electronic gadgets.",
    image: "/projects/chandamama-tech.png",
    link: "https://www.chandamama.tech",
  },
  {
    title: "Maxpo PropTech Dubai",
    description: "A real estate landing page for property investments in Dubai.",
    image: "/projects/proptech-dubai.png",
    link: "https://proptechdubai.maxpo.ae",
  },
];

const clients = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
];

const PortfolioSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center md:text-4xl">Our Work & Clients</h2>
        <p className="text-center text-gray-600 mt-3">Explore our portfolio and the companies we&apos;ve worked with.</p>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <Link href={project.link} className="mt-2 inline-block text-blue-600 hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center">Trusted by Leading Businesses</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {clients.map((logo, index) => (
              <Image key={index} src={logo} alt={`Client ${index + 1}`} width={120} height={60} className="h-16" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
