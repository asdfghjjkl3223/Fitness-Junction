import React from "react";
import { Check, X, Sparkles } from "lucide-react";
import { pricingPlans } from "../data";
import { PricingPlan } from "../types";

interface MembershipsProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function Memberships({ onSelectPlan }: MembershipsProps) {
  return (
    <section id="membership" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading Panel */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-surface-tint uppercase bg-surface-tint/10 px-3 py-1 rounded">
            MEMBERSHIP ENLISTMENT
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            JOIN THE <span className="text-outline-strong text-white/50 block sm:inline">ELITE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            Choose the subscription tier constructed for your level of commitment and athletic aspirations.
          </p>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded overflow-hidden items-stretch">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between p-8 relative bg-[#0A0A0A] transition-all duration-300 ${
                  plan.isPopular
                    ? "ring-1 ring-surface-tint/40 z-10"
                    : "hover:bg-zinc-900/40"
                }`}
              >
                {/* Popularity Badge Overlay */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-surface-tint text-black font-headline text-[9px] font-black uppercase px-2.5 py-1 rounded flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-2.5 h-2.5 fill-black" />
                    <span>Popular Selection</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Accent Label */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono text-white/35 uppercase tracking-widest">
                      PACKAGE TIER SELECT
                    </div>
                    <h3 className="font-headline text-xl font-black text-white uppercase tracking-tight">
                      {plan.name} Package
                    </h3>
                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="font-headline text-4xl sm:text-5xl font-black text-white">
                        ₹{plan.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-sans text-white/40">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Breakdown Lists */}
                  <div className="border-t border-white/10 pt-6">
                    <ul className="space-y-4 font-sans text-xs sm:text-sm">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-white/80">
                          <Check className="w-4 h-4 text-surface-tint shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}

                      {/* Not available features */}
                      {plan.notFeatures?.map((unfeat, ufIdx) => (
                        <li key={ufIdx} className="flex items-start gap-2.5 text-white/20 line-through">
                          <X className="w-4 h-4 shrink-0 mt-0.5 text-white/15" />
                          <span>{unfeat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Confirm Selector Button */}
                <div className="pt-8 mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 rounded font-headline text-xs font-black uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer ${
                      plan.isPopular
                        ? "bg-surface-tint text-black hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.45)]"
                        : "glass-panel text-white hover:bg-white/10"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee stamp */}
        <div className="mt-12 text-center">
          <p className="text-xs text-white/40 max-w-lg mx-auto leading-relaxed">
            All plans provide access to top imported conditioning equipment at Narsinghpur, biometric analysis records, and climate-controlled luxury facility zones.
          </p>
        </div>

      </div>
    </section>
  );
}
