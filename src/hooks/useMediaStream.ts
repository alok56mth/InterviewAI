import { useState, useRef, useCallback, useEffect } from 'react';

interface UseMediaStreamProps {
  video?: boolean;
  audio?: boolean;
}

export const useMediaStream = ({ video = true, audio = true }: UseMediaStreamProps = {}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startStream = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: video ? { facingMode: 'user', width: 640, height: 480 } : false,
        audio: audio
      });

      setStream(mediaStream);
      setIsPermissionGranted(true);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      return mediaStream;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to access camera/microphone';
      setError(message);
      console.error('Media stream error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [video, audio]);

  const stopStream = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsPermissionGranted(false);
    }
  }, [stream]);

  const setVideoRef = useCallback((element: HTMLVideoElement | null) => {
    videoRef.current = element;
    if (element && stream) {
      element.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return {
    stream,
    isPermissionGranted,
    isLoading,
    error,
    startStream,
    stopStream,
    setVideoRef,
    videoRef
  };
};
