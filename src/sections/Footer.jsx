
export default function Footer() {
  return (
    
<footer className="w-full   bg-black text-white">
  <div className="mx-auto max-w-6xl px-6 py-10 md:px-12">
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

      {/* Brand */}
      <div className="text-center md:text-left">
        <a href="#home" className="text-xl font-bold text-white">
          Hrushikesh<span className="text-primary">.</span>
        </a>

        <p className="mt-2 text-sm text-gray-300">
          Building ideas into reality through code.
        </p>
      </div>

      {/* Quick links */}
      <nav className="flex flex-wrap justify-center gap-5 text-sm">
        <a href="#home" className="text-gray-300 transition-colors hover:text-white">
          Home
        </a>
        <a href="#about" className="text-gray-300 transition-colors hover:text-white">
          About
        </a>
        <a href="#projects" className="text-gray-300 transition-colors hover:text-white">
          Projects
        </a>
        <a href="#achievements" className="text-gray-300 transition-colors hover:text-white">
          Achievements
        </a>
        <a href="#contact" className="text-gray-300 transition-colors hover:text-white">
          Contact
        </a>
      </nav>

      {/* Social links */}
      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white transition-colors hover:text-primary"
        >
          GitHub ↗
        </a>

        <a
          href="https://leetcode.com/u/0SarAuj3p5/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white transition-colors hover:text-primary"
        >
          LeetCode ↗
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 border-t border-gray-700 pt-6 text-center">
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} Hrushikesh. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
}
