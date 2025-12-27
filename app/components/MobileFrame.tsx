"use client";

import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  title?: string;
  showOfflineIndicator?: boolean;
}

export default function MobileFrame({ 
  children, 
  title = "BuildTrack",
  showOfflineIndicator = false 
}: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      {/* Device Frame */}
      <div className="mobile-frame relative flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-50" />
        
        {/* Screen Content */}
        <div className="flex-1 overflow-hidden bg-[#f6f7f8] pt-8">
          {/* Offline Indicator */}
          {showOfflineIndicator && (
            <div className="bg-amber-50 border-b border-amber-200 px-4 py-1.5 flex items-center justify-center gap-1.5 animate-fade-in">
              <span className="material-symbols-outlined text-amber-600 text-sm offline-pulse">wifi_off</span>
              <span className="text-amber-700 text-xs font-medium">Offline Mode - Data will sync later</span>
            </div>
          )}
          
          {/* Page Content */}
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full" />
      </div>
      
      {/* Flow Navigation - Fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all"
        >
          <span className="material-symbols-outlined text-lg">home</span>
          <span className="text-sm font-medium">All Roles</span>
        </a>
      </div>
    </div>
  );
}
