import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.95)] backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Close Button (X) */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col items-center gap-4 text-2xl font-medium">
        <a
          href="#home"
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100  translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100  translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100  translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100  translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
