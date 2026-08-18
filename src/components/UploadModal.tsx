import React, { useState } from 'react';
import { X, Video, Sparkles, Check } from 'lucide-react';
import { VideoItem } from '../types';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddVideo: (newVideo: VideoItem) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onAddVideo
}) => {
  const [title, setTitle] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [category, setCategory] = useState('all-day');
  const [channelTitle, setChannelTitle] = useState('Ravi Kishan Bhojpuri Studio');
  const [duration, setDuration] = useState('12:30');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !youtubeUrl) return;

    // Extract video ID from youtube url or embed url
    let videoId = 'E6LvUJ5EUuc';
    const match = youtubeUrl.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    if (match && match[1]) {
      videoId = match[1];
    }

    const newVideo: VideoItem = {
      id: `custom-${Date.now()}`,
      title,
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      duration,
      channelTitle,
      channelAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      views: '1.2K views',
      uploadedAt: 'Just now',
      verified: true,
      category,
      description: `Added by community: ${title}`,
      tags: ['Ravi Kishan', 'Bhojpuri Tube', 'New Upload'],
      likes: '120'
    };

    onAddVideo(newVideo);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#141414] border border-[#2e2e2e] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#1c1c1c] p-4 border-b border-[#2a2a2a] flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-red-500" />
            <h2 className="font-bold text-sm">Upload Bhojpuri Video to Ravi Kishan Tube</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#272727] text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          <div>
            <label className="block text-[#aaa] font-semibold mb-1">Video Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Ravi Kishan Superhit Dialogue 2026"
              className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 text-white outline-none focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#aaa] font-semibold mb-1">YouTube Video / Embed URL or ID</label>
            <input
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="e.g. https://www.youtube.com/watch?v=E6LvUJ5EUuc"
              className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 text-white outline-none focus:border-red-500 font-mono text-xs"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#aaa] font-semibold mb-1">Category Tab</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 text-white outline-none focus:border-red-500"
              >
                <option value="khan-sir">Khan Sir Theft Classes</option>
                <option value="litti-chokha">Litti-Chokha TV</option>
                <option value="all-day">All Day Ravi Kishan</option>
                <option value="bihari-majdoor">Bihari Majdoor Course</option>
                <option value="dialogues">Iconic Dialogues</option>
                <option value="music">Bhojpuri Music</option>
              </select>
            </div>

            <div>
              <label className="block text-[#aaa] font-semibold mb-1">Duration (MM:SS)</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="10:45"
                className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 text-white outline-none focus:border-red-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#aaa] font-semibold mb-1">Channel Name</label>
            <input
              type="text"
              value={channelTitle}
              onChange={(e) => setChannelTitle(e.target.value)}
              placeholder="e.g. Bhojpuri Gold Studio"
              className="w-full bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 text-white outline-none focus:border-red-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#222] hover:bg-[#2c2c2c] text-white rounded-lg font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold shadow flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              Publish Video
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
