import React from 'react';
import { X, Bell, Flame, Sparkles, CheckCheck } from 'lucide-react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onClear
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: '🚨 Khan Sir Theft Classes Alert!',
      message: 'New secret trick to crack Bhojpuri exams while eating Litti Chokha just uploaded.',
      time: '10 min ago',
      unread: true
    },
    {
      id: 2,
      title: '🎬 New Bhojpuri Superhit Trailer',
      message: 'Ravi Kishan action thriller blockbuster scene is trending worldwide.',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      title: '🍲 Litti-Chokha TV is LIVE',
      message: 'Ravi Kishan is eating 12 hot Littis in Gorakhpur village feast.',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      title: '🛠️ Bihari Majdoor Course Update',
      message: 'Lesson #4: How to construct a palace using pure Bhojpuri willpower & sattu.',
      time: '1 day ago',
      unread: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-sm bg-[#121212] border-l border-[#272727] h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-[#272727] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-sm text-white">Bhojpuri Notifications</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#222] text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3 rounded-xl border text-xs transition-colors ${
                n.unread
                  ? 'bg-red-950/20 border-red-500/40 text-white'
                  : 'bg-[#181818] border-[#292929] text-[#ccc]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white text-xs">{n.title}</span>
                <span className="text-[10px] text-[#717171]">{n.time}</span>
              </div>
              <p className="text-[#aaa] leading-relaxed">{n.message}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#272727] bg-[#0c0c0c] flex justify-between items-center">
          <button
            onClick={onClear}
            className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as seen
          </button>
          <button
            onClick={onClose}
            className="bg-[#222] hover:bg-[#333] text-white text-xs font-bold px-3 py-1.5 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
