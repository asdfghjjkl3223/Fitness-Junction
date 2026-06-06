import React, { useState, useEffect } from "react";
import { Users, Shield, Maximize2 } from "lucide-react";
import { gymStats } from "../data";

export default function Stats() {
  const [memberCount, setMemberCount] = useState(0);
  const [trainerCount, setTrainerCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);

  useEffect(() => {
    // Smooth scroll numerical animation helper
    let start = 0;
    const duration = 1500; // milliseconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth dynamic incrementation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setMemberCount(Math.floor(easedProgress * gymStats.members));
      setTrainerCount(Math.floor(easedProgress * gymStats.trainers));
      setSpaceCount(Math.floor(easedProgress * gymStats.space));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-12 bg-black border-y border-white/10 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Member Stat */}
          <div className="py-4 md:py-2 flex flex-col items-center justify-center space-y-1">
            <div className="text-[10px] text-white/40 uppercase tracking-[0.25em] font-mono mb-1">
              CURRENT FOCUS // MEMBERSHIP
            </div>
            <div className="font-headline text-5xl md:text-[64px] text-surface-tint font-black tracking-tighter select-none leading-none tabular-nums">
              {memberCount}+
            </div>
            <div className="font-headline text-[10px] text-white/80 uppercase tracking-widest font-bold">
              Active Operators
            </div>
          </div>

          {/* Trainer Stat */}
          <div className="py-4 md:py-2 flex flex-col items-center justify-center space-y-1">
            <div className="text-[10px] text-white/40 uppercase tracking-[0.25em] font-mono mb-1">
              SUPERIOR RESOURCE // COACHING
            </div>
            <div className="font-headline text-5xl md:text-[64px] text-surface-tint font-black tracking-tighter select-none leading-none tabular-nums">
              {trainerCount}+
            </div>
            <div className="font-headline text-[10px] text-white/80 uppercase tracking-widest font-bold">
              Gold Certified Titans
            </div>
          </div>

          {/* Space Metric */}
          <div className="py-4 md:py-2 flex flex-col items-center justify-center space-y-1">
            <div className="text-[10px] text-white/40 uppercase tracking-[0.25em] font-mono mb-1">
              TOTAL SPEC // FOOTPRINT
            </div>
            <div className="font-headline text-5xl md:text-[64px] text-surface-tint font-black tracking-tighter select-none leading-none tabular-nums">
              {spaceCount.toLocaleString()}
            </div>
            <div className="font-headline text-[10px] text-white/80 uppercase tracking-widest font-bold">
              Sq.ft Elite Space Area
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
