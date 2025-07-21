import { useEffect, useRef } from "react";
import "../styles/Skills.css";
const skills = [
  {
    name: "c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    name: "c++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "css",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  },
  {
    name: "html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "mongodb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "nodejs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "react",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "astro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRadius = 250;
  const rotationSpeed = 0.005;

  useEffect(() => {
    const container = containerRef.current;
    let angle = 0;
    let animationFrame: number;

    const animate = () => {
      angle += rotationSpeed;

      const children = Array.from(container!.children) as HTMLDivElement[];

      children.forEach((child, i) => {
        const stepAngle = (2 * Math.PI * i) / skills.length;
        const currentAngle = stepAngle + angle;
        const x = Math.cos(currentAngle) * orbitRadius;
        const z = Math.sin(currentAngle) * orbitRadius;
        child.style.transform = `translateX(${x}px) translateZ(${z}px)`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [skills.length]);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="relative w-[400px] h-[400px] perspective-3d">
        <div className="w-full h-full relative transform-style-3d ">
          <div className="absolute flex justify-center items-center top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full">
            <p className="text-5xl font-bold">Skills</p>
          </div>

          <div
            ref={containerRef}
            className="absolute top-1/2 left-1/2 w-0 h-0 transform-style-3d  -rotate-x-20"
          >
            {skills.map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-full p-3 absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
              >
                <img
                  src={src.icon}
                  alt={`orbit-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
