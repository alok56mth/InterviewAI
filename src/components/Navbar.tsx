import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import InterviewAILogo from "./InterviewAILogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <button onClick={handleHomeClick} className="flex items-center gap-4 group">
            <InterviewAILogo className="w-14 h-14 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-black text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">InterviewAI</span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={handleHomeClick} className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group">
              <span>Home</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <a href="/#features" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group">
              <span>Features</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <SignedIn>
              <Link to="/interview-setup" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group">
                <span>Practice</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group">
                <span>Dashboard</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </SignedIn>
            <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg relative group">
              <span>Contact</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="font-semibold">
                  Sign In
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-60 animate-pulse"></div>
                  <Button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-3 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 text-lg animate-gradient bg-[length:200%_200%] border border-white/20">
                    🚀 Get Started
                  </Button>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50">
            <div className="flex flex-col gap-4">
              <button onClick={handleHomeClick} className="text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium text-left">
                Home
              </button>
              <a href="/#features" className="text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium">
                Features
              </a>
              <SignedIn>
                <Link to="/interview-setup" className="text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium">
                  Practice
                </Link>
                <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium">
                  Dashboard
                </Link>
              </SignedIn>
              <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors py-2 font-medium">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/50">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-xl w-full">
                      🚀 Get Started
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center pt-2">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
