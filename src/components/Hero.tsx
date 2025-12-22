import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/interview-setup");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 via-indigo-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-300/25 via-pink-300/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-start pt-32">
        <div className="grid lg:grid-cols-2 gap-20 items-start w-full">
          {/* Left Side - Main Content */}
          <div className="space-y-8 text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200/60 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="text-sm font-semibold text-slate-700">
                🚀 AI-Powered Revolution
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="text-slate-900 whitespace-nowrap">
                  AI Superpower
                </span>
                
                <span className="block text-3xl md:text-4xl text-slate-800 font-bold mt-4 leading-tight">
                  A <span className="text-blue-700">better way</span> to improve your
                </span>
                <span className="block text-3xl md:text-4xl text-slate-800 font-bold">
                  interview chances and skills
                </span>
              </h1>

              <div className="space-y-4 mt-6">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  🎯 <span className="text-slate-700 font-semibold">Boost your interview skills</span> and increase your success rate with <span className="text-blue-600 font-semibold">AI-driven insights</span>.
                </p>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                  Discover a smarter way to prepare, practice, and <span className="text-emerald-600 font-semibold">stand out from the crowd</span>.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="space-y-3 mt-24">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 text-xl border border-white/20"
                >
                  <span className="flex items-center gap-4">
                    <span className="group-hover:animate-bounce">🚀</span>
                    Start Practicing Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
              <p className="text-base text-slate-500 font-semibold">
                <span className="text-yellow-500 text-lg">✨</span> No signup required • Start in 30 seconds
              </p>
            </div>
          </div>

          {/* Right Side - Large Image and Cards */}
          <div className="flex flex-col items-center space-y-8 pt-16">
            <div className="relative group w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/15 via-indigo-400/15 to-purple-400/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-md rounded-3xl p-6 border-2 border-blue-300/60 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="/assets/images/Home_right.png"
                  alt="AI Interview Assistant"
                  className="w-full h-auto object-contain hover:scale-[0.95] transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="flex gap-6 justify-center w-full">
              <div className="group relative bg-gradient-to-br from-white/98 to-blue-50/95 backdrop-blur-lg rounded-2xl p-5 border-2 border-blue-300/70 shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex-1 max-w-xs">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    ⚡ Ready
                  </div>
                  <div className="text-base text-slate-700 font-bold">AI Powered & Live</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-white/98 to-indigo-50/95 backdrop-blur-lg rounded-2xl p-5 border-2 border-indigo-300/70 shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex-1 max-w-xs">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    ∞ Smart
                  </div>
                  <div className="text-base text-slate-700 font-bold">Unlimited Practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Photo Section */}
      <div className="w-full py-12 relative z-10">
        <div className="max-w-screen-2xl mx-auto relative">
          {/* Photo Frame */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl border-8 border-white bg-white p-2 hover:shadow-3xl transition-shadow duration-300">
            <img
              src="/assets/img/hero.jpg"
              alt="Interview Portal Interface"
              className="w-full h-[26rem] object-cover rounded-lg hover:scale-110 transition-transform duration-500 cursor-pointer"
            />
          </div>
          
          {/* Overlay Card */}
          <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Interview Coach</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-300 font-medium">Active</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-200 mb-4 font-medium">
              🎯 Ready to transform your interview performance? Our cutting-edge AI coach provides personalized feedback and practice scenarios tailored just for you.
            </p>
            
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Practicing
            </Button>
          </div>
        </div>
      </div>

      {/* Trusted Integrations Marquee Section */}
      <div className="bg-gradient-to-br from-slate-50/95 via-blue-50/80 to-indigo-50/95 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Trusted Integrations</h3>
            </div>
            <p className="text-lg text-slate-600 font-semibold max-w-2xl mx-auto leading-relaxed">Powered by industry-leading technologies for seamless performance</p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/firebase.png" alt="Firebase" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/meet.png" alt="Google Meet" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/zoom.png" alt="Zoom" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/microsoft.png" alt="Microsoft" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/tailwindcss.png" alt="Tailwind CSS" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/react.png" alt="React" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/firebase.png" alt="Firebase" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/meet.png" alt="Google Meet" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-center p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg min-w-[140px] flex-shrink-0">
                <img src="/assets/img/logo/zoom.png" alt="Zoom" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-600">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="font-semibold text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="font-semibold text-sm">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default Hero;