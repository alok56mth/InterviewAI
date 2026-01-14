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
            <div className="flex items-center justify-center gap-4 mt-3">
              <a href="mailto:alokkumar90667@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors text-xs">
                alokkumar90667@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/alok-kumar-45b763226/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110"
                title="Connect on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
