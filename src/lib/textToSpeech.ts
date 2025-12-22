export const speak = (text: string, onEnd?: () => void): SpeechSynthesisUtterance | null => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported');
    onEnd?.();
    return null;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;

  // Try to get a good English voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(
    voice => voice.lang.startsWith('en') && voice.name.includes('Google')
  ) || voices.find(
    voice => voice.lang.startsWith('en')
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
  return utterance;
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// Preload voices
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
