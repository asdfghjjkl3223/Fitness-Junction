import React, { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import BmiCalculator from "./components/BmiCalculator";
import Memberships from "./components/Memberships";
import TrainerModule from "./components/TrainerModule";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";
import { PricingPlan, Trainer } from "./types";
import { pricingPlans } from "./data";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isTrialOnly, setIsTrialOnly] = useState(false);

  // Trigger registration for the popular package or general membership
  const handleJoinNow = () => {
    const popular = pricingPlans.find((p) => p.isPopular) || pricingPlans[0];
    setSelectedPlan(popular);
    setIsTrialOnly(false);
    setIsModalOpen(true);
  };

  // Trigger trial specific modal
  const handleTrialClick = () => {
    setSelectedPlan(null);
    setIsTrialOnly(true);
    setIsModalOpen(true);
  };

  // Trigger a specific active plan selective click
  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsTrialOnly(false);
    setIsModalOpen(true);
  };

  const handleBookTrainer = (trainer: Trainer) => {
    setSelectedPlan({
      id: "trainer-coaching",
      name: `Private coaching session with ${trainer.name}`,
      price: 0,
      period: "session",
      features: [`Direct expert feedback by coach ${trainer.name}`, "Personal bio-mechanical form correction", "Complimentary shaker & energy drink"],
    });
    setIsTrialOnly(false);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background text-on-background font-sans antialiased min-h-screen relative selection:bg-surface-tint selection:text-black scroll-smooth">
      
      {/* Sticky header decoration */}
      <Header 
        onJoinClick={handleJoinNow} 
        onTrialClick={handleTrialClick} 
      />

      {/* Main Container sections element grids */}
      <main className="space-y-0">
        <Hero 
          onJoinClick={handleJoinNow} 
          onTrialClick={handleTrialClick} 
        />
        
        <Stats />
        
        <WhyUs />
        
        <Services />
        
        <BmiCalculator />
        
        <Memberships onSelectPlan={handleSelectPlan} />
        
        <TrainerModule onBookTrainer={handleBookTrainer} />
      </main>

      {/* Persistent global footer */}
      <Footer />

      {/* Digital enrollment pass generation ticket modal */}
      <RegisterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
        isTrialOnly={isTrialOnly}
      />

      {/* Floating Interactive Widget Channels */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Telephone Call Back Dial */}
        <a 
          href="tel:+918085552053"
          className="w-14 h-14 bg-secondary-container rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,92,28,0.5)] text-white group relative"
          title="Call Facility Support"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3 bg-zinc-900 border border-white/10 text-white text-[10px] font-bold font-headline uppercase tracking-widest px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Call +91 80855 52053
          </span>
        </a>

        {/* Custom WhatsApp Hub */}
        <a 
          href="https://wa.me/918085552053"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] text-white group relative"
          title="WhatsApp Quick chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-zinc-900 border border-white/10 text-white text-[10px] font-bold font-headline uppercase tracking-widest px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>

    </div>
  );
}
