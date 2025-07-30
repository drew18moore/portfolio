const Footer = () => {
  return (
    <footer className="px-6 py-6 mt-20 grid grid-cols-3 max-w-4xl mx-auto">
      <div className="text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} Drew Moore.</p>
        <p className="text-xs mt-2">Built with Astro and Tailwind CSS</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Quick Links</p>
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:underline">
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <p className="font-bold">Connect with me</p>
        <div className="flex flex-col gap-2">
          <span>drewmoore052@gmail.com</span>
          <span className="flex items-center gap-2">
            <span className="flex items-center rounded-full">
              <img
                src="/icons/github-mark-white.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
            </span>
            <span className="flex items-center rounded-full overflow-hidden">
              <img
                src="/icons/linkedin.svg"
                alt="GitHub"
                className="w-6 h-6 align-middle"
              />
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
