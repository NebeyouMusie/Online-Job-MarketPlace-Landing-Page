import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Demos", active: true },
    { href: "#jobs", label: "Find Jobs" },
    { href: "#companies", label: "Companies" },
    { href: "#candidates", label: "Candidates" },
    { href: "#blog", label: "Blog" },
    { href: "#pages", label: "Pages" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-secondary">
            Jobster
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${link.active ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary">Sign In</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block py-2 nav-link ${link.active ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;