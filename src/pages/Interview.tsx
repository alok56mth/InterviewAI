import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, Loader2, CheckCircle, ArrowRight, ChevronLeft, 
  Mic, MicOff, Video, Volume2, VolumeX, AlertCircle, Shield
} from "lucide-react";
import { generateInterviewQuestions, evaluateAnswer, InterviewQuestion, InterviewFeedback } from "@/lib/gemini";
import { getRandomQuestions } from "@/lib/questionBank";
import { toast } from "@/hooks/use-toast";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useMediaStream } from "@/hooks/useMediaStream";
import { speak, stopSpeaking } from "@/lib/textToSpeech";
import WebcamFeed from "@/components/WebcamFeed";
import VoiceVisualizer from "@/components/VoiceVisualizer";
import Navbar from "@/components/Navbar";

interface AnswerData {
  question: string;
  answer: string;
  feedback: InterviewFeedback;
}

type InterviewPhase = 'permission' | 'loading' | 'speaking' | 'listening' | 'processing' | 'feedback' | 'complete';

const Interview = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const role = searchParams.get("role") || "";
  const experience = searchParams.get("experience") || "";
  const questionCount = parseInt(searchParams.get("questions") || "5");
  const interviewMode = searchParams.get("mode") || "questions";
  const timerDuration = parseInt(searchParams.get("timer") || "10") * 60; // Convert to seconds

  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState<InterviewFeedback | null>(null);
  const [phase, setPhase] = useState<InterviewPhase>('permission');
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timerDuration);
  const [timerActive, setTimerActive] = useState(false);

  // Media and Speech hooks
  const { stream, isPermissionGranted, startStream, isLoading: isMediaLoading, error: mediaError } = useMediaStream();
  const { isListening, transcript, startListening, stopListening, resetTranscript, isSupported: isSpeechSupported } = useSpeechRecognition({
    onEnd: () => {
      if (phase === 'listening' && transcript.trim()) {
        handleSubmitAnswer(transcript);
      }
    }
  });

  // Update transcript in real-time
  useEffect(() => {
    setCurrentTranscript(transcript);
  }, [transcript]);

  // Timer countdown effect
  useEffect(() => {
    if (interviewMode === "timer" && timerActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setPhase('complete');
            sessionStorage.setItem("interviewAnswers", JSON.stringify(answers));
            sessionStorage.setItem("interviewRole", role);
            navigate("/results");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerActive, timeRemaining, interviewMode, answers, role, navigate]);

  // Format time for display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Load questions after permission granted
  useEffect(() => {
    const loadQuestions = async () => {
      if (!isPermissionGranted || questions.length > 0) return;
      
      setPhase('loading');
      try {
        const roleLabel = role.replace(/-/g, " ");
        const experienceLabel = experience.replace(/-/g, " ");
        
        // Get JD and technologies from sessionStorage
        const jobDescription = sessionStorage.getItem('interviewJD') || undefined;
        const technologies = sessionStorage.getItem('interviewTech') || undefined;
        
        const generatedQuestions = await generateInterviewQuestions(
          roleLabel, 
          experienceLabel, 
          questionCount, 
          jobDescription,
          technologies
        );
        setQuestions(generatedQuestions);
        
        // Clear sessionStorage after use
        sessionStorage.removeItem('interviewJD');
        sessionStorage.removeItem('interviewTech');
        
        // Start interview with first question and timer
        setTimeout(() => {
          speakQuestion(generatedQuestions[0].question);
          if (interviewMode === "timer") {
            setTimerActive(true);
          }
        }, 500);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate questions. Please try again.",
          variant: "destructive",
        });
        setPhase('permission');
      }
    };

    if (role && experience && isPermissionGranted) {
      loadQuestions();
    }
  }, [role, experience, questionCount, isPermissionGranted, questions.length]);

  const speakQuestion = useCallback((questionText: string) => {
    setPhase('speaking');
    setIsSpeaking(true);
    
    speak(questionText, () => {
      setIsSpeaking(false);
      setPhase('listening');
      resetTranscript();
      startListening();
    });
  }, [resetTranscript, startListening]);

  const handleStartInterview = async () => {
    try {
      await startStream();
    } catch (error) {
      toast({
        title: "Permission Required",
        description: "Please allow camera and microphone access to continue.",
        variant: "destructive",
      });
    }
  };

  const handleSubmitAnswer = async (answerText: string) => {
    if (!answerText.trim()) {
      toast({
        title: "No answer detected",
        description: "Please speak your answer clearly.",
        variant: "destructive",
      });
      setPhase('listening');
      startListening();
      return;
    }

    setPhase('processing');
    stopSpeaking();
    
    try {
      const question = questions[currentIndex];
      const feedback = await evaluateAnswer(
        question.question,
        answerText,
        question.expectedTopics,
        role.replace(/-/g, " ")
      );
      
      setCurrentFeedback(feedback);
      setAnswers([...answers, { question: question.question, answer: answerText, feedback }]);
      setPhase('feedback');
      
      // Speak feedback
      const feedbackSpeech = `Your score is ${feedback.score} out of 10. ${feedback.overallFeedback}`;
      speak(feedbackSpeech);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to evaluate answer. Please try again.",
        variant: "destructive",
      });
      setPhase('listening');
      startListening();
    }
  };

  const handleStopRecording = () => {
    stopListening();
    if (currentTranscript.trim()) {
      handleSubmitAnswer(currentTranscript);
    } else {
      toast({
        title: "No answer detected",
        description: "Please speak your answer.",
        variant: "destructive",
      });
      setTimeout(() => {
        startListening();
      }, 1000);
    }
  };

  const handleNextQuestion = () => {
    stopSpeaking();
    setCurrentTranscript('');
    resetTranscript();
    setCurrentFeedback(null);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        speakQuestion(questions[currentIndex + 1].question);
      }, 500);
    } else {
      setPhase('complete');
      sessionStorage.setItem("interviewAnswers", JSON.stringify(answers));
      sessionStorage.setItem("interviewRole", role);
      navigate("/results");
    }
  };

  const progress = ((currentIndex + (currentFeedback ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Permission Phase */}
          {phase === 'permission' && (
            <div className="min-h-[70vh] flex items-center justify-center">
              <Card className="bg-white border border-slate-200 shadow-lg p-10 text-center max-w-xl mx-auto rounded-xl">
                {/* Professional Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-blue-600 mb-6 shadow-md">
                  <Video className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 text-slate-800">
                  Ready for Your Interview?
                </h2>
                
                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We need access to your camera and microphone for the AI interview. 
                  You'll answer questions by speaking, just like a real interview!
                </p>
                
                {/* Error Messages */}
                {mediaError && (
                  <div className="flex items-center gap-2 justify-center text-red-600 mb-6 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertCircle className="w-5 h-5" />
                    <span>{mediaError}</span>
                  </div>
                )}
                
                {!isSpeechSupported && (
                  <div className="flex items-center gap-2 justify-center text-amber-600 mb-6 p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <AlertCircle className="w-5 h-5" />
                    <span>Speech recognition not supported in this browser. Please use Chrome.</span>
                  </div>
                )}
                
                {/* Start Button */}
                <Button
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={handleStartInterview}
                  disabled={isMediaLoading}
                >
                  {isMediaLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Requesting Access...
                    </>
                  ) : (
                    <>
                      <Video className="w-5 h-5 mr-2" />
                      Start Interview
                    </>
                  )}
                </Button>
                
                {/* Privacy Note */}
                <div className="mt-6 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-slate-500" />
                    <span>Your privacy is protected. Data is processed securely.</span>
                  </p>
                </div>
              </Card>
            </div>
          )}

          {/* Loading Phase */}
          {phase === 'loading' && (
            <Card variant="glass" className="p-12 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 mb-6 animate-pulse">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Preparing Your Interview...</h2>
              <p className="text-muted-foreground mb-6">
                AI is generating personalized questions for your {role.replace(/-/g, " ")} interview
              </p>
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
            </Card>
          )}

          {/* Main Interview Phase */}
          {(phase === 'speaking' || phase === 'listening' || phase === 'processing' || phase === 'feedback') && questions.length > 0 && (
            <>
              {/* Progress Header */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <Button variant="ghost" onClick={() => {
                    stopSpeaking();
                    stopListening();
                    navigate("/interview-setup");
                  }}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Exit
                  </Button>
                  <div className="flex items-center gap-4">
                    {interviewMode === "timer" && (
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        timeRemaining <= 60 ? 'bg-destructive/20 text-destructive' :
                        timeRemaining <= 300 ? 'bg-warning/20 text-warning' :
                        'bg-primary/20 text-primary'
                      }`}>
                        ⏱️ {formatTime(timeRemaining)}
                      </div>
                    )}
                    <span className="text-muted-foreground">
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Webcam Feed */}
                <div className="order-2 lg:order-1">
                  <WebcamFeed 
                    stream={stream} 
                    isListening={isListening}
                    className="aspect-video"
                  />
                  
                  {/* Voice Controls */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                    {phase === 'listening' && (
                      <>
                        <VoiceVisualizer isActive={isListening} />
                        <Button
                          variant={isListening ? "destructive" : "hero"}
                          size="lg"
                          onClick={handleStopRecording}
                          className="min-w-[200px]"
                        >
                          {isListening ? (
                            <>
                              <MicOff className="w-5 h-5" />
                              Stop & Submit
                            </>
                          ) : (
                            <>
                              <Mic className="w-5 h-5" />
                              Start Recording
                            </>
                          )}
                        </Button>
                        <VoiceVisualizer isActive={isListening} />
                      </>
                    )}
                    
                    {phase === 'speaking' && (
                      <div className="flex items-center gap-3 text-primary">
                        <Volume2 className="w-6 h-6 animate-pulse" />
                        <span className="text-lg font-medium">AI is speaking...</span>
                      </div>
                    )}
                    
                    {phase === 'processing' && (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-lg font-medium">Analyzing your answer...</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Question & Feedback Panel */}
                <div className="order-1 lg:order-2">
                  <Card variant="glow" className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          questions[currentIndex].difficulty === 'easy' ? 'bg-success/20 text-success' :
                          questions[currentIndex].difficulty === 'medium' ? 'bg-warning/20 text-warning' :
                          'bg-destructive/20 text-destructive'
                        }`}>
                          {questions[currentIndex].difficulty.toUpperCase()}
                        </span>
                        {phase === 'speaking' && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary animate-pulse">
                            LISTENING
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl leading-relaxed">
                        {questions[currentIndex].question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Transcript Display */}
                      {(phase === 'listening' || phase === 'processing') && (
                        <div className="p-4 rounded-xl bg-secondary min-h-[150px] mb-4">
                          <p className="text-sm text-muted-foreground mb-2">Your Answer:</p>
                          <p className="text-foreground leading-relaxed">
                            {currentTranscript || (
                              <span className="text-muted-foreground italic">
                                {isListening ? "Listening... speak now" : "Click to start recording"}
                              </span>
                            )}
                          </p>
                        </div>
                      )}

                      {/* Feedback Section */}
                      {phase === 'feedback' && currentFeedback && (
                        <div className="space-y-4 animate-fade-in">
                          {/* Score */}
                          <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Your Score</p>
                              <p className="text-3xl font-display font-bold text-gradient">{currentFeedback.score}/10</p>
                            </div>
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              currentFeedback.score >= 7 ? 'bg-success/20' :
                              currentFeedback.score >= 5 ? 'bg-warning/20' :
                              'bg-destructive/20'
                            }`}>
                              <CheckCircle className={`w-8 h-8 ${
                                currentFeedback.score >= 7 ? 'text-success' :
                                currentFeedback.score >= 5 ? 'text-warning' :
                                'text-destructive'
                              }`} />
                            </div>
                          </div>

                          {/* Strengths & Improvements */}
                          <div className="grid gap-3">
                            <div className="p-3 rounded-xl bg-success/10 border border-success/20">
                              <h4 className="font-semibold text-success mb-2 text-sm">Strengths</h4>
                              <ul className="space-y-1">
                                {currentFeedback.strengths.slice(0, 2).map((strength, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <CheckCircle className="w-3 h-3 text-success flex-shrink-0 mt-0.5" />
                                    {strength}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-3 rounded-xl bg-warning/10 border border-warning/20">
                              <h4 className="font-semibold text-warning mb-2 text-sm">Improve</h4>
                              <ul className="space-y-1">
                                {currentFeedback.improvements.slice(0, 2).map((improvement, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <ArrowRight className="w-3 h-3 text-warning flex-shrink-0 mt-0.5" />
                                    {improvement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Correct Answer Section */}
                          {currentFeedback.correctAnswer && (
                            <div className="p-4 rounded-xl bg-info/10 border border-info/20">
                              <h4 className="font-semibold text-info mb-2 text-sm flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Correct Answer
                              </h4>
                              <div className="text-xs text-muted-foreground whitespace-pre-line">
                                {currentFeedback.correctAnswer}
                              </div>
                            </div>
                          )}

                          {/* Next Button */}
                          <Button
                            variant="hero"
                            size="lg"
                            className="w-full"
                            onClick={handleNextQuestion}
                          >
                            {currentIndex < questions.length - 1 ? (
                              <>
                                Next Question
                                <ArrowRight className="w-5 h-5" />
                              </>
                            ) : (
                              <>
                                View Results
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Interview;