import React from 'react';
import { CheckCircle2, Share2, ThumbsUp } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  gridIndex: number;
  onSelectVideo?: (video: VideoItem) => void;
  onShare: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onShare
}) => {
  // Direct YouTube watch URL
  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${video.id}`;
  
  // Optimized YouTube thumbnail URL for faster loading
  const youtubeThumbnail = video.thumbnail || `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
  
  // Safe authentic channel avatar
  const creatorAvatar = video.channelAvatar || 
    `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(video.channelTitle || 'Ravi Kishan')}&backgroundColor=dc2626&textColor=ffffff`;

  return (
    <div
      id={`video-card-${video.id}`}
      className="group relative flex flex-col bg-transparent rounded-xl overflow-hidden transition-all duration-200"
    >
      {/* Clickable Video Thumbnail -> Redirects directly to YouTube video in new tab */}
      <a
        href={youtubeWatchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video w-full bg-[#181818] rounded-xl overflow-hidden block cursor-pointer"
        title={`Watch "${video.title}" on YouTube`}
      >
        {/* YouTube Video Thumbnail */}
        <img
          src={youtubeThumbnail}
          alt={video.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('mqdefault.jpg')) {
              target.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
            } else if (!target.src.includes('0.jpg')) {
              target.src = `https://i.ytimg.com/vi/${video.id}/0.jpg`;
            }
          }}
        />

        {/* Standard Duration Badge */}
        <div className="absolute bottom-1.5 right-1.5 bg-black/85 text-white text-[12px] font-semibold px-1.5 py-0.5 rounded shadow">
          {video.duration || '10:00'}
        </div>
      </a>

      {/* Video Metadata Section (100% YouTube Standard Layout) */}
      <div className="pt-3 pb-2 flex gap-3 flex-1">
        {/* Creator Channel Avatar */}
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.channelTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 cursor-pointer block"
          title={video.channelTitle}
        >
          <img
            src={creatorAvatar}
            alt={video.channelTitle}
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-full object-cover border border-[#333] shadow"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(video.channelTitle || 'RK')}&backgroundColor=b91c1c&textColor=ffffff`;
            }}
          />
        </a>

        {/* Title, Channel & Stats */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            {/* Title link directly to YouTube in new tab */}
            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-white line-clamp-2 hover:text-white/90 transition-colors leading-[1.35] tracking-tight block cursor-pointer"
              title={video.title}
            >
              {video.title}
            </a>

            {/* Channel Name link */}
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.channelTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 mt-1 group/channel w-fit cursor-pointer"
            >
              <span className="text-[12px] text-[#aaa] group-hover/channel:text-white transition-colors truncate">
                {video.channelTitle}
              </span>
              {video.verified && (
                <CheckCircle2 className="w-3 h-3 text-[#aaa] shrink-0" />
              )}
            </a>

            {/* Views and Time */}
            <div className="flex items-center gap-1 text-[12px] text-[#aaa] mt-0.5">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#222]/60 text-[11px] text-[#888]">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onShare(video);
              }}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-0.5"
              title="Share video"
            >
              <Share2 className="w-3 h-3" />
              <span>Share</span>
            </button>
            <span className="ml-auto flex items-center gap-1 text-[#aaa]">
              <ThumbsUp className="w-3 h-3" />
              <span>{video.likes || '250K'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
