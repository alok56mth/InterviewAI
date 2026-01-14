import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Brain, ArrowRight, FileText, Wrench, Clock, Settings2, Sparkles, Target, Zap, ListChecks, Timer } from "lucide-react";
import Navbar from "@/components/Navbar";

// Professional SVG Icons for each role
const FrontendIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="frontendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#61DAFB" />
        <stop offset="100%" stopColor="#00D4FF" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="4" fill="url(#frontendGrad)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="url(#frontendGrad)" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="url(#frontendGrad)" strokeWidth="2" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="url(#frontendGrad)" strokeWidth="2" transform="rotate(120 24 24)" />
  </svg>
);

const BackendIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="backendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#68A063" />
        <stop offset="100%" stopColor="#3C873A" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="32" height="8" rx="2" fill="url(#backendGrad)" opacity="0.9" />
    <rect x="8" y="20" width="32" height="8" rx="2" fill="url(#backendGrad)" opacity="0.7" />
    <rect x="8" y="32" width="32" height="8" rx="2" fill="url(#backendGrad)" opacity="0.5" />
    <circle cx="14" cy="12" r="2" fill="white" />
    <circle cx="14" cy="24" r="2" fill="white" />
    <circle cx="14" cy="36" r="2" fill="white" />
  </svg>
);

const FullStackIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="fullstackGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667EEA" />
        <stop offset="100%" stopColor="#764BA2" />
      </linearGradient>
      <linearGradient id="fullstackGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F093FB" />
        <stop offset="100%" stopColor="#F5576C" />
      </linearGradient>
    </defs>
    <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" fill="none" stroke="url(#fullstackGrad1)" strokeWidth="2" />
    <path d="M24 4V44" stroke="url(#fullstackGrad1)" strokeWidth="2" />
    <path d="M6 14L42 34" stroke="url(#fullstackGrad2)" strokeWidth="2" opacity="0.6" />
    <path d="M42 14L6 34" stroke="url(#fullstackGrad2)" strokeWidth="2" opacity="0.6" />
    <circle cx="24" cy="24" r="6" fill="url(#fullstackGrad1)" />
  </svg>
);

const DevOpsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2496ED" />
        <stop offset="100%" stopColor="#0DB7ED" />
      </linearGradient>
    </defs>
    <path d="M44 24c0-2.5-1.5-4.5-3.6-5.4 0.4-0.8 0.6-1.7 0.6-2.6 0-3.3-2.7-6-6-6-0.9 0-1.8 0.2-2.6 0.6C31.5 8 29 6 26 6c-3.5 0-6.4 2.6-6.9 6-0.4-0.1-0.7-0.1-1.1-0.1-3.3 0-6 2.7-6 6 0 0.9 0.2 1.7 0.5 2.5C10 21 8 23.5 8 26.5c0 3.6 2.9 6.5 6.5 6.5h23c3.6 0 6.5-2.9 6.5-6.5V24z" fill="url(#devopsGrad)" />
    <rect x="12" y="36" width="6" height="8" rx="1" fill="url(#devopsGrad)" />
    <rect x="21" y="36" width="6" height="8" rx="1" fill="url(#devopsGrad)" />
    <rect x="30" y="36" width="6" height="8" rx="1" fill="url(#devopsGrad)" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="uiuxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7262" />
        <stop offset="33%" stopColor="#A259FF" />
        <stop offset="66%" stopColor="#1ABCFE" />
        <stop offset="100%" stopColor="#0ACF83" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="14" height="14" rx="7" fill="#FF7262" />
    <rect x="26" y="8" width="14" height="14" rx="7" fill="#A259FF" />
    <rect x="8" y="26" width="14" height="14" rx="7" fill="#1ABCFE" />
    <rect x="26" y="26" width="14" height="14" rx="2" fill="#0ACF83" />
  </svg>
);

const DataScienceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="50%" stopColor="#FFE66D" />
        <stop offset="100%" stopColor="#4ECDC4" />
      </linearGradient>
    </defs>
    <rect x="6" y="28" width="8" height="16" rx="2" fill="#4ECDC4" />
    <rect x="16" y="20" width="8" height="24" rx="2" fill="#FFE66D" />
    <rect x="26" y="12" width="8" height="32" rx="2" fill="#FF6B6B" />
    <rect x="36" y="4" width="8" height="40" rx="2" fill="#A66CFF" />
    <path d="M10 26L20 18L30 10L40 2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="10" cy="26" r="3" fill="white" />
    <circle cx="20" cy="18" r="3" fill="white" />
    <circle cx="30" cy="10" r="3" fill="white" />
    <circle cx="40" cy="2" r="3" fill="white" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <path d="M24 4L8 10V22C8 32.5 14.8 42 24 44C33.2 42 40 32.5 40 22V10L24 4Z" fill="url(#securityGrad)" />
    <path d="M20 24L23 27L28 20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
  </svg>
);

const roles = [
  { value: "frontend-developer", label: "Frontend Developer", icon: FrontendIcon, color: "from-cyan-500 to-blue-500", bgColor: "from-cyan-50 to-blue-50" },
  { value: "backend-developer", label: "Backend Developer", icon: BackendIcon, color: "from-green-500 to-emerald-600", bgColor: "from-green-50 to-emerald-50" },
  { value: "fullstack-developer", label: "Full Stack Developer", icon: FullStackIcon, color: "from-violet-500 to-purple-600", bgColor: "from-violet-50 to-purple-50" },
  { value: "devops-engineer", label: "DevOps Engineer", icon: DevOpsIcon, color: "from-blue-500 to-sky-600", bgColor: "from-blue-50 to-sky-50" },
  { value: "ui-ux-designer", label: "UI/UX Designer", icon: UIUXIcon, color: "from-pink-500 to-rose-600", bgColor: "from-pink-50 to-rose-50" },
  { value: "data-scientist", label: "Data Scientist", icon: DataScienceIcon, color: "from-amber-500 to-orange-600", bgColor: "from-amber-50 to-orange-50" },
  { value: "security-engineer", label: "Security Engineer", icon: SecurityIcon, color: "from-emerald-500 to-teal-600", bgColor: "from-emerald-50 to-teal-50" },
];

const experienceLevels = [
  { value: "fresher", label: "Fresher (0-1 years)", icon: "🌱" },
  { value: "junior", label: "Junior (1-3 years)", icon: "🚀" },
  { value: "mid", label: "Mid-Level (3-5 years)", icon: "⭐" },
  { value: "senior", label: "Senior (5-8 years)", icon: "🏆" },
  { value: "lead", label: "Lead/Principal (8+ years)", icon: "👑" },
];

