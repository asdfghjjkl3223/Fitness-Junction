import React, { useState } from "react";
import { Scale, Activity, Check, HelpCircle, RefreshCw } from "lucide-react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{
    bmi: number;
    status: string;
    advice: string;
    colorClass: string;
    gaugePercent: number;
  } | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) return;

    // BMI Formula: weight (kg) / [height (m)]^2
    const heightInMeters = h / 100;
    const bmiVal = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));

    let status = "";
    let advice = "";
    let colorClass = "text-white";
    let gaugePercent = 0; // mapped between BMI 15 and 35

    if (bmiVal < 18.5) {
      status = "Underweight";
      advice = "Fuel your body! Consider high-quality protein intakes & strength routines to build muscle mass safely.";
      colorClass = "text-sky-400";
      // Map 15 to 18.5
      gaugePercent = Math.max(5, ((bmiVal - 15) / (35 - 15)) * 100);
    } else if (bmiVal >= 18.5 && bmiVal < 25) {
      status = "Normal Weight";
      advice = "Absolute Champion! You're in peak optimal range. Maintain the momentum with the Grind discipline!";
      colorClass = "text-surface-tint";
      // Map 18.5 to 25
      gaugePercent = ((bmiVal - 15) / (35 - 15)) * 100;
    } else if (bmiVal >= 25 && bmiVal < 30) {
      status = "Overweight";
      advice = "Time to sculpt! Combined resistance sessions & tailored cardio will target stored lipids effectively.";
      colorClass = "text-secondary-container";
      // Map 25 to 30
      gaugePercent = ((bmiVal - 15) / (35 - 15)) * 100;
    } else {
      status = "Obesity";
      advice = "Take action today! High intensity functional training & guided coaching can restore structural wellness.";
      colorClass = "text-red-500";
      // Map 30 to 35
      gaugePercent = Math.min(95, ((bmiVal - 15) / (35 - 15)) * 100);
    }

    setResult({
      bmi: bmiVal,
      status,
      advice,
      colorClass,
      gaugePercent: Math.min(100, Math.max(0, gaugePercent)),
    });
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <section id="bmi" className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left panel: form & results */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-surface-tint uppercase bg-surface-tint/10 px-3 py-1 rounded">
                INTERACTIVE DIAGNOSIS
              </span>
              <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                CALCULATE YOUR <span className="text-outline-strong text-white/50 block sm:inline">BMI</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/60 max-w-md">
                Knowing your Body Mass Index is the first key step towards your tailored athletic journey. Check your tier instantly.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded border border-white/10 relative overflow-hidden">
              <form onSubmit={calculateBmi} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline text-xs font-bold uppercase tracking-wider text-white mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="any"
                      required
                      placeholder="e.g. 75"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-zinc-950/80 border border-white/20 rounded px-4 py-3 text-white focus:border-surface-tint focus:ring-1 focus:ring-surface-tint outline-none transition-all placeholder:text-white/20 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-headline text-xs font-bold uppercase tracking-wider text-white mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      step="any"
                      required
                      placeholder="e.g. 180"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-zinc-950/80 border border-white/20 rounded px-4 py-3 text-white focus:border-surface-tint focus:ring-1 focus:ring-surface-tint outline-none transition-all placeholder:text-white/20 font-sans"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-surface-tint hover:bg-white text-black font-headline font-black text-xs uppercase tracking-widest py-4 rounded hover:neon-glow transition-all duration-300 cursor-pointer"
                  >
                    Calculate BMI
                  </button>
                  {result && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 rounded bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
                      title="Reset Calculator"
                    >
                      <RefreshCw className="w-4 h-4 animate-spin-slow" />
                    </button>
                  )}
                </div>
              </form>

              {/* Dynamic Animated Status Display */}
              {result && (
                <div className="mt-6 p-6 rounded bg-zinc-900 border border-white/10 text-center space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center text-xs text-white/40 font-mono">
                    <span>DIAGNOSIS SYSTEM</span>
                    <span>100% COMPLETE</span>
                  </div>

                  <div>
                    <div className="font-headline text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">
                      Your Body Mass Index Value
                    </div>
                    <div className="font-headline text-5xl font-black text-white">
                      {result.bmi}
                    </div>
                    <div className={`font-headline text-sm font-black uppercase tracking-wider mt-1 ${result.colorClass}`}>
                      {result.status}
                    </div>
                  </div>

                  {/* High Quality Visual gauge bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="w-full bg-zinc-950 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-surface-tint to-secondary-container transition-all duration-1000 ease-out"
                        style={{ width: `${result.gaugePercent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-white/30 font-mono">
                      <span>BMI 15</span>
                      <span>PEAK</span>
                      <span>BMI 35</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-white/60 leading-relaxed max-w-sm mx-auto">
                    {result.advice}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right panel: Static ranges description side list */}
          <div className="relative rounded p-8 bg-zinc-950/40 border border-white/10 overflow-hidden flex flex-col justify-center min-h-[380px]">
            {/* Background absolute glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded border border-white/10 bg-white/5 text-surface-tint flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tight">
                  Standard BMI Categories
                </h3>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                  <span className="text-white/70 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                    Underweight
                  </span>
                  <span className="font-bold text-white font-mono">&lt; 18.5</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-2.5 bg-surface-tint/5 px-2 py-1 rounded">
                  <span className="text-surface-tint font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded bg-surface-tint" />
                    Normal Weight
                  </span>
                  <span className="font-bold text-surface-tint font-mono">18.5 - 24.9</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                  <span className="text-white/70 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-container" />
                    Overweight
                  </span>
                  <span className="font-bold text-white font-mono">25 - 29.9</span>
                </div>

                <div className="flex justify-between items-center pb-1">
                  <span className="text-white/70 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    Obesity Range
                  </span>
                  <span className="font-bold text-white font-mono">≥ 30</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[11px] text-white/40 leading-relaxed font-sans">
                  *Disclaimer: Body Mass Index (BMI) is a standardized proxy for tissue mass. It does not isolate absolute volumetric body fat ratios versus skeletal lean muscle gains.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
