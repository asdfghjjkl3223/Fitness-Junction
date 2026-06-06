import React from "react";
import { Star, Award, ChevronRight } from "lucide-react";
import { trainers } from "../data";
import { Trainer } from "../types";

interface TrainerModuleProps {
  onBookTrainer: (trainer: Trainer) => void;
}

export default function TrainerModule({ onBookTrainer }: TrainerModuleProps) {
  return (
    <section id="trainers" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Group */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-[0.3em] text-surface-tint uppercase bg-surface-tint/10 px-3 py-1 rounded">
              ELITE STAFF BLUEPRINT
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              MEET THE <span className="text-outline-strong text-white/50 block sm:inline">TITANS</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl">
              Backed by gold-standard physical certifications and seasoned in competitive arenas. Expert coaching to accelerate your biomechanical peaks.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-white/60 uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded">
              9+ GOLD CLASS TRAINERS DISPATCHED
            </span>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded overflow-hidden bg-zinc-950/40 border border-white/10 flex flex-col justify-between hover:border-surface-tint/40 transition-all duration-300"
            >
              {/* Photo Frame Container with grayscale highlights */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border-b border-white/10 select-none">
                <img
                  alt={trainer.name}
                  src={trainer.image}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                
                {/* Float tag overlays */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/80 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono font-bold text-white uppercase tracking-wider border border-white/10">
                  <Star className="w-3 h-3 text-surface-tint fill-surface-tint" />
                  <span>{trainer.stats.rating} OVERALL</span>
                </div>

                <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-surface-tint text-black px-2.5 py-1 rounded text-[9px] font-headline font-black uppercase tracking-wider">
                  {trainer.experience} DEP.
                </div>

                {/* Trainer identity details on the bottom overlay inside frame */}
                <div className="absolute bottom-4 left-6 space-y-1">
                  <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-sans font-bold text-surface-tint uppercase tracking-wider">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Descriptions & Specs details */}
              <div className="p-6 space-y-4 bg-zinc-950/20 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-widest mt-1">Specialty Sector Description</p>
                  <p className="text-[13px] font-sans text-white/75 italic mt-1.5 font-medium leading-relaxed">
                    "{trainer.specialty}"
                  </p>
                </div>

                {/* Inline Trainer Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs font-sans">
                  <div>
                    <span className="block text-[9px] text-white/30 uppercase tracking-widest font-mono">Active Clients</span>
                    <span className="block font-bold mt-1 text-white font-mono">{trainer.stats.clients}+ Active</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-white/30 uppercase tracking-widest font-mono">Status Status</span>
                    <span className="block font-bold mt-1 text-surface-tint flex items-center gap-1 font-mono uppercase text-[10px]">
                      <Award className="w-3.5 h-3.5 shrink-0" /> Core Titan
                    </span>
                  </div>
                </div>

                {/* CTA Action button triggering signups with this target */}
                <div className="pt-2">
                  <button
                    onClick={() => onBookTrainer(trainer)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-surface-tint hover:text-black border border-white/15 text-white rounded font-headline text-xs uppercase tracking-[0.15em] font-black transition-all duration-300 cursor-pointer"
                  >
                    <span>Schedule Free Session</span>
                    <ChevronRight className="w-4 h-4 text-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
