import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Back to Home Button */}
      <Link to="/" className="absolute top-6 left-6 z-20">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>

      <div className="relative z-10 w-full max-w-md px-4 py-8">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
            <Brain className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-2xl">InterviewAI</span>
        </Link>

        <div className="glass rounded-2xl p-8">
          <h1 className="text-2xl font-display font-bold text-center mb-2">Create Account</h1>
          <p className="text-muted-foreground text-center mb-6">Start your interview practice journey</p>
          
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-transparent shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "glass border-border hover:bg-secondary",
                formFieldInput: "bg-secondary border-border text-foreground",
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                footerActionLink: "text-primary hover:text-primary/80",
                dividerLine: "bg-border",
                dividerText: "text-muted-foreground",
              },
            }}
            redirectUrl="/interview-setup"
            signInUrl="/sign-in"
          />
        </div>

        <p className="text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
