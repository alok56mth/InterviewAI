import { useEffect, useRef } from 'react';

interface VoiceVisualizerProps {
  isActive: boolean;
  className?: string;
}

const VoiceVisualizer = ({ isActive, className = '' }: VoiceVisualizerProps) => {
  const barsCount = 5;

  return (
    <div className={`flex items-center justify-center gap-1 h-8 ${className}`}>
      {Array.from({ length: barsCount }).map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full bg-primary transition-all duration-150 ${
            isActive ? 'animate-voice-bar' : 'h-2'
          }`}
          style={{
            animationDelay: `${i * 0.1}s`,
            height: isActive ? undefined : '8px'
          }}
        />
      ))}
      
      <style>{`
        @keyframes voiceBar {
          0%, 100% { height: 8px; }
          50% { height: 24px; }
        }
        .animate-voice-bar {
          animation: voiceBar 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default VoiceVisualizer;
