import React, { useState, useEffect } from "react";
import { Dumbbell, Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Header({ onJoinClick, onTrialClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Our Process", href: "#why-us" },
    { label: "Core Zones", href: "#services" },
    { label: "Spec Analysis", href: "#bmi" },
    { label: "Commitment", href: "#membership" },
    { label: "Coaches", href: "#trainers" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 border-b border-white/15 py-3.5 shadow-2xl"
          : "bg-transparent border-b border-white/10 py-5"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-12 max-w-7xl mx-auto">
        {/* Logo matching metric brand style */}
        <a
          href="#home"
          className="font-headline text-lg md:text-xl font-black tracking-tight text-white flex items-center gap-2 hover:text-surface-tint transition-colors uppercase"
        >
          <Dumbbell className="text-surface-tint w-5.5 h-5.5" />
          <span>METRIC&copy; JUNCTION</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/70 hover:text-surface-tint transition-colors font-sans text-[10px] uppercase tracking-[0.2em] font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Widgets */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+918085552053"
            className="flex items-center gap-1.5 text-white/50 font-sans text-[10px] hover:text-surface-tint transition-colors uppercase tracking-[0.18em] font-bold"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 80855 52053</span>
          </a>
          <button
            onClick={onJoinClick}
            className="bg-surface-tint hover:bg-white text-black font-headline font-black text-[10px] uppercase tracking-widest px-5 py-2 rounded hover:shadow-[0_0_15px_rgba(204,255,0,0.45)] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Join Now
          </button>
          
          {/* Decorative Lang Tag directly matching Metric style layout */}
          <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-[9px] tracking-widest font-mono text-white/40">
            EN
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+918085552053"
            className="flex items-center justify-center p-2 rounded border border-surface-tint/30 text-surface-tint hover:bg-surface-tint/10"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 flex flex-col gap-5 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-surface-tint text-xs font-sans uppercase tracking-[0.2em] font-medium py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onTrialClick();
              }}
              className="w-full glass-panel hover:bg-white/5 py-3 text-white text-xs font-sans uppercase tracking-widest rounded font-medium"
            >
              Book Free Trial
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full bg-surface-tint text-black py-3 text-xs font-sans uppercase tracking-widest rounded font-bold hover:neon-glow"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
