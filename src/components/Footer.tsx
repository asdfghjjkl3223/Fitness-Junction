import React, { useState } from "react";
import { Dumbbell, MapPin, Phone, Clock, Share2, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Metric Junction Narsinghpur",
        text: "The ultimate premium fitness destination with imported equipment & elite coaches.",
        url: window.location.href,
      }).catch(console.error);
    } else {
      // fallback copy
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Branding & Vision Column */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <a href="#home" className="font-headline text-xl font-black text-white flex items-center gap-2 uppercase tracking-tight">
            <Dumbbell className="text-surface-tint w-5.5 h-5.5" />
            <span>METRIC&copy; JUNCTION</span>
          </a>
          <p className="font-sans text-xs sm:text-sm text-white/50 max-w-sm leading-relaxed">
            Narsinghpur's premier fitness destination. Engineered for ambitious performers who demand absolute excellence in their training environments.
          </p>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-surface-tint hover:border-surface-tint transition-colors cursor-pointer relative"
              title="Share Page"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-surface-tint hover:border-surface-tint transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white hover:text-surface-tint hover:border-surface-tint transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {copiedLink && (
              <span className="text-[9px] font-mono font-bold text-surface-tint uppercase bg-surface-tint/10 px-2 py-1 rounded">
                Copied Link!
              </span>
            )}
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-headline text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
            Quick Navigation
          </h4>
          <ul className="space-y-3 font-sans text-xs sm:text-sm text-white/70">
            <li>
              <a href="#home" className="hover:text-surface-tint transition-colors">Home Base</a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-surface-tint transition-colors">Why The Grind</a>
            </li>
            <li>
              <a href="#services" className="hover:text-surface-tint transition-colors">Core Disciplines</a>
            </li>
            <li>
              <a href="#membership" className="hover:text-surface-tint transition-colors">Membership Selection</a>
            </li>
          </ul>
        </div>

        {/* Contact/Support Column */}
        <div>
          <h4 className="font-headline text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
            Physical Hub
          </h4>
          <ul className="space-y-4 font-sans text-xs sm:text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4.5 h-4.5 text-surface-tint shrink-0 mt-0.5" />
              <span>Main Road, Narsinghpur, Madhya Pradesh</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-surface-tint shrink-0" />
              <a href="tel:+918085552053" className="hover:text-surface-tint transition-colors">
                +91 80855 52053
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-surface-tint shrink-0" />
              <span>6:00 AM - 10:00 PM Daily</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center px-6">
        <p className="font-sans text-xs text-white/30">
          © {new Date().getFullYear()} METRIC JUNCTION. The Grind Never Stops. Powered by Cinematic Luxury.
        </p>
      </div>
    </footer>
  );
}
