export default function Experience() {
    const experiences = [
      {
        company: "Westech Luminaries",
        role: "Project Specialist",
        duration: "2015 - 2019",
        description:
          "Managed LED lighting conversion projects for apartments and condominiums, working closely with clients throughout the entire process from proposal to installation.",
      },
      {
        company: "Pat's Home Hardware",
        role: "Retail Sales Associate",
        duration: "2007 - 2019",
        description:
          "Implemented responsive designs using HTML, CSS, and JavaScript. Collaborated with designers and backend developers to improve the user experience.",
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-pink text-4xl font-bold mb-8 text-center">Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-blue text-2xl font-semibold">{exp.role}</h2>
              <h3 className="text-xl text-gray-300">{exp.company}</h3>
              <p className="text-gray-500 italic">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  