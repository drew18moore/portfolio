type Project = {
  title: string;
  technologies: { name: string; icon: string }[];
  bulletPoints: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
};

const projects: Project[] = [
  {
    title: "Real-Time Chat App",
    technologies: [
      { name: "React", icon: "../../public/icons/react.svg" },
      { name: "TypeScript", icon: "../../public/icons/typescript.svg" },
      { name: "HTML", icon: "../../public/icons/html.svg" },
      { name: "Node.js", icon: "../../public/icons/nodejs.svg" },
      { name: "PostgreSQL", icon: "../../public/icons/postgresql.svg" },
      { name: "Docker", icon: "../../public/icons/docker.svg" },
      { name: "Redis", icon: "../../public/icons/redis.svg" },
      { name: "AWS", icon: "../../public/icons/aws.svg" },
    ],
    bulletPoints: [
      "Real-time messaging platform secured with JWTs",
      "Hosted on AWS EC2 with Nginx reverse proxy",
      "Mobile-first UI with React and Tailwind CSS",
      "Implemented CI/CD pipeline using GitHub Actions",
    ],
    image: "../../public/projects/realtime-chat.png",
    demoLink: "https://chat.drewmoore.dev",
    repoLink: "https://github.com/drew18moore/realtime-chat",
  },
  {
    title: "Jimmy Overdrive",
    technologies: [{ name: "Java", icon: "../../public/icons/java.svg" }],
    bulletPoints: [
      "2D platformer game inspired by Johnny Upgrade with custom art and animations",
      "Custom game loop, physics, UI, and rendering using vanilla Java and Swing",
      "Designed upgrade system and level structure to encourage iterative gameplay",
      "Published to GitHub with clear documentation and runnable release builds",
    ],
    image: "../../public/projects/mern-social.png",
    demoLink: "https://social-network-mern.vercel.app/",
    repoLink: "https://github.com/drew18moore/platformer-java",
  },
  {
    title: "Social Network App",
    technologies: [
      { name: "React", icon: "../../public/icons/react.svg" },
      { name: "TypeScript", icon: "../../public/icons/typescript.svg" },
      { name: "HTML", icon: "../../public/icons/html.svg" },
      { name: "CSS", icon: "../../public/icons/css.svg" },
      { name: "Node.js", icon: "../../public/icons/nodejs.svg" },
      { name: "MongoDB", icon: "../../public/icons/mongodb.svg" },
    ],
    bulletPoints: [
      "Responsive and mobile-first UI built using React",
      "Secured REST API with JWTs using Node.js and Express",
      "Implemented CI pipeline with GitHub Actions to run tests and verify builds on PRs",
      "Achieved 94% backend test coverage using Jest and Supertest",
    ],
    image: "../../public/projects/mern-social.png",
    demoLink: "https://social-network-mern.vercel.app/",
    repoLink: "https://github.com/drew18moore/social-network-MERN",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="flex flex-col max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
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
