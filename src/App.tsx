import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import InterviewSetup from "./pages/InterviewSetup";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

// Layout component to include ChatBot on all pages
const RootLayout = () => {
  return (
    <>
      <Outlet />
      <ChatBot />
    </>
  );
};

// Create router with v7 future flags to eliminate warnings
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Index /> },
        { path: "contact", element: <Contact /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
        { path: "dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        { path: "interview-setup", element: <ProtectedRoute><InterviewSetup /></ProtectedRoute> },
        { path: "interview", element: <ProtectedRoute><Interview /></ProtectedRoute> },
        { path: "results", element: <ProtectedRoute><Results /></ProtectedRoute> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider 
          router={router} 
          future={{
            v7_startTransition: true,
          }}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


