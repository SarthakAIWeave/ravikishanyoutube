import React from 'react';
import { VideoItem } from '../types';
import { VideoCard } from './VideoCard';

interface VideoGridProps {
  videos: VideoItem[];
  onSelectVideo?: (video: VideoItem) => void;
  onShare: (video: VideoItem) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({
  videos,
  onShare
}) => {
  // Group videos strictly into rows of 4 videos
  const rows: VideoItem[][] = [];
  for (let i = 0; i < videos.length; i += 4) {
    rows.push(videos.slice(i, i + 4));
  }

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* 4-Column Grid Container (Strictly 4 videos per row) */}
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[960px] space-y-6">
          {rows.map((rowVideos, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-4 gap-4">
              {rowVideos.map((video, colIndex) => {
                const globalIndex = rowIndex * 4 + colIndex;
                return (
                  <VideoCard
                    key={`${video.id}-${globalIndex}`}
                    video={video}
                    gridIndex={globalIndex}
                    onShare={onShare}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
