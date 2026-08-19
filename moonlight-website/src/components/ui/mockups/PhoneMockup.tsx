import { ReactNode } from "react";

export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19.5]">
      {/* Device Frame */}
      <div className="absolute inset-0 rounded-[48px] bg-[#1a1b1e] border-[8px] border-[#2c2d30] shadow-2xl shadow-black/80 overflow-hidden ring-1 ring-white/10 flex flex-col">
        {/* Dynamic Island / Camera cutout */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-24 h-6 bg-black rounded-b-3xl" />
        </div>

        {/* Screen content area */}
        <div className="flex-1 w-full h-full bg-[#0d0e12] relative overflow-hidden flex flex-col">
          {/* Status bar mockup */}
          <div className="h-10 w-full flex justify-between items-center px-6 pt-2 shrink-0 z-40 relative">
            <span className="text-[10px] font-medium text-white/80">9:41</span>
            <div className="flex gap-1.5 items-center">
              {/* Cellular */}
              <div className="flex gap-0.5 items-end h-2.5">
                <div className="w-[2px] h-[4px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[6px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[8px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[10px] bg-white/80 rounded-sm"></div>
              </div>
              {/* WiFi */}
              <svg width="12" height="10" viewBox="0 0 16 12" fill="none" className="text-white/80 opacity-90">
                <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="currentColor"/>
                <path d="M11.5 6.5C10.5 5.5 9.3 5 8 5C6.7 5 5.5 5.5 4.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 4C12.3 2.3 10.2 1.5 8 1.5C5.8 1.5 3.7 2.3 2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-white/40 rounded-[3px] p-[1px] flex relative">
                <div className="w-[80%] h-full bg-white/90 rounded-[1px]"></div>
                <div className="absolute -right-[3px] top-[2px] w-[2px] h-[4px] bg-white/40 rounded-r-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Main injected content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar relative">
            {children}
          </div>

          {/* Android navigation bar mockup */}
          <div className="h-5 shrink-0 flex justify-center items-center pb-1 z-40 relative bg-gradient-to-t from-black/50 to-transparent">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Glare effect */}
      <div className="absolute inset-0 rounded-[48px] pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 20%)" }}></div>
    </div>
  );
}
