const Navbar = () => {
  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 border border-white/90 rounded-full z-1 p-0.5 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
      <nav className="">
        <ul className="flex gap-4">
          <li className="flex bg-gradient-to-r from-blue-500 to-cyan-400 text-black/90 rounded-full">
            <a href="#home" className="cursor-pointer px-4 py-2">Home</a>
          </li>
          <li className="flex rounded-full">
            <a href="#projects" className="cursor-pointer px-4 py-2">Projects</a>
          </li>
          <li className="flex rounded-full">
            <a href="#blog" className="cursor-pointer px-4 py-2">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

