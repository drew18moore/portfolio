import projects from "../data/projects.json";

type Project = {
  title: string;
  technologies: { name: string; icon: string }[];
  bulletPoints: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
};

const FeaturedProjects = () => {
  return (
    <section className="flex flex-col max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-4 border border-white/90 p-4 rounded-md bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-md aspect-video object-cover"
            />
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, j) => (
                <span key={j} className="flex items-center gap-2 border border-white/90 rounded-full px-2 py-1 bg-gray-900">
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                  <span className="text-xs">{tech.name}</span>
                </span>
              ))}
            </div>
            <ul className="">
              {project.bulletPoints.map((point, j) => (
                <li key={j} className="text-sm list-disc ml-4">
                  {point}
                </li>
              ))}
            </ul>
            <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md py-2 mt-auto">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
