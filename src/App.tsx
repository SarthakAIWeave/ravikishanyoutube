import React, { useState, useEffect, useMemo, useRef } from 'react';
import { VideoItem } from './types';
import { 
  TOP_POOL_VIDEOS, 
  SPECIAL_7TH_VIDEO, 
  REMAINING_CATALOG_VIDEOS 
} from './data/videos';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BhojpuriBanner } from './components/BhojpuriBanner';
import { VideoGrid } from './components/VideoGrid';
import { RaviSoundboard } from './components/RaviSoundboard';
import { UploadModal } from './components/UploadModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { Flame } from 'lucide-react';

const MAX_TOTAL_VIDEOS = 20;

// Fisher-Yates shuffle helper used ONLY on initial site load for top 6 selected videos
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Strict title verification helper
function hasRaviKishanInTitle(title: string): boolean {
  if (!title) return true; // Allow baseline items
  const lower = title.toLowerCase();
  return (
    lower.includes('ravi kishan') ||
    lower.includes('ravi-kishan') ||
    lower.includes('ravikishan') ||
    lower.includes('रवि किशन') ||
    lower.includes('रविकिशन') ||
    lower.includes('memes') ||
    lower.includes('ed sheeran')
  );
}

// Create initial fallback stable list once on app start (max 20)
function createInitialVideoList(): VideoItem[] {
  const shuffledTop6 = shuffleArray(TOP_POOL_VIDEOS);
  return [
    ...shuffledTop6.slice(0, 6),
    SPECIAL_7TH_VIDEO,
    ...REMAINING_CATALOG_VIDEOS
  ].slice(0, MAX_TOTAL_VIDEOS);
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Stable baseline videos established ONCE on initial load (positions never change during session)
  const [baselineVideos, setBaselineVideos] = useState<VideoItem[]>(() => createInitialVideoList());
  
  // New videos discovered dynamically from YouTube over time (appended to catalog without moving existing videos)
  const [appendedLiveVideos, setAppendedLiveVideos] = useState<VideoItem[]>([]);
  const knownVideoIds = useRef<Set<string>>(new Set());

  // Custom videos added by user
  const [customVideos, setCustomVideos] = useState<VideoItem[]>([]);
  
  // Soundboard, upload, notification states
  const [isSoundboardOpen, setIsSoundboardOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(1);

  // Initialize known IDs from baseline
  useEffect(() => {
    baselineVideos.forEach((v) => knownVideoIds.current.add(v.id));
  }, []);

  // Fetch real YouTube creator metadata & real live YouTube videos for baseline
  useEffect(() => {
    let isMounted = true;

    const fetchRealBaselineMetadata = async () => {
      try {
        const res = await fetch('/api/initial-videos');
        if (!res.ok) return;
        const data = await res.json();

        if (data.success && isMounted) {
          if (Array.isArray(data.top6) && data.top6.length > 0) {
            const randomizedTop6 = shuffleArray(data.top6);
            const liveInitialList: VideoItem[] = [
              ...randomizedTop6,
              data.special7th || SPECIAL_7TH_VIDEO,
              ...(data.remaining || [])
            ].slice(0, MAX_TOTAL_VIDEOS);

            setBaselineVideos(liveInitialList);
            liveInitialList.forEach((v) => knownVideoIds.current.add(v.id));
          }
        }
      } catch (err) {
        console.warn('Could not fetch real YouTube baseline metadata:', err);
      }
    };

    fetchRealBaselineMetadata();

    return () => {
      isMounted = false;
    };
  }, []);

  // Real-time search loop running every 5 seconds:
  // Discovers real YouTube Ravi Kishan videos and appends them up to 20 total videos
  // WITHOUT randomizing or re-ordering any videos already listed on the site!
  useEffect(() => {
    let isMounted = true;

    const fetchLiveYouTubeVideos = async () => {
      try {
        const res = await fetch('/api/youtube-live-search');
        if (!res.ok) return;
        const data = await res.json();

        if (data.success && Array.isArray(data.videos) && isMounted) {
          // Filter strictly for new videos not yet known
          const newValidVideos = data.videos.filter((v: VideoItem) => {
            const isNew = !knownVideoIds.current.has(v.id);
            return isNew;
          });

          if (newValidVideos.length > 0) {
            newValidVideos.forEach((v: VideoItem) => knownVideoIds.current.add(v.id));
            // Append newly discovered videos to the catalog up to 20 total limit
            setAppendedLiveVideos((prev) => {
              const combined = [...prev, ...newValidVideos];
              return combined;
            });
          }
        }
      } catch (err) {
        console.warn('Real-time YouTube search error:', err);
      }
    };

    // First fetch after slight delay to allow clean mount
    const initialTimer = setTimeout(fetchLiveYouTubeVideos, 1500);

    // Poll YouTube internally every 5 seconds
    const interval = setInterval(fetchLiveYouTubeVideos, 5000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Complete assembled catalog strictly limited to 20 videos total:
  // Base videos (locked in their initial positions) + live appended videos + custom uploads
  const assembledVideos = useMemo(() => {
    const list = [
      ...baselineVideos,
      ...appendedLiveVideos,
      ...customVideos
    ];
    return list.slice(0, MAX_TOTAL_VIDEOS);
  }, [baselineVideos, appendedLiveVideos, customVideos]);

  // Filtered view based on custom tabs and search query (capped at max 20)
  const displayedVideos = useMemo(() => {
    let list = assembledVideos;

    if (selectedTab && selectedTab !== 'all') {
      const filtered = list.filter((v) => {
        if (selectedTab === 'all-day-ravi-kishan') return true;
        if (selectedTab === 'khan-sir-theft') {
          return v.title.toLowerCase().includes('khan') || 
                 v.title.toLowerCase().includes('learn') || 
                 v.title.toLowerCase().includes('student') || 
                 v.title.toLowerCase().includes('protest') || 
                 v.channelTitle.toLowerCase().includes('bakchd') ||
                 v.tags?.some(t => t.toLowerCase().includes('coder') || t.toLowerCase().includes('protest'));
        }
        if (selectedTab === 'litti-chokha-tv') {
          return v.title.toLowerCase().includes('litti') || 
                 v.title.toLowerCase().includes('heroic') || 
                 v.title.toLowerCase().includes('ladies') || 
                 v.channelTitle.toLowerCase().includes('netflix') ||
                 v.tags?.some(t => t.toLowerCase().includes('netflix'));
        }
        if (selectedTab === 'bihari-majdoor-course') {
          return v.title.toLowerCase().includes('brother') || 
                 v.title.toLowerCase().includes('money') || 
                 v.title.toLowerCase().includes('meme') || 
                 v.title.toLowerCase().includes('roast') ||
                 v.category === 'comedy';
        }
        if (selectedTab === 'zindagi-jhandwa-academy') {
          return v.title.toLowerCase().includes('jhandwa') || 
                 v.title.toLowerCase().includes('dialogue') || 
                 v.title.toLowerCase().includes('funniest') || 
                 v.title.toLowerCase().includes('yahan') ||
                 v.category === 'dialogues';
        }
        if (selectedTab === 'gorakhpur-cinema') {
          return v.title.toLowerCase().includes('gorakhpur') || 
                 v.title.toLowerCase().includes('movie') || 
                 v.title.toLowerCase().includes('action') ||
                 v.category === 'action';
        }
        if (selectedTab === 'vd-tyagi-courtroom') {
          return v.title.toLowerCase().includes('inspector') || 
                 v.title.toLowerCase().includes('tyagi') || 
                 v.title.toLowerCase().includes('legal') || 
                 v.title.toLowerCase().includes('protest') ||
                 v.isSpecial7th;
        }
        if (selectedTab === 'bhojpuri-music') {
          return v.category === 'music' || 
                 v.title.toLowerCase().includes('music') || 
                 v.title.toLowerCase().includes('song') || 
                 v.title.toLowerCase().includes('ed sheeran');
        }
        return true;
      });

      // If category has matches, show them; otherwise retain full list
      if (filtered.length > 0) {
        list = filtered;
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((v) =>
        v.title.toLowerCase().includes(q) ||
        v.channelTitle.toLowerCase().includes(q) ||
        v.description?.toLowerCase().includes(q) ||
        v.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list.slice(0, MAX_TOTAL_VIDEOS);
  }, [assembledVideos, selectedTab, searchQuery]);

  // Handle tab selection
  const handleSelectTab = (tabId: string) => {
    setSelectedTab(tabId);
    if (tabId === 'all') {
      setSearchQuery('');
    }
  };

  // Handle video sharing
  const handleShareVideo = (video: VideoItem) => {
    navigator.clipboard?.writeText(`https://www.youtube.com/watch?v=${video.id}`);
    alert(`Link copied: "${video.title}"`);
  };

  // Handle new custom video upload
  const handleAddVideo = (newVideo: VideoItem) => {
    setCustomVideos((prev) => [...prev, newVideo]);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex flex-col font-['Roboto',sans-serif]">
      {/* Top YouTube Header */}
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSoundboard={() => setIsSoundboardOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenNotifications={() => {
          setIsNotificationsOpen(true);
          setUnreadNotifications(0);
        }}
        unreadNotifications={unreadNotifications}
      />

      {/* Main Layout (Sidebar + Content Stream) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Fixed Left Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          selectedTab={selectedTab}
          onSelectTab={handleSelectTab}
        />

        {/* Right Scrollable Content Pane */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-3.5rem)] flex flex-col custom-scrollbar">
          {/* Top Banner */}
          <BhojpuriBanner />

          {/* Video Grid (Strictly 4 videos per row layout, maximum 20 videos total, clicking any video opens YouTube in new tab) */}
          <div className="flex-1 pt-2">
            {displayedVideos.length > 0 ? (
              <VideoGrid
                videos={displayedVideos}
                onShare={handleShareVideo}
              />
            ) : (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center mx-auto text-red-500">
                  <Flame className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">No Videos Found</h3>
                <p className="text-sm text-[#888] max-w-md mx-auto">
                  Try another search query or reset the search.
                </p>
                <button
                  onClick={() => {
                    setSelectedTab('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Ravi Kishan Soundboard Modal */}
      <RaviSoundboard
        isOpen={isSoundboardOpen}
        onClose={() => setIsSoundboardOpen(false)}
      />

      {/* Video Upload Modal */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddVideo={handleAddVideo}
      />

      {/* Bhojpuri Notifications Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onClear={() => setUnreadNotifications(0)}
      />
    </div>
  );
}
