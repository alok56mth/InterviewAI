import { useEffect, useRef } from 'react';
import { Video, VideoOff, Mic, MicOff } from 'lucide-react';

interface WebcamFeedProps {
  stream: MediaStream | null;
  isListening?: boolean;
  isMuted?: boolean;
  className?: string;
}

const WebcamFeed = ({ stream, isListening = false, isMuted = false, className = '' }: WebcamFeedProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-secondary ${className}`}>
      {stream ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover mirror"
          />
          {/* Recording indicator */}
          {isListening && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/90 text-destructive-foreground text-sm font-medium animate-pulse">
              <div className="w-2 h-2 rounded-full bg-current" />
              Recording
            </div>
          )}
          {/* Status indicators */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className={`p-2 rounded-full ${stream.getVideoTracks().length > 0 ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'}`}>
              {stream.getVideoTracks().length > 0 ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </div>
            <div className={`p-2 rounded-full ${isListening ? 'bg-success/20 text-success animate-pulse' : isMuted ? 'bg-destructive/20 text-destructive' : 'bg-muted text-muted-foreground'}`}>
              {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-muted-foreground">
          <VideoOff className="w-12 h-12 mb-3" />
          <p className="text-sm">Camera not connected</p>
        </div>
      )}
      
      <style>{`
        .mirror {
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  );
};

export default WebcamFeed;
