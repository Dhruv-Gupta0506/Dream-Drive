import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wheelIcon from "@/assets/wheel.jpeg";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Categories", to: "/categories" },
  { name: "Your Dream Garage", to: "/garage" },
  { name: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 backdrop-filter",
        isScrolled
          ? "py-3 shadow-md bg-black/80 backdrop-blur-md"
          : "py-5 bg-black"
      )}
    >
      <div className="container flex items-center justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Logo */}
        <Link to="/" className="font-bold flex items-center space-x-2 ml-6">
          <img
            src={wheelIcon}
            alt="Wheel Logo"
            className={cn(
              "animate-spin-slow transition-all duration-300 rounded-full",
              isScrolled ? "h-10 w-10" : "h-15 w-15"
            )}
          />
          <span
            className={cn(
              "relative z-10 flex space-x-1 items-center transition-all duration-300",
              isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            )}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" style={{ animation: "float 3s ease-in-out infinite" }}>
              Dream
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ animation: "float 3s ease-in-out infinite" }}>
              Drive
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className={cn(
                "bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent font-medium transition-all duration-300",
                isScrolled ? "text-base md:text-lg" : "text-lg md:text-xl",
                "hover:from-pink-400 hover:to-yellow-400 hover:text-transparent hover:shadow-lg",
                item.name === "Contact" ? "mr-4" : ""
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent font-medium text-2xl transition-all duration-300",
                "hover:from-pink-400 hover:to-yellow-400 hover:text-transparent hover:shadow-lg"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
