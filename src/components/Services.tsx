import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { serviceZones } from "../data";
import { ServiceZone } from "../types";

export default function Services() {
  const [activeZone, setActiveZone] = useState<ServiceZone | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title with Subtitle label caps */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-surface-tint uppercase bg-surface-tint/10 px-3 py-1 rounded">
              SPECIALIZED ZONE MATRIX
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              CORE <span className="text-outline-strong text-white/50 block sm:inline">DISCIPLINES</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl">
              Strictly engineered zones tailored for maximum physical power output, premium recovery, and advanced metabolic conditioning.
            </p>
          </div>
          
          <div className="hidden md:block">
            <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded">
              SYSTEM CONFIG // ELITE RANGE SF-91
            </span>
          </div>
        </div>

        {/* Dynamic Service Cards Grid with crisp borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceZones.map((zone, idx) => (
            <div
              key={zone.id}
              className="relative rounded overflow-hidden group h-96 border border-white/10 bg-[#0A0A0A] flex flex-col justify-end p-6 md:p-8 hover:border-surface-tint/45 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveZone(activeZone?.id === zone.id ? null : zone)}
            >
              {/* Image backdrop with smart transition scaling */}
              <div className="absolute inset-0 z-0">
                <img
                  alt={zone.title}
                  src={zone.image}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              </div>

              {/* Card content absolute positioning helper */}
              <div className="relative z-10 w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`inline-block px-3 py-0.5 font-headline text-[9px] font-black uppercase tracking-[0.15em] rounded ${zone.badgeColor}`}>
                    {zone.badge}
                  </span>
                  
                  <span className="font-mono text-[10px] text-white/40">
                    S-0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-headline text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    {zone.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed max-w-md">
                    {zone.description}
                  </p>
                </div>

                {/* Inline specs viewer (interactive highlight toggle) */}
                <div className="pt-2">
                  <button 
                    className="flex items-center gap-1.5 text-xs text-surface-tint font-bold font-headline uppercase tracking-wider group-hover:text-white transition-colors"
                  >
                    <span>{activeZone?.id === zone.id ? "Close specification drawer" : "Open Zone Specifications"}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeZone?.id === zone.id ? "rotate-90 text-white" : ""}`} />
                  </button>
                </div>

                {/* Expandable specs list drawer with clean animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeZone?.id === zone.id ? "max-h-40 opacity-100 mt-4 pt-4 border-t border-white/10" : "max-h-0 opacity-0"}`}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 font-sans">
                    {zone.details?.map((detail, dKey) => (
                      <li key={dKey} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded bg-surface-tint shrink-0" />
                        <span className="line-clamp-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
