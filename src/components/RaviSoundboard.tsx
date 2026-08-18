import React, { useState } from 'react';
import { X, Volume2, Sparkles, Play, Flame, Music } from 'lucide-react';
import { RAVI_SOUNDS } from '../data/videos';

interface RaviSoundboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RaviSoundboard: React.FC<RaviSoundboardProps> = ({ isOpen, onClose }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const playDialogue = (id: string, text: string) => {
    setPlayingId(id);

    // Browser Speech Synthesis for realistic desi voice playback
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.9;
      utterance.rate = 0.95;
      utterance.lang = 'hi-IN';
      
      utterance.onend = () => {
        setPlayingId(null);
      };
      
      utterance.onerror = () => {
        setPlayingId(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setPlayingId(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Volume2 className="w-6 h-6 animate-pulse" />
            <div>
              <h2 className="font-black text-base tracking-tight">Ravi Kishan Iconic Soundboard</h2>
              <p className="text-[11px] text-amber-100 font-medium">Click any punchline to play aloud in Bhojpuri swag</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RAVI_SOUNDS.map((sound) => {
              const isPlaying = playingId === sound.id;
              return (
                <button
                  key={sound.id}
                  onClick={() => playDialogue(sound.id, sound.audioText)}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between gap-2 relative overflow-hidden group cursor-pointer ${
                    isPlaying
                      ? 'bg-red-600/30 border-red-500 ring-2 ring-red-500 scale-[0.99]'
                      : 'bg-[#1e1e1e] hover:bg-[#282828] border-[#333] hover:border-red-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-white text-xs leading-snug">
                      {sound.title}
                    </span>
                    <span className={`p-1 rounded-full shrink-0 ${isPlaying ? 'bg-red-600 text-white animate-spin' : 'bg-[#2a2a2a] text-[#aaa] group-hover:text-white'}`}>
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                  </div>

                  <p className="text-[11px] text-[#aaa] italic leading-tight">
                    "{sound.audioText}"
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-[#777] font-medium pt-1 border-t border-[#2a2a2a]">
                    <span>{sound.movie}</span>
                    <span className="text-red-400 font-bold">{isPlaying ? 'PLAYING...' : 'PLAY'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-[#1a1a1a] border border-[#2b2b2b] p-3 rounded-xl text-xs text-[#888] flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Tip: Turn your device volume UP to experience the full Gorakhpur roar!</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#111] border-t border-[#222] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#272727] hover:bg-[#333] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
