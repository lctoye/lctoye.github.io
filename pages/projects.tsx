export default function Projects() {
    const projects = [
      {
        title: "Fragments Microservice",
        image: "fragments.png",
        description:
          "Microservice for authenticated users to upload and retrieve diverse file objects.",
        tags: ["AWS", "Docker", "JavaScript", "Express"],
        links: {
          github: "https://github.com/lctoye/fragments",
        },
      },
      {
        title: "StudyHome",
        image: "studyhome.png",
        description:
          "Unified notetaking and assessment tracking platform for students, featuring AI-powered automatic parsing of course materials.",
        tags: ["Next.js", "React", "SQL", "Auth", "Express", "AI"],
        links: {
          github: "https://github.com/marcusgeorgievski/studyhome",
          liveDemo: "https://prj-frontend.vercel.app",
        },
      },
      {
        title: "GestureRunner",
        image: "gesturerunner.png",
        description:
          "Hand gesture-controlled endless runner game in Python, leveraging Pygame & OpenCV.",
        tags: ["Python", "Game Dev", "OpenCV", "Pygame"],
        links: {
          github: "https://github.com/lctoye/gestureRunner",
        },
      },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-pink text-4xl font-bold mb-8 text-center">Projects</h1>
        <p className="text-center text-lg mb-12">
          Here are some of the projects I&apos;ve worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-300 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition">
            Show more
          </button>
        </div> */}
      </div>
    );
  }
  