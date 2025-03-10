const teamMembers = [
    {
      name: "Vamshi CH",
      role: "Founder & CEO",
      image: "/images/team/vamshi.jpg", // Replace with actual image path
      bio: "Passionate about technology and innovation. Leading the team towards excellence.",
    },
    {
      name: "K Mohan Rao",
      role: "Co-Founder & CTO",
      image: "/images/team/mohan.jpg",
      bio: "Expert in web development and system architecture. Drives technical strategy.",
    },
    {
      name: "Jagdish",
      role: "Co-Founder & Marketing Head",
      image: "/images/team/jagdish.jpg",
      bio: "Focused on growth strategies and brand positioning.",
    },
    {
      name: "Chaithra",
      role: "Digital Marketing Specialist",
      image: "/images/team/chaithra.jpg",
      bio: "SEO & content marketing expert helping businesses scale online.",
    },
  ];
  
  const MeetTheTeam = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Our team of passionate professionals is dedicated to delivering exceptional digital solutions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MeetTheTeam;
  