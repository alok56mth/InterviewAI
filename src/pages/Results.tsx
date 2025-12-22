import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, TrendingUp, ArrowRight, RotateCcw, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { generateFinalReport, InterviewFeedback } from "@/lib/gemini";
import { saveInterviewRecord } from "@/lib/interviewService";
import Navbar from "@/components/Navbar";

interface AnswerData {
  question: string;
  answer: string;
  feedback: InterviewFeedback;
}

interface FinalReport {
  overallScore: number;
  summary: string;
  topStrengths: string[];
  areasToImprove: string[];
  recommendation: string;
}

const Results = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [role, setRole] = useState("");
  const [report, setReport] = useState<FinalReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResults = async () => {
      const storedAnswers = sessionStorage.getItem("interviewAnswers");
      const storedRole = sessionStorage.getItem("interviewRole");
      
      if (storedAnswers && storedRole) {
        const parsedAnswers = JSON.parse(storedAnswers);
        setAnswers(parsedAnswers);
        setRole(storedRole);

        // Set timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          if (!report) {
            const avgScore = parsedAnswers.reduce((acc: number, a: AnswerData) => acc + a.feedback.score, 0) / parsedAnswers.length;
            setReport({
              overallScore: Math.round(avgScore * 10) / 10,
              summary: "Interview completed. Results generated locally.",
              topStrengths: ["Completed all questions", "Showed engagement"],
              areasToImprove: ["Continue practicing", "Review feedback"],
              recommendation: "Keep practicing to improve your skills.",
            });
            setIsLoading(false);
          }
        }, 3000); // 3 second timeout

        try {
          // Try to generate report with shorter timeout
          const reportPromise = generateFinalReport(storedRole.replace(/-/g, " "), parsedAnswers);
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 5000)
          );
          
          const finalReport = await Promise.race([reportPromise, timeoutPromise]) as any;
          setReport(finalReport);
          
          // Save to Firebase
          if (user?.id) {
            try {
              await saveInterviewRecord({
                userId: user.id,
                date: new Date().toLocaleDateString(),
                role: storedRole.replace(/-/g, ' '),
                score: finalReport.overallScore,
                questionsCount: parsedAnswers.length,
                duration: '15 min',
                answers: parsedAnswers.map(a => ({
                  question: a.question,
                  answer: a.answer,
                  score: a.feedback.score
                }))
              });
            } catch (error) {
              console.error('Error saving to Firebase:', error);
            }
          }
        } catch (error) {
          console.error("Error generating report:", error);
          // Fallback report
          const avgScore = parsedAnswers.reduce((acc: number, a: AnswerData) => acc + a.feedback.score, 0) / parsedAnswers.length;
          const fallbackReport = {
            overallScore: Math.round(avgScore * 10) / 10,
            summary: "Interview completed successfully. Review your answers below.",
            topStrengths: parsedAnswers.flatMap((a: AnswerData) => a.feedback.strengths).slice(0, 3),
            areasToImprove: parsedAnswers.flatMap((a: AnswerData) => a.feedback.improvements).slice(0, 2),
            recommendation: avgScore >= 7 ? "Good performance. Keep practicing!" : "Continue practicing to improve your skills.",
          };
          setReport(fallbackReport);
          
          // Save to Firebase with fallback report
          if (user?.id) {
            try {
              await saveInterviewRecord({
                userId: user.id,
                date: new Date().toLocaleDateString(),
                role: storedRole.replace(/-/g, ' '),
                score: fallbackReport.overallScore,
                questionsCount: parsedAnswers.length,
                duration: '15 min',
                answers: parsedAnswers.map(a => ({
                  question: a.question,
                  answer: a.answer,
                  score: a.feedback.score
                }))
              });
            } catch (error) {
              console.error('Error saving to Firebase:', error);
            }
          }
        }
        
        // Clear timeout and set loading false
        clearTimeout(timeoutId);
        setIsLoading(false);
      } else {
        navigate("/interview-setup");
      }
      setIsLoading(false);
    };

    loadResults();
  }, [navigate, user?.id, report]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getRecommendationIcon = (recommendation: string) => {
    const lower = recommendation.toLowerCase();
    if (lower.includes("strong hire")) return <Trophy className="w-8 h-8 text-success" />;
    if (lower.includes("hire")) return <CheckCircle className="w-8 h-8 text-success" />;
    if (lower.includes("maybe")) return <Target className="w-8 h-8 text-warning" />;
    return <AlertCircle className="w-8 h-8 text-destructive" />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-xl font-display">Generating your report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 mb-6">
              <Trophy className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Interview <span className="text-gradient">Complete!</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's your comprehensive performance report
            </p>
          </div>

          {/* Score Overview */}
          <Card variant="glow" className="mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground mb-2">Overall Score</p>
                  <p className={`text-7xl font-display font-bold ${getScoreColor(report.overallScore)}`}>
                    {report.overallScore}
                    <span className="text-3xl text-muted-foreground">/10</span>
                  </p>
                </div>
                <div className="flex-1 max-w-md w-full">
                  <Progress value={report.overallScore * 10} className="h-4 mb-4" />
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50">
                    {getRecommendationIcon(report.recommendation)}
                    <div>
                      <p className="font-semibold">Recommendation</p>
                      <p className="text-muted-foreground text-sm">{report.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground">{report.summary}</p>
            </CardContent>
          </Card>

          {/* Strengths & Improvements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <TrendingUp className="w-5 h-5" />
                  Top Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {report.topStrengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <Target className="w-5 h-5" />
                  Areas to Improve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {report.areasToImprove.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Question Breakdown */}
          <Card variant="glass" className="mb-8">
            <CardHeader>
              <CardTitle>Question Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {answers.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <p className="font-medium text-lg">Q{i + 1}: {item.question}</p>
                      <span className={`text-2xl font-bold ${getScoreColor(item.feedback.score)}`}>
                        {item.feedback.score}/10
                      </span>
                    </div>
                    
                    {/* Your Answer */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Your Answer:</h4>
                      <p className="text-sm bg-background/50 p-3 rounded-lg border">{item.answer}</p>
                    </div>
                    
                    {/* Correct Answer */}
                    {item.feedback.correctAnswer && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-success mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Correct Answer:
                        </h4>
                        <div className="text-sm bg-success/5 p-3 rounded-lg border border-success/20 whitespace-pre-line">
                          {item.feedback.correctAnswer}
                        </div>
                      </div>
                    )}
                    
                    {/* Feedback */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-success mb-2">Strengths:</h4>
                        <ul className="text-xs space-y-1">
                          {item.feedback.strengths.slice(0, 2).map((strength, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-success flex-shrink-0 mt-0.5" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-warning mb-2">Improvements:</h4>
                        <ul className="text-xs space-y-1">
                          {item.feedback.improvements.slice(0, 2).map((improvement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-warning flex-shrink-0 mt-0.5" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate("/interview-setup")}>
              <RotateCcw className="w-5 h-5" />
              Practice Again
            </Button>
            <Button variant="glass" size="lg" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
