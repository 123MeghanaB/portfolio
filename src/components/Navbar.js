import React from "react";

export default function Navbar() {
  return (
    <header className="fixed w-full z-40 bg-white/70 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">Meghana B</a>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
