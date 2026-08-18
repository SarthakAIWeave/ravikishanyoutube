import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Mic, 
  Video, 
  Bell, 
  Shuffle, 
  Volume2, 
  Flame, 
  Sparkles,
  Share2,
  X
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenSoundboard: () => void;
  onOpenUpload: () => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  onOpenSoundboard,
  onOpenUpload,
  onOpenNotifications,
  unreadNotifications
}) => {
  const [isListening, setIsListening] = useState(false);
  const [voiceToast, setVoiceToast] = useState('');

  const handleVoiceSearch = () => {
    setIsListening(true);
    setVoiceToast('Bhojpuri Voice Search: Listening for "Ravi Kishan"...');
    
    // Simulate voice recognition
    setTimeout(() => {
      const phrases = [
        'Zindagi Jhandwa Phir Bhi Ghamandwa',
        'Ravi Kishan Superhit Song',
        'Litti Chokha TV',
        'Khan Sir Theft Classes',
        'Gorakhpur Sansad Speech'
      ];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      onSearchChange(randomPhrase);
      setIsListening(false);
      setVoiceToast(`Searching: "${randomPhrase}"`);
      setTimeout(() => setVoiceToast(''), 3000);
    }, 1800);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0f0f0f] border-b border-[#272727] px-4 py-2 flex items-center justify-between gap-4 h-14">
      {/* Left Section: Menu & Logo */}
      <div className="flex items-center gap-4 shrink-0">
        <button
          id="btn-sidebar-toggle"
          onClick={onToggleSidebar}
          className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors focus:outline-none focus:ring-1 focus:ring-red-600"
          title="Toggle Bhojpuri Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <a href="/" className="flex items-center gap-2 group select-none">
          {/* YouTube Red Icon with Play SVG */}
          <div className="w-9 h-6 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-lg font-black tracking-tight text-white font-['Roboto'] flex items-center">
                Ravi Kishan
                <span className="text-red-500 ml-1">Tube</span>
              </span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 bg-red-600/20 text-red-400 border border-red-500/30 rounded">
                BHOJPURI
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Middle Section: Search Bar & Voice Search */}
      <div className="flex-1 max-w-2xl flex items-center justify-center">
        <div className="w-full flex items-center">
          <div className="flex-1 flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-1.5 focus-within:border-[#1c62b9] focus-within:bg-[#0f0f0f] transition-all">
            <Search className="w-4 h-4 text-[#888888] mr-2 shrink-0" />
            <input
              id="input-main-search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Ravi Kishan songs, dialogues, litti-chokha & stunts..."
              className="w-full bg-transparent text-white text-sm placeholder-[#717171] outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-[#888] hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            id="btn-search-submit"
            className="bg-[#222222] hover:bg-[#272727] border border-l-0 border-[#303030] rounded-r-full px-5 py-2 text-white transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            id="btn-voice-search"
            onClick={handleVoiceSearch}
            className={`ml-2 p-2.5 rounded-full border border-[#303030] transition-all ${
              isListening
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-[#222222] hover:bg-[#272727] text-white'
            }`}
            title="Voice Search in Bhojpuri"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section: Actions, Soundboard, Notifications & Profile */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Ravi Kishan Soundboard Button */}
        <button
          id="btn-open-soundboard"
          onClick={onOpenSoundboard}
          className="flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all shadow-md active:scale-95"
          title="Ravi Kishan Dialogues Soundboard"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Soundboard</span>
        </button>

        {/* Create / Upload */}
        <button
          id="btn-upload-video"
          onClick={onOpenUpload}
          className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors"
          title="Add Bhojpuri Video"
        >
          <Video className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button
          id="btn-notifications"
          onClick={onOpenNotifications}
          className="relative p-2 rounded-full hover:bg-[#272727] text-white transition-colors"
          title="Bhojpuri Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadNotifications > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {unreadNotifications}
            </span>
          )}
        </button>

        {/* Ravi Kishan VIP Member Avatar */}
        <div 
          className="w-8 h-8 rounded-full ring-2 ring-red-500 overflow-hidden cursor-pointer bg-gradient-to-tr from-yellow-500 to-red-600 flex items-center justify-center text-white font-black text-xs shadow"
          title="Ravi Kishan VIP Gold Member"
        >
          RK
        </div>
      </div>

      {/* Voice Toast Banner */}
      {voiceToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce">
          <Mic className="w-3.5 h-3.5 animate-spin" />
          <span>{voiceToast}</span>
        </div>
      )}
    </header>
  );
};
