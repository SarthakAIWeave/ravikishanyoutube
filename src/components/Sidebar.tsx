import React from 'react';
import { 
  Home, 
  Flame, 
  Volume2,
  Music2,
  Swords,
  Smile,
  Mic2,
  Radio,
  ExternalLink,
  Sparkles,
  PlaySquare,
  Video,
  Film,
  GraduationCap,
  Tv,
  Hammer,
  Scale,
  Clapperboard,
  Sparkle
} from 'lucide-react';
import { SIDEBAR_TABS } from '../data/videos';

interface SidebarProps {
  isOpen: boolean;
  selectedTab: string;
  onSelectTab: (tabId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  selectedTab,
  onSelectTab
}) => {
  // Map custom icon strings to Lucide components
  const renderIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Tv':
        return <Tv className={className} />;
      case 'Radio':
        return <Radio className={className} />;
      case 'Hammer':
        return <Hammer className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'Clapperboard':
        return <Clapperboard className={className} />;
      case 'Scale':
        return <Scale className={className} />;
      case 'Music2':
        return <Music2 className={className} />;
      case 'Home':
        return <Home className={className} />;
      case 'Volume2':
        return <Volume2 className={className} />;
      case 'Swords':
        return <Swords className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'Mic2':
        return <Mic2 className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
  };

  if (!isOpen) {
    // Mini Sidebar (collapsed mode)
    return (
      <aside className="w-18 bg-[#0f0f0f] border-r border-[#272727] py-3 flex flex-col items-center gap-4 shrink-0 z-30 select-none">
        <button
          onClick={() => onSelectTab('all')}
          className={`flex flex-col items-center gap-1 p-2 rounded-xl text-center w-14 transition-colors cursor-pointer ${
            selectedTab === 'all' ? 'text-white bg-[#272727]' : 'text-[#aaaaaa] hover:bg-[#202020] hover:text-white'
          }`}
          title="Home"
        >
          <Home className="w-5 h-5 text-red-500" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        {SIDEBAR_TABS.slice(0, 5).map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-center w-14 transition-colors cursor-pointer group ${
              selectedTab === tab.id ? 'text-white bg-[#272727]' : 'text-[#aaaaaa] hover:bg-[#202020] hover:text-white'
            }`}
            title={tab.title}
          >
            <span className={selectedTab === tab.id ? 'text-red-500' : 'text-red-400 group-hover:text-red-300'}>
              {renderIcon(tab.iconName)}
            </span>
            <span className="text-[9px] font-medium leading-tight truncate w-12">{tab.title.split(' ')[0]}</span>
          </button>
        ))}
      </aside>
    );
  }

  // Expanded Sidebar
  return (
    <aside className="w-64 bg-[#0f0f0f] border-r border-[#272727] h-[calc(100vh-3.5rem)] overflow-y-auto shrink-0 px-3 py-3 select-none custom-scrollbar">
      {/* Primary Section */}
      <div className="space-y-1 pb-3 border-b border-[#272727]">
        <button
          id="tab-home"
          onClick={() => onSelectTab('all')}
          className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
            selectedTab === 'all'
              ? 'bg-[#272727] text-white font-semibold'
              : 'text-[#f1f1f1] hover:bg-[#222222]'
          }`}
        >
          <Home className="w-5 h-5 text-red-500" />
          <span>Home</span>
        </button>
      </div>

      {/* Custom Desi & Bhojpuri Channels / Classes Section */}
      <div className="py-3 border-b border-[#272727]">
        <div className="px-3 pb-2 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#aaaaaa]">
            Desi Channels & Academies
          </span>
        </div>

        <div className="space-y-1">
          {SIDEBAR_TABS.map((tab) => {
            const isCurrent = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all cursor-pointer group ${
                  isCurrent
                    ? 'bg-[#272727] text-white font-bold'
                    : 'text-[#e5e5e5] hover:bg-[#222222]'
                }`}
                title={tab.title}
              >
                <div className="flex items-center gap-3.5 truncate">
                  <span className={isCurrent ? 'text-red-500' : 'text-red-400 group-hover:text-red-300'}>
                    {renderIcon(tab.iconName)}
                  </span>
                  <span className="truncate text-[13px]">{tab.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="py-3 border-b border-[#272727]">
        <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-[#aaaaaa]">
          Subscriptions
        </div>
        <div className="space-y-1">
          <a 
            href="https://www.youtube.com/@NetflixIndiaOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 text-sm text-[#ddd] hover:bg-[#222] rounded-xl cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center">
              N
            </div>
            <span className="truncate text-xs">Netflix India</span>
          </a>

          <a 
            href="https://www.youtube.com/@BakchdCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 text-sm text-[#ddd] hover:bg-[#222] rounded-xl cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
              BC
            </div>
            <span className="truncate text-xs">Bakchd Coder</span>
          </a>

          <a 
            href="https://www.youtube.com/@gen-kaari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 text-sm text-[#ddd] hover:bg-[#222] rounded-xl cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
              G
            </div>
            <span className="truncate text-xs">Gen-kaari</span>
          </a>

          <a 
            href="https://www.youtube.com/@rajshamani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 text-sm text-[#ddd] hover:bg-[#222] rounded-xl cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
              RS
            </div>
            <span className="truncate text-xs">Raj Shamani</span>
          </a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 text-[11px] text-[#717171] space-y-1">
        <p className="font-semibold text-[#888]">Ravi Kishan Tube</p>
        <p className="text-[10px] text-[#666]">© 2026 Ravi Kishan Tube Inc.</p>
      </div>
    </aside>
  );
};
