import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, TrendingUp, RefreshCw, Database, Wifi, WifiOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getUserInterviews, getUserStats, InterviewRecord, clearLocalStorageData } from '@/lib/interviewService';
import { testFirebaseConnection } from '@/lib/firebase';

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
  const [firebaseConnected, setFirebaseConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;
      
      try {
        // Load data immediately from localStorage (fast)
        const [interviews, userStats] = await Promise.all([
          getUserInterviews(user.id),
          getUserStats(user.id)
        ]);
        
        setHistory(interviews);
        setStats(userStats);
        setLoading(false); // Set loading false immediately after getting local data
        
        // Test Firebase connection in background (don't wait)
        testFirebaseConnection().then(setFirebaseConnected).catch(() => setFirebaseConnected(false));
        
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setFirebaseConnected(false);
        setHistory([]);
        setStats({
          totalInterviews: 0,
          averageScore: 0,
          bestScore: 0,
          totalTime: 0
        });
        setLoading(false);
      }
    };

    loadData();
  }, [user?.id]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-50';
    if (score >= 6) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <div className="pt-24 pb-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">
                Welcome back, {user?.firstName || 'User'}! 👋
              </h1>
              <p className="text-slate-600 text-lg">
                Track your interview progress and improve your skills
              </p>
            </div>
            {/* Connection Status */}
            <div className="flex items-center gap-2">
              {firebaseConnected === true && (
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Wifi className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
              )}
              {firebaseConnected === false && (
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                  <WifiOff className="w-3 h-3 mr-1" />
                  Local Mode
                </Badge>
              )}
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Database className="w-3 h-3 mr-1" />
                Data Synced
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Total Interviews
              </CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stats.totalInterviews}</div>
              <p className="text-xs text-slate-500 mt-1">
                {stats.totalInterviews > 0 ? 'Keep practicing!' : 'Start your first interview'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Average Score
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stats.averageScore}/10</div>
              <p className="text-xs text-slate-500 mt-1">
                {stats.averageScore >= 7 ? 'Excellent!' : stats.averageScore >= 5 ? 'Good progress' : 'Keep improving'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Best Score
              </CardTitle>
              <Trophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stats.bestScore}/10</div>
              <p className="text-xs text-slate-500 mt-1">
                {stats.bestScore >= 8 ? 'Outstanding!' : 'Aim higher!'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Practice Time
              </CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{stats.totalTime}m</div>
              <p className="text-xs text-slate-500 mt-1">
                {stats.totalTime > 60 ? 'Great dedication!' : 'More practice needed'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => navigate('/interview-setup')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Start New Interview
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/interview-setup')}
              className="font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-all duration-300"
            >
              📊 Practice Specific Skills
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                clearLocalStorageData(user?.id);
                window.location.reload();
              }}
              className="font-semibold px-6 py-3 rounded-lg text-red-600 border-red-200 hover:bg-red-50 transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Clear My Data
            </Button>
          </div>
        </div>

        {/* Interview History */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
              📈 Interview History
              {history.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {history.length} interviews
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {history.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No interviews yet</h3>
                <p className="text-slate-600 mb-6">Start your first interview to see your progress here</p>
                <Button 
                  onClick={() => navigate('/interview-setup')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start First Interview
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {history.map((interview) => (
                  <Card key={interview.id} className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-white/90">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {interview.role.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 capitalize">{interview.role} Interview</h4>
                            <p className="text-sm text-slate-500">
                              {interview.date} • {interview.questionsCount} questions • {interview.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`${getScoreColor(interview.score)} border-0 font-semibold px-3 py-1`}>
                            {interview.score}/10
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
                            onClick={() => {
                              sessionStorage.setItem('viewInterviewData', JSON.stringify(interview));
                              navigate('/results');
                            }}
                          >
                            View Details →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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