import React from 'react';
import { Flame } from 'lucide-react';

export const BhojpuriBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-950/60 via-[#181818] to-red-950/60 border-b border-[#252525] px-4 py-2 text-xs flex items-center justify-between text-[#ccc] select-none">
      <div className="flex items-center gap-2">
        <span className="bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded flex items-center gap-1 shadow">
          <Flame className="w-3 h-3" /> OFFICIAL
        </span>
        <span className="font-medium text-white truncate text-xs">
          Ravi Kishan Tube • Zindagi Jhandwa Phir Bhi Ghamandwa
        </span>
      </div>
      <span className="text-[11px] text-[#888] hidden sm:inline">
        Bhojpuri Cinema & Entertainment Hub
      </span>
    </div>
  );
};
