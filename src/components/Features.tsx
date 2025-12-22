import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, BarChart3, Clock, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Questions",
    description: "Gemini AI generates role-specific questions tailored to your experience level and target position.",
  },
  {
    icon: Target,
    title: "Personalized Practice",
    description: "Select your role, experience level, and question count for a customized interview experience.",
  },
  {
    icon: BarChart3,
    title: "Instant Feedback",
    description: "Get detailed scoring and actionable improvement suggestions after each answer.",
  },
  {
    icon: Clock,
    title: "Real-Time Analysis",
    description: "Receive immediate evaluation of your responses with AI-driven insights.",
  },
  {
    icon: Shield,
    title: "Comprehensive Reports",
    description: "Track your progress with detailed performance reports and hiring recommendations.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "No waiting. Start practicing immediately and get results in seconds.",
  },
];

const MarqueImg = ({ img }: { img: string }) => {
  return (
    <div className="group relative flex items-center justify-center p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 min-w-[160px] flex-shrink-0">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <img
        src={img}
        alt="Technology Logo"
        className="relative h-16 w-auto max-w-[120px] opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 filter group-hover:drop-shadow-md object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="w-24 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">${img.split('/').pop()?.split('.')[0]?.toUpperCase() || 'LOGO'}</div>`;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/20 group-hover:to-indigo-50/20 rounded-2xl transition-all duration-500"></div>
    </div>
  );
};

const Features = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/interview-setup");
  };

  return (
    <>
      {/* Professional Feature Cards Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-lg">🚀</span>
              <span className="text-sm font-semibold text-blue-700">Powerful Features</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              <span className="block mb-2">Powerful Features</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">for Interview Success</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to ace your next interview with <span className="font-semibold text-blue-600">AI-powered preparation</span>
            </p>
          </div>

          {/* Attractive Professional Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/60 border-2 border-blue-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                {/* Subtle Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                      <feature.icon className="w-7 h-7 text-white relative z-10" />
                    </div>
                    {/* Decorative Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Typography */}
                  <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                  
                  {/* Progress Line */}
                  <div className="mt-5 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                </CardContent>
                
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-purple-50/0 group-hover:from-blue-50/70 group-hover:via-indigo-50/50 group-hover:to-purple-50/40 transition-all duration-500 pointer-events-none rounded-2xl"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </Card>
            ))}
          </div>
          
          {/* Simple CTA Section */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Moved above Trusted Integrations */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              ✨ Unleash your potential with personalized AI insights
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Transform the way you prepare, gain confidence, and boost your chances of landing your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="relative lg:col-span-2">
              <img
                src="/assets/img/office.jpg"
                alt="Modern Office Environment"
                className="w-full h-96 rounded-2xl object-cover shadow-xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="space-y-8 lg:col-span-1">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">AI-Powered Preparation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Get personalized interview questions and feedback tailored to your specific role and experience level.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <ArrowRight className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Instant Results</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">Receive immediate scoring and actionable improvement suggestions after each practice session.</p>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Integrations Section with Better Design */}
      <div className="hidden bg-gradient-to-br from-slate-50/95 via-blue-50/80 to-indigo-50/95 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.08)_50%,transparent_75%)] bg-[length:80px_80px] animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/20 via-indigo-300/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-300/20 via-pink-300/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-4xl animate-bounce">🔗</span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">Trusted Integrations</h3>
            </div>
            <div className="w-40 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full shadow-2xl animate-gradient mb-6"></div>
            <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto leading-relaxed">Powered by industry-leading technologies for seamless performance</p>
          </div>
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              <MarqueImg img="/assets/img/logo/firebase.png" />
              <MarqueImg img="/assets/img/logo/meet.png" />
              <MarqueImg img="/assets/img/logo/zoom.png" />
              <MarqueImg img="/assets/img/logo/microsoft.png" />
              <MarqueImg img="/assets/img/logo/tailwindcss.png" />
              <MarqueImg img="/assets/img/logo/react.png" />
              {/* Duplicate for seamless loop */}
              <MarqueImg img="/assets/img/logo/firebase.png" />
              <MarqueImg img="/assets/img/logo/meet.png" />
              <MarqueImg img="/assets/img/logo/zoom.png" />
              <MarqueImg img="/assets/img/logo/microsoft.png" />
              <MarqueImg img="/assets/img/logo/tailwindcss.png" />
              <MarqueImg img="/assets/img/logo/react.png" />
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-slate-600">
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="font-semibold">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="font-semibold">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="hidden py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_50%)] bg-mesh"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-10 relative">
              <span className="text-slate-800 block mb-4">Everything You Need to</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] text-shadow-glow transform hover:scale-105 transition-transform duration-500"> ✨ Succeed ✨</span>
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-indigo-600/15 blur-3xl -z-10 rounded-3xl opacity-70 animate-scale-pulse"></div>
            </h2>
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">AI-powered platform</span> provides comprehensive interview preparation tools designed for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">modern professionals</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-white/95 to-blue-50/60 backdrop-blur-xl border border-white/70 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-5 hover:scale-105 rounded-3xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <CardContent className="p-10 relative">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border-3 border-white shadow-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 animate-bounce-subtle">
                    <feature.icon className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-5 text-slate-800 group-hover:text-blue-700 transition-colors duration-500">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-500 font-medium">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-indigo-50/50 transition-all duration-700 pointer-events-none rounded-3xl"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Features;
