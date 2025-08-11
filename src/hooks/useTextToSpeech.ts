
import { useState, useCallback } from 'react';

interface UseTextToSpeechOptions {
  apiKey?: string;
  voiceId?: string;
  modelId?: string;
}

export const useTextToSpeech = (options: UseTextToSpeechOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    apiKey = '',
    voiceId = '9BWtsMINqrJLrRacOk9x', // Aria voice
    modelId = 'eleven_multilingual_v2'
  } = options;

  const speak = useCallback(async (text: string) => {
    if (!apiKey) {
      // Fallback to browser's speech synthesis
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => {
          setError('Speech synthesis failed');
          setIsPlaying(false);
        };

        speechSynthesis.speak(utterance);
        return;
      } else {
        setError('Text-to-speech not supported in this browser');
        return;
      }
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text,
          model_id: modelId,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };
      audio.onerror = () => {
        setError('Audio playback failed');
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, voiceId, modelId]);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  return {
    speak,
    stop,
    isLoading,
    isPlaying,
    error
  };
};
