import React from "react";
import { Dumbbell, Wind, Trees, Award } from "lucide-react";
import { generalFeatures } from "../data";

// Map string icon name from data.ts to Lucide Components
const iconMap: Record<string, React.ComponentType<any>> = {
  Dumbbell: Dumbbell,
  Wind: Wind,
  Trees: Trees,
  Award: Award,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-surface-tint uppercase bg-surface-tint/10 px-3 py-1 rounded">
            THE JUNCTION MANIFESTO
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            THE GRIND <span className="text-outline-strong text-white/50 block sm:inline">STANDARD</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            Engineered for high-fidelity performance, equipped for absolute biomechanical perfection. Explore the features that make our facility the ultimate destination.
          </p>
        </div>

        {/* Feature Grid with Bold Outlines and Sharp Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {generalFeatures.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Dumbbell;
            return (
              <div
                key={feature.id}
                className="bg-[#0A0A0A] p-8 group relative flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/40"
              >
                {/* Decorative border highlight indicator */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-surface-tint group-hover:w-full transition-all duration-300" />
                
                <div className="space-y-6">
                  {/* Decorative index specs indicator */}
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest flex justify-between items-center">
                    <span>SPEC // 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-tint opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded border border-white/15 bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-surface-tint/50 group-hover:scale-105">
                    <IconComponent className={`w-5 h-5 text-surface-tint ${feature.id.includes("climate") || feature.id.includes("trainers") ? "text-surface-tint" : "text-surface-tint"}`} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg sm:text-xl font-black text-white uppercase tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  <span>FACILITY ACTIVE</span>
                  <span className="group-hover:text-surface-tint transition-colors text-white/30">✓ SELECTED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
