import React, { useState } from "react";
import { X, CheckCircle, Phone, User, ShieldCheck } from "lucide-react";
import { PricingPlan } from "../types";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
  isTrialOnly?: boolean;
}

export default function RegisterModal({ isOpen, onClose, selectedPlan, isTrialOnly = false }: RegisterModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedPassId, setGeneratedPassId] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Generate a beautiful premium pass code
    const randomCode = "FJ-" + Math.floor(100000 + Math.random() * 900000);
    setGeneratedPassId(randomCode);
    setIsSubmitted(true);
    setDownloadSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded bg-[#0A0A0A] border border-white/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded bg-surface-tint/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded bg-secondary-container/10 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#000000] uppercase bg-surface-tint px-2.5 py-0.5 rounded font-mono">
                {isTrialOnly ? "PREMIUM PROTOCOL" : "ELITE ENLISTMENT"}
              </span>
              <h3 className="mt-4 font-headline text-3xl font-black text-white uppercase tracking-tighter leading-none">
                {isTrialOnly ? "REQUEST TRIAL" : "SECURE MEMB."}
              </h3>
              <p className="text-xs text-white/60 mt-2 font-sans">
                {isTrialOnly 
                  ? "Experience the highest-calibre coaching and biomechanical infrastructure in Narsinghpur."
                  : "Welcome to the tier of absolute commitment. Finalize your details below."}
              </p>
            </div>

            {selectedPlan && (
              <div className="p-4 rounded bg-zinc-950/80 border border-white/10 flex justify-between items-center">
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Selected Tier</p>
                  <p className="text-sm font-bold text-white font-headline uppercase">{selectedPlan.name} Membership</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Rate</p>
                  <p className="text-base font-black text-surface-tint">₹{selectedPlan.price.toLocaleString()}</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2 font-sans flex items-center gap-1.5 font-mono">
                  <User className="w-3.5 h-3.5 text-surface-tint" /> FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full bg-zinc-950 border border-white/20 rounded px-4 py-3 text-white focus:border-surface-tint focus:ring-1 focus:ring-surface-tint outline-none transition-all placeholder:text-white/20 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2 font-sans flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" /> CONTACT NUMBER
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-zinc-950 border border-white/20 rounded px-4 py-3 text-white focus:border-surface-tint focus:ring-1 focus:ring-surface-tint outline-none transition-all placeholder:text-white/20 font-sans"
                />
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded bg-zinc-950/40 border border-white/5 text-[10px] text-white/40 leading-relaxed font-sans">
              <ShieldCheck className="w-4 h-4 text-surface-tint shrink-0 mt-0.5" />
              <span>By entering your information, you agree to secure your slot. We will confirm your session time at Narsinghpur main facility via phone call.</span>
            </div>

            <button
              type="submit"
              className="w-full bg-surface-tint text-black font-black font-headline text-xs uppercase tracking-widest py-4 rounded hover:shadow-[0_0_15px_rgba(204,255,0,0.45)] transition-all duration-300"
            >
              {isTrialOnly ? "Generate Free Trial Pass" : "Confirm & Download Pass"}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-surface-tint/20 text-surface-tint mb-2">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-headline text-3xl font-black text-white uppercase tracking-tighter leading-none">
                WELCOME TO ELITE
              </h3>
              <p className="text-[10px] text-surface-tint font-bold uppercase tracking-widest font-mono">
                PASS GENERATED SUCCESSFULLY
              </p>
              <p className="text-xs text-white/60 max-w-sm mx-auto font-sans">
                Show this digital ticket to the front desk at Main Road, Narsinghpur, to activate your training suite access.
              </p>
            </div>

            {/* Digital Pass Presentation resembling original style premium boarding ticket */}
            <div className="mx-auto max-w-sm p-6 rounded bg-[#101010] border border-white/10 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 h-full w-1 bg-surface-tint" />
              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                <div>
                  <h4 className="text-[10px] text-white/40 font-mono tracking-widest">EST. 2026</h4>
                  <p className="font-headline text-lg font-black text-white uppercase tracking-tighter">
                    METRIC&copy; JUNCTION
                  </p>
                </div>
                <div className="bg-surface-tint text-black px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider font-mono">
                  VERIFIED
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs mb-4 font-sans">
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Passholder</p>
                  <p className="font-bold text-white uppercase">{name}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Phone</p>
                  <p className="font-bold text-white font-mono">{phone}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Tier Category</p>
                  <p className="font-bold text-surface-tint uppercase">{selectedPlan ? selectedPlan.name : "Free Trial Pass"}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest font-mono">Issued Date</p>
                  <p className="font-bold text-white font-mono">2026.06.06</p>
                </div>
              </div>

              <div className="border-t border-dashed border-white/20 pt-4 flex flex-col items-center">
                <div className="bg-white p-2.5 rounded flex flex-col items-center gap-1.5 w-full">
                  {/* Faux Barcode lines */}
                  <div className="w-full h-8 flex items-stretch gap-0.5 justify-center opacity-90 overflow-hidden bg-white">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-black" 
                        style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2)}px` }} 
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.3em] font-black text-black">
                    {generatedPassId}
                  </span>
                </div>
                <span className="text-[9px] text-white/30 uppercase mt-3 tracking-widest italic font-sans">
                  * THE GRIND NEVER DISMISSES *
                </span>
              </div>
            </div>

            {downloadSuccess && (
              <p className="text-[11px] font-mono font-bold text-surface-tint uppercase">
                Success! Digital ticket passcode [{generatedPassId}] saved to device
              </p>
            )}

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setDownloadSuccess(true);
                }}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded font-black font-headline text-xs uppercase tracking-wider transition-all"
              >
                Download PDF
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-surface-tint text-black py-3 rounded font-black font-headline text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(204,255,0,0.45)] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
