import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, TrendingUp, RefreshCw, Sparkles, Code, Server, Palette, Shield, Database, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getUserInterviews, getUserStats, InterviewRecord, clearLocalStorageData } from '@/lib/interviewService';

// Role icons mapping
const getRoleIcon = (role: string) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('frontend')) return <Code className="w-5 h-5" />;
  if (roleLower.includes('backend')) return <Server className="w-5 h-5" />;
  if (roleLower.includes('full')) return <Cpu className="w-5 h-5" />;
  if (roleLower.includes('devops')) return <Database className="w-5 h-5" />;
  if (roleLower.includes('ui') || roleLower.includes('ux')) return <Palette className="w-5 h-5" />;
  if (roleLower.includes('security')) return <Shield className="w-5 h-5" />;
  if (roleLower.includes('data')) return <TrendingUp className="w-5 h-5" />;
  return <Target className="w-5 h-5" />;
};

const getRoleGradient = (role: string) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('frontend')) return 'from-cyan-500 to-blue-500';
  if (roleLower.includes('backend')) return 'from-green-500 to-emerald-600';
  if (roleLower.includes('full')) return 'from-violet-500 to-purple-600';
  if (roleLower.includes('devops')) return 'from-blue-500 to-sky-600';
  if (roleLower.includes('ui') || roleLower.includes('ux')) return 'from-pink-500 to-rose-600';
  if (roleLower.includes('security')) return 'from-emerald-500 to-teal-600';
  if (roleLower.includes('data')) return 'from-amber-500 to-orange-600';
  return 'from-indigo-500 to-purple-600';
};

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [history, setHistory] = useState<InterviewRecord[]>([]);
  const [stats, setStats] = useState({
    totalInterviews: 0,
    averageScore: 0,
    bestScore: 0,
    totalTime: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }
      
      try {
        // Load immediately - getUserInterviews now returns localStorage first
        const [interviews, userStats] = await Promise.all([
          getUserInterviews(user.id),
          getUserStats(user.id)
        ]);
        
        setHistory(interviews);
        setStats(userStats);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setHistory([]);
        setStats({
          totalInterviews: 0,
          averageScore: 0,
          bestScore: 0,
          totalTime: 0
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user?.id]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 6) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 8) return { text: 'Excellent', color: 'bg-emerald-500' };
    if (score >= 6) return { text: 'Good', color: 'bg-amber-500' };
    if (score >= 4) return { text: 'Average', color: 'bg-orange-500' };
    return { text: 'Needs Work', color: 'bg-red-500' };
  };

  // No more full loading screen - show structure immediately

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      <div className="pt-24 pb-12 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                    Welcome back, {user?.firstName || 'User'}! 
                  </h1>
                </div>
                <p className="text-slate-500 text-lg">
                  Track your progress and improve your interview skills
                </p>
              </div>
              <Button 
                onClick={() => navigate('/interview-setup')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🚀 New Interview
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
              <CardContent className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-3xl font-bold text-slate-800 transition-opacity ${loading ? 'opacity-50' : ''}`}>
                    {loading ? <span className="animate-pulse">—</span> : stats.totalInterviews}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">Total Interviews</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"></div>
              <CardContent className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-3xl font-bold text-slate-800 transition-opacity ${loading ? 'opacity-50' : ''}`}>
                    {loading ? <span className="animate-pulse">—</span> : stats.averageScore}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">Avg Score /10</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5"></div>
              <CardContent className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-3xl font-bold text-slate-800 transition-opacity ${loading ? 'opacity-50' : ''}`}>
                    {loading ? <span className="animate-pulse">—</span> : stats.bestScore}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">Best Score /10</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              <CardContent className="relative p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-3xl font-bold text-slate-800 transition-opacity ${loading ? 'opacity-50' : ''}`}>
                    {loading ? <span className="animate-pulse">—</span> : `${stats.totalTime}m`}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">Practice Time</p>
              </CardContent>
            </Card>
          </div>

          {/* Interview History */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50/50 px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-800">Interview History</CardTitle>
                    <p className="text-sm text-slate-500 mt-0.5">{history.length} completed interviews</p>
                  </div>
                </div>
                {history.length > 0 && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all your interview data?')) {
                        clearLocalStorageData(user?.id);
                        window.location.reload();
                      }
                    }}
                    className="text-red-500 border-red-200 hover:bg-red-50 text-xs"
                  >
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Clear Data
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {history.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">No interviews yet</h3>
                  <p className="text-slate-500 mb-6 max-w-md mx-auto">Start your first interview to track your progress and see detailed analytics here</p>
                  <Button 
                    onClick={() => navigate('/interview-setup')}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
                  >
                    Start First Interview
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map((interview) => {
                    const badge = getScoreBadge(interview.score);
                    return (
                      <div 
                        key={interview.id} 
                        className="group p-4 rounded-xl border border-slate-200 hover:border-indigo-200 bg-white hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          sessionStorage.setItem('viewInterviewData', JSON.stringify(interview));
                          navigate('/results');
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {/* Role Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getRoleGradient(interview.role)} flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                              {getRoleIcon(interview.role)}
                            </div>
                            
                            {/* Interview Details */}
                            <div>
                              <h4 className="font-semibold text-slate-800 capitalize text-lg group-hover:text-indigo-700 transition-colors">
                                {interview.role.replace(/-/g, ' ')}
                              </h4>
                              <div className="flex items-center gap-3 text-sm text-slate-500">
                                <span>{interview.date}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span>{interview.questionsCount} questions</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span>{interview.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Score */}
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${interview.score >= 7 ? 'text-emerald-600' : interview.score >= 5 ? 'text-amber-600' : 'text-red-600'}`}>
                                {interview.score}/10
                              </div>
                              <Badge className={`${badge.color} text-white text-xs px-2 py-0.5`}>
                                {badge.text}
                              </Badge>
                            </div>
                            <div className="text-slate-400 group-hover:text-indigo-500 transition-colors">
                              →
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
