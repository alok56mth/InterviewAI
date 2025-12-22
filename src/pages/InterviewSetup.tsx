import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Brain, ArrowRight, Code, Database, Cloud, Palette, BarChart, Shield, FileText, Wrench, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const roles = [
  { value: "frontend-developer", label: "Frontend Developer", icon: Code },
  { value: "backend-developer", label: "Backend Developer", icon: Database },
  { value: "fullstack-developer", label: "Full Stack Developer", icon: Code },
  { value: "devops-engineer", label: "DevOps Engineer", icon: Cloud },
  { value: "ui-ux-designer", label: "UI/UX Designer", icon: Palette },
  { value: "data-scientist", label: "Data Scientist", icon: BarChart },
  { value: "security-engineer", label: "Security Engineer", icon: Shield },
];

const experienceLevels = [
  { value: "fresher", label: "Fresher (0-1 years)" },
  { value: "junior", label: "Junior (1-3 years)" },
  { value: "mid", label: "Mid-Level (3-5 years)" },
  { value: "senior", label: "Senior (5-8 years)" },
  { value: "lead", label: "Lead/Principal (8+ years)" },
];

const InterviewSetup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [questionCount, setQuestionCount] = useState([5]);
  const [interviewMode, setInterviewMode] = useState("questions"); // "questions" or "timer"
  const [timerDuration, setTimerDuration] = useState("10"); // in minutes
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
      
      // Store JD and technologies in sessionStorage
      if (jobDescription.trim()) {
        sessionStorage.setItem('interviewJD', jobDescription.trim());
      }
      if (technologies.trim()) {
        sessionStorage.setItem('interviewTech', technologies.trim());
      }
      
      navigate(`/interview?${params.toString()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.08),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300/10 to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <div className="max-w-2xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 mb-8 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              <Brain className="w-10 h-10 text-white relative z-10" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-slate-800">
              Set Up Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Interview</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              Customize your practice session for the best experience
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Enhanced Card */}
          <Card className="bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 backdrop-blur-xl border-2 border-white/60 shadow-2xl rounded-3xl overflow-hidden">
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-3xl blur opacity-30"></div>
            
            <CardHeader className="relative z-10 pb-6">
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                Interview Configuration
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Select your target role and experience level to receive tailored questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              {/* Enhanced Role Selection */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Code className="w-3 h-3 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Select Role</Label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      onClick={() => setSelectedRole(role.value)}
                      className={`group p-5 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
                        selectedRole === role.value
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl shadow-blue-500/20"
                          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-indigo-50/30 hover:shadow-lg"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        selectedRole === role.value 
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg' 
                          : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-indigo-100'
                      }`}>
                        <role.icon className={`w-5 h-5 transition-colors duration-300 ${selectedRole === role.value ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`} />
                      </div>
                      <p className={`font-semibold text-sm transition-colors duration-300 ${selectedRole === role.value ? 'text-blue-700' : 'text-slate-700 group-hover:text-blue-600'}`}>{role.label}</p>
                      {selectedRole === role.value && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Experience Level */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <BarChart className="w-3 h-3 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Experience Level</Label>
                </div>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger className="h-14 bg-gradient-to-r from-white to-blue-50/50 border-2 border-slate-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <SelectValue placeholder="Select your experience level" className="text-slate-600" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2 border-slate-200 shadow-xl">
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value} className="rounded-lg hover:bg-blue-50">
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Enhanced Technologies */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Wrench className="w-3 h-3 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Technologies / Skills</Label>
                </div>
                <Input
                  placeholder="e.g., React, Node.js, TypeScript, MongoDB, AWS, Docker..."
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  className="h-14 bg-gradient-to-r from-white to-purple-50/50 border-2 border-slate-200 hover:border-purple-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
                <p className="text-sm text-slate-500 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-100">
                  💡 Enter technologies separated by commas for targeted technical questions
                </p>
              </div>

              {/* Enhanced Job Description */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <FileText className="w-3 h-3 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Job Description (Optional)</Label>
                </div>
                <Textarea
                  placeholder="Paste the job description here for more targeted interview questions..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[140px] bg-gradient-to-br from-white to-emerald-50/50 border-2 border-slate-200 hover:border-emerald-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 resize-none"
                />
              </div>

              {/* Enhanced Interview Mode Selection */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <Label className="text-lg font-bold text-slate-800">Interview Mode</Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setInterviewMode("questions")}
                    className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                      interviewMode === "questions"
                        ? "border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl shadow-orange-500/20"
                        : "border-slate-200 bg-white hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-red-50/30 hover:shadow-lg"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                      interviewMode === "questions" 
                        ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-lg' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-100 group-hover:to-red-100'
                    }`}>
                      <BarChart className={`w-6 h-6 transition-colors duration-300 ${interviewMode === "questions" ? 'text-white' : 'text-slate-600 group-hover:text-orange-600'}`} />
                    </div>
                    <p className={`font-bold mb-2 transition-colors duration-300 ${interviewMode === "questions" ? 'text-orange-700' : 'text-slate-700 group-hover:text-orange-600'}`}>Question Count</p>
                    <p className="text-sm text-slate-500">Set number of questions</p>
                    {interviewMode === "questions" && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setInterviewMode("timer")}
                    className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                      interviewMode === "timer"
                        ? "border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl shadow-orange-500/20"
                        : "border-slate-200 bg-white hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-red-50/30 hover:shadow-lg"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 ${
                      interviewMode === "timer" 
                        ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-lg' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-100 group-hover:to-red-100'
                    }`}>
                      <Clock className={`w-6 h-6 transition-colors duration-300 ${interviewMode === "timer" ? 'text-white' : 'text-slate-600 group-hover:text-orange-600'}`} />
                    </div>
                    <p className={`font-bold mb-2 transition-colors duration-300 ${interviewMode === "timer" ? 'text-orange-700' : 'text-slate-700 group-hover:text-orange-600'}`}>Time Based</p>
                    <p className="text-sm text-slate-500">Set interview duration</p>
                    {interviewMode === "timer" && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                </div>
              </div>

              {/* Question Count or Timer Duration */}
              {interviewMode === "questions" ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold">Number of Questions</Label>
                    <span className="text-2xl font-display font-bold text-gradient">{questionCount[0]}</span>
                  </div>
                  <Slider
                    value={questionCount}
                    onValueChange={setQuestionCount}
                    min={3}
                    max={10}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Quick (3)</span>
                    <span>Standard (5-7)</span>
                    <span>Comprehensive (10)</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Interview Duration</Label>
                  <Select value={timerDuration} onValueChange={setTimerDuration}>
                    <SelectTrigger className="h-12 bg-secondary border-border">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Minutes (Quick)</SelectItem>
                      <SelectItem value="10">10 Minutes (Standard)</SelectItem>
                      <SelectItem value="15">15 Minutes (Extended)</SelectItem>
                      <SelectItem value="30">30 Minutes (Comprehensive)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Interview will automatically end when time runs out
                  </p>
                </div>
              )}

              {/* Enhanced Start Button */}
              <div className="pt-4">
                <Button
                  className="w-full h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  disabled={!selectedRole || !experienceLevel}
                  onClick={handleStartInterview}
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6" />
                    <span>Start Interview</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InterviewSetup;
