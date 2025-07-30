import { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";

const skills = [
  "/icons/aws.svg",
  "/icons/css.svg",
  "/icons/docker.svg",
  "/icons/git.svg",
  "/icons/github.svg",
  "/icons/html.svg",
  "/icons/java.svg",
  "/icons/javascript.svg",
  "/icons/mongodb.svg",
  "/icons/nodejs.svg",
  "/icons/postgresql.svg",
  "/icons/react.svg",
  "/icons/redis.svg",
  "/icons/spring-boot.svg",
  "/icons/typescript.svg",
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbitRadius, setOrbitRadius] = useState(250);
  const rotationSpeed = 0.005;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 40rem)");

    const handleChange = () => {
      console.log("object");
      console.log(mediaQuery.matches);
      setOrbitRadius(mediaQuery.matches ? 250 : 170);
    };

    // Set initial radius
    handleChange();

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

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
  }, [orbitRadius, skills.length]);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="relative w-[400px] h-[400px] perspective-3d">
        <div className="w-full h-full relative transform-style-3d ">
          <div className="absolute flex justify-center items-center top-1/2 left-1/2 w-30 h-30 sm:w-40 sm:h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full">
            <p className="text-3xl sm:text-5xl font-bold">Skills</p>
          </div>

          <div
            ref={containerRef}
            className="absolute top-1/2 left-1/2 w-0 h-0 transform-style-3d  -rotate-x-20"
          >
            {skills.map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-full p-3 absolute w-14 h-14 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2 hover:w-16 sm:hover:w-24 hover:h-16 sm:hover:h-24 transition-[width,height] duration-300"
              >
                <img
                  src={src}
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
