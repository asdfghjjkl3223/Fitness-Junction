import React from "react";
import { ArrowRight, Play, Trophy } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image with Cinematic Gradients & Shadows */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Cinematic premium luxury gym"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzAll86fkaOnqY_0VdrLZ8-R2DF7_SO3W5gdUev5knj4iUIFx6i861BPRsVioRP2Uo7PjzQh9hJCuH9j1LKz29VRo-IVL1PXL8vyPqMtuTdgD7h-iJAX9O18ZhQpP8OvjmQAfkanlMD4-vBmH3ePNNyUrP2SlwfXGFL9bDQdEaNLWcT0choFfQCKwyhRnDiCByRDMuttwUrksSAaF01jNBs2TdSKvHXBtzLIL0pUfXunygQbOT6bT7eK3dtfLz8EgTSynDaR-xLBQ"
          className="w-full h-full object-cover opacity-35 transform scale-102"
        />
        {/* Shadow overlays and vertical fades to preserve content legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-95" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Decorative Vertical Element - Bold Typography Signature */}
        <div className="absolute -left-4 top-1/3 hidden xl:block text-[10px] uppercase tracking-[0.43em] rotate-90 origin-left text-white/35 font-mono select-none">
          EST. MMXXIV &nbsp;//&nbsp; NARSINGHPUR
        </div>

        {/* Left column: Typography headlines and CTA actions */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-surface-tint font-sans text-[10px] uppercase tracking-[0.25em] select-none">
            <Trophy className="w-3 h-3 text-surface-tint shrink-0" />
            <span>NARSINGHPUR'S ELITE BENCHMARK</span>
          </div>

          <h1 className="font-headline text-6xl sm:text-7xl lg:text-[100px] font-black text-white leading-[0.88] tracking-tighter uppercase select-none">
            FITNESS<br />
            <span className="text-outline-tint filter drop-shadow-[0_0_15px_rgba(204,255,0,0.1)]">JUNCTION</span>
          </h1>

          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-end gap-8 pt-2">
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-white/70 font-sans">
              Transforming raw performance through biomechanically supreme infrastructure and curated expert coaching. Experience luxury conditioning on a championship scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={onJoinClick}
              className="group bg-surface-tint hover:bg-white text-black px-8 py-4 rounded font-headline text-xs uppercase tracking-[0.15em] font-black hover:shadow-[0_0_30px_rgba(204,255,0,0.45)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onTrialClick}
              className="glass-panel text-white hover:bg-white/15 px-8 py-4 rounded font-headline text-xs uppercase tracking-[0.15em] font-bold active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Free Trial</span>
            </button>
          </div>
        </div>

        {/* Right column: Tour card with distinct circular badge join element */}
        <div className="hidden lg:flex flex-1 justify-center relative">
          {/* Subtle decoration gradient */}
          <div className="absolute -inset-10 bg-gradient-to-r from-surface-tint/5 to-transparent blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative group p-4 rounded-xl glass-panel max-w-sm overflow-hidden transition-all duration-500 hover:border-surface-tint/30">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-zinc-900 border border-white/5">
              <img
                alt="Gym equipment preview"
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                <button 
                  onClick={onTrialClick}
                  className="w-16 h-16 rounded-full bg-surface-tint text-black flex items-center justify-center hover:scale-110 active:scale-90 transition-transform duration-300 group-hover:neon-glow cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-black ml-1" />
                </button>
              </div>
            </div>
            <div className="mt-4 text-left">
              <p className="text-[10px] font-bold text-surface-tint uppercase tracking-[0.2em] font-mono">Inside the Junction</p>
              <h4 className="text-white font-headline text-sm font-black mt-1 uppercase tracking-tight">Tour the Facility</h4>
              <p className="text-xs text-white/50 mt-1 leading-relaxed">
                Take a 60-second visual tour of our specialized conditioning zones and biomechanical platforms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
