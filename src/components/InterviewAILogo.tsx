const InterviewAILogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <img 
      src="/logo.png" 
      alt="InterviewAI Logo" 
      className={`${className} object-contain`}
    />
  );
};

export default InterviewAILogo;