import React from "react";
import { Github, Mail, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      <div className="flex justify-center mt-16 mb-4">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white text-sm hover:text-pink-400 transition group"
        >
          <ArrowUpCircle className="w-5 h-5 group-hover:animate-float" />
          Back to Top
        </button>
      </div>

      {/* Footer */}
      <footer
        id="contact"
        className="py-6 border-t border-pink-500/20 backdrop-blur-md text-sm text-muted-foreground text-center relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-white/80">
            © {new Date().getFullYear()} DreamDrive — Made by Dhruv
          </p>

          <a
            href="https://github.com/Dhruv-Gupta0506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-pink-400 transition"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvgupta0506@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-cyan-400 transition"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