// Technology suggestions for each role
const roleTechSuggestions: Record<string, string[]> = {
  "frontend-developer": ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js", "Vue.js", "Angular", "Redux", "Tailwind CSS"],
  "backend-developer": ["Node.js", "Express.js", "Python", "Django", "FastAPI", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Redis"],
  "fullstack-developer": ["React", "Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js", "PostgreSQL", "REST API", "Docker", "AWS"],
  "devops-engineer": ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Linux", "CI/CD", "Ansible", "Prometheus", "Grafana"],
  "ui-ux-designer": ["Figma", "UI Design", "UX Research", "Prototyping", "Wireframing", "User Testing", "Design Systems", "Adobe XD", "Sketch", "Interaction Design"],
  "data-scientist": ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Pandas", "NumPy", "SQL", "Statistics", "Deep Learning", "Scikit-learn"],
  "security-engineer": ["Network Security", "Penetration Testing", "OWASP", "Cryptography", "Firewall", "Cloud Security", "Incident Response", "SIEM", "Vulnerability Assessment", "Compliance"],
};


const InterviewSetup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [questionCount, setQuestionCount] = useState([5]);
  const [interviewMode, setInterviewMode] = useState("questions");
  const [timerDuration, setTimerDuration] = useState("10");
  const [jobDescription, setJobDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  const handleStartInterview = () => {
    if (selectedRole && experienceLevel) {
      const params = new URLSearchParams({
        role: selectedRole,
        experience: experienceLevel,
        questions: interviewMode === "questions" ? questionCount[0].toString() : "999",
        mode: interviewMode,
        timer: timerDuration,
      });
      
      if (jobDescription.trim()) {
        sessionStorage.setItem('interviewJD', jobDescription.trim());
      }
      if (technologies.trim()) {
        sessionStorage.setItem('interviewTech', technologies.trim());
      }
      
      navigate(`/interview?${params.toString()}`);
    }
  };

  const selectedRoleData = roles.find(r => r.value === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 pt-28 pb-16 relative">
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-200/50 mb-8">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">AI-Powered Interview Practice</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              <span className="text-slate-800">Configure Your </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Interview Session</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Customize your practice session with role-specific questions tailored to your experience level
            </p>
          </div>

          {/* Main Configuration Card */}
          <Card className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 rounded-3xl overflow-hidden">
            <CardHeader className="relative z-10 pb-6 pt-8 px-10 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                    <Settings2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-800">Interview Configuration</CardTitle>
                    <CardDescription className="text-slate-500 text-base mt-0.5">
                      Customize your interview settings below
                    </CardDescription>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>Ready to configure</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 relative z-10 px-10 py-8">
              {/* Role Selection */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Select Your Role</Label>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {roles.map((role) => {
                    const IconComponent = role.icon;
                    return (
                      <button
                        key={role.value}
                        onClick={() => setSelectedRole(role.value)}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-center overflow-hidden ${
                          selectedRole === role.value
                            ? `border-indigo-400 bg-gradient-to-br ${role.bgColor} shadow-lg`
                            : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md hover:bg-slate-50/50"
                        }`}
                      >
                        {/* Selection Indicator */}
                        {selectedRole === role.value && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        )}
                        
                        {/* Icon Container */}
                        <div className={`w-16 h-16 rounded-xl mx-auto mb-3 p-2.5 transition-all duration-300 ${
                          selectedRole === role.value 
                            ? 'bg-white shadow-md' 
                            : 'bg-slate-100 group-hover:bg-white group-hover:shadow-sm'
                        }`}>
                          <IconComponent />
                        </div>
                        
                        {/* Role Label */}
                        <p className={`font-semibold text-sm transition-colors duration-300 ${
                          selectedRole === role.value 
                            ? 'text-indigo-700' 
                            : 'text-slate-700 group-hover:text-indigo-600'
                        }`}>
                          {role.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Technologies & Experience Level - Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Technologies - Now First */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                      <Wrench className="w-3.5 h-3.5 text-white" />
                    </div>
                    <Label className="text-base font-semibold text-slate-800">Technologies / Skills</Label>
                  </div>
                  <Input
                    placeholder="React, Node.js, TypeScript, MongoDB, AWS..."
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    className="h-14 bg-white border-2 border-slate-200 hover:border-pink-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 px-4"
                  />
                  
                  {/* Show suggestions when role is selected */}
                  {selectedRole && roleTechSuggestions[selectedRole] && (
                    <div className="p-3 bg-gradient-to-r from-pink-50/80 to-rose-50/80 rounded-xl border border-pink-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">💡</span>
                        <span className="text-xs font-medium text-pink-600">Suggested technologies for {roles.find(r => r.value === selectedRole)?.label}:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {roleTechSuggestions[selectedRole].map((tech) => {
                          const isSelected = technologies.toLowerCase().includes(tech.toLowerCase());
                          return (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => {
                                if (!isSelected) {
                                  setTechnologies(prev => prev ? `${prev}, ${tech}` : tech);
                                }
                              }}
                              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                                isSelected
                                  ? 'bg-pink-500 text-white cursor-default'
                                  : 'bg-white hover:bg-pink-500 hover:text-white text-pink-600 border border-pink-200 hover:border-pink-500 hover:shadow-sm cursor-pointer'
                              }`}
                            >
                              {isSelected ? `✓ ${tech}` : `+ ${tech}`}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {!selectedRole && (
                    <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                      <span className="text-lg">👆</span>
                      <span className="text-sm text-slate-500">Select a role above to see suggested technologies</span>
                    </div>
                  )}
                </div>

                {/* Experience Level - Now Second */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <Label className="text-base font-semibold text-slate-800">Experience Level</Label>
                  </div>
                  <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                    <SelectTrigger className="h-14 bg-white border-2 border-slate-200 hover:border-indigo-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-4">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-2 border-slate-200 shadow-xl p-1.5 bg-white">
                      {experienceLevels.map((level) => (
                        <SelectItem 
                          key={level.value} 
                          value={level.value} 
                          className="rounded-lg hover:bg-indigo-50 py-2.5 px-3 cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="text-lg">{level.icon}</span>
                            <span className="font-medium">{level.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Job Description - Full Width */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  <Label className="text-base font-semibold text-slate-800">Job Description</Label>
                  <span className="text-xs text-slate-400 font-normal bg-slate-100 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <Textarea
                  placeholder="Paste the job description here for more targeted interview questions..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[120px] bg-white border-2 border-slate-200 hover:border-emerald-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 resize-none p-4"
                />
              </div>

              {/* Interview Mode & Duration */}
              <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <Brain className="w-3.5 h-3.5 text-white" />
                  </div>
                  <Label className="text-base font-semibold text-slate-800">Interview Mode</Label>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => setInterviewMode("questions")}
                    className={`group flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                      interviewMode === "questions"
                        ? "border-indigo-400 bg-indigo-50"
                        : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      interviewMode === "questions" 
                        ? 'bg-indigo-600 shadow-md' 
                        : 'bg-slate-100 group-hover:bg-indigo-100'
                    }`}>
                      <ListChecks className={`w-6 h-6 ${interviewMode === "questions" ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-left">
                      <p className={`font-semibold ${interviewMode === "questions" ? 'text-indigo-700' : 'text-slate-700'}`}>Question Count</p>
                      <p className="text-xs text-slate-500">Set number of questions</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setInterviewMode("timer")}
                    className={`group flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                      interviewMode === "timer"
                        ? "border-indigo-400 bg-indigo-50"
                        : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      interviewMode === "timer" 
                        ? 'bg-indigo-600 shadow-md' 
                        : 'bg-slate-100 group-hover:bg-indigo-100'
                    }`}>
                      <Timer className={`w-6 h-6 ${interviewMode === "timer" ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-left">
                      <p className={`font-semibold ${interviewMode === "timer" ? 'text-indigo-700' : 'text-slate-700'}`}>Time Based</p>
                      <p className="text-xs text-slate-500">Set interview duration</p>
                    </div>
                  </button>
                </div>

                {/* Question Count or Timer Duration */}
                {interviewMode === "questions" ? (
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-slate-600">Number of Questions</span>
                      <span className="text-3xl font-bold text-indigo-600">{questionCount[0]}</span>
                    </div>
                    <Slider
                      value={questionCount}
                      onValueChange={setQuestionCount}
                      min={3}
                      max={10}
                      step={1}
                      className="py-2"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Quick (3)</span>
                      <span>Standard (5-7)</span>
                      <span>Comprehensive (10)</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <span className="text-sm font-medium text-slate-600 mb-3 block">Interview Duration</span>
                    <Select value={timerDuration} onValueChange={setTimerDuration}>
                      <SelectTrigger className="h-12 bg-slate-50 border border-slate-200 rounded-lg">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg">
                        <SelectItem value="5">⚡ 5 Minutes (Quick)</SelectItem>
                        <SelectItem value="10">⏱️ 10 Minutes (Standard)</SelectItem>
                        <SelectItem value="15">📊 15 Minutes (Extended)</SelectItem>
                        <SelectItem value="30">🎯 30 Minutes (Comprehensive)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Start Interview Button */}
              <div className="pt-4">
                <Button
                  className="w-full h-16 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                  disabled={!selectedRole || !experienceLevel}
                  onClick={handleStartInterview}
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    <span>Start Interview</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Button>
                
                {(!selectedRole || !experienceLevel) && (
                  <p className="text-center text-xs text-slate-400 mt-3">
                    Select a role and experience level to continue
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InterviewSetup;
