import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75" />
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative pb-1
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all
                ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 after:w-0 hover:after:w-full hover:text-gray-900"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <a
          href="#newsletter"
          className="hidden md:inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-md
          hover:bg-blue-700 text-sm font-medium transition"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center w-10 h-10 text-gray-700"
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (absolute, NOT flex) */}
      {/* Mobile menu */}
    {isMenuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-sm">
    <div className="flex flex-col py-4 gap-3">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={() => {
            setActiveLink(link.href);
            setIsMenuOpen(false);
          }}
          className={`text-sm font-medium relative pb-1 px-4
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all
            ${
              activeLink === link.href
                ? "text-blue-600 after:w-1/4"
                : "text-gray-600 after:w-0 hover:after:w-1/4 hover:text-gray-900"
            }`}
        >
          {link.label}
        </a>
      ))}

      {/* Mobile CTA button */}
      <a
        href="#newsletter"
        onClick={() => setIsMenuOpen(false)}
        className="mt-4 w-full text-center bg-blue-600 text-white px-4 py-2 m-4 rounded-md
          hover:bg-blue-700 text-sm font-medium transition"
      >
        Get in touch
      </a>
    </div>
  </div>
)}


    </nav>
  );
};

export default NavBar;
