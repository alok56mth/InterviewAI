import { Link } from "react-router-dom";
import InterviewAILogo from "./InterviewAILogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-50/80 via-blue-50/40 to-indigo-50/80 border-t border-slate-200/60 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <InterviewAILogo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-black text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">InterviewAI</span>
          </div>

          <div className="flex gap-10 text-lg text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-all duration-300 font-semibold relative group">
              <span>Home</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <a href="#features" className="hover:text-blue-600 transition-all duration-300 font-semibold relative group">
              <span>Features</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <Link to="/interview-setup" className="hover:text-blue-600 transition-all duration-300 font-semibold relative group">
              <span>Practice</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 font-semibold mb-2">
              ✨ Powered by AI Innovation
            </p>
            <p className="text-sm text-slate-500 font-medium mb-1">
              © 2025 InterviewAI. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Developed by <span className="text-blue-600 font-semibold">Alok Kumar</span> • Bengaluru
            </p>
            <p className="text-xs text-slate-400 mt-1">
              <a href="mailto:alokkumar90667@gmail.com" className="hover:text-blue-600 transition-colors">
                alokkumar90667@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
