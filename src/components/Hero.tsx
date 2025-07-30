const Hero = () => {
  return (
    <section className="text-center flex flex-col gap-4 items-center justify-center h-screen px-4">
      <div className="flex flex-col">
				<h1 className="text-7xl sm:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Drew</h1>
				<h1 className="text-7xl sm:text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Moore</h1>
			</div>
      <p className="text-lg sm:text-xl">Full-stack software engineer</p>
			<span className="flex flex-col sm:flex-row gap-4">
				<button className="border border-white/90 px-4 py-2 rounded-md cursor-pointer">View my resume</button>
				<button className="border border-white/90 px-4 py-2 rounded-md cursor-pointer">Read my blog</button>
			</span>
    </section>
  );
};

export default Hero;
