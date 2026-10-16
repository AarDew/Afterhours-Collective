"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbulb, LightbulbOff, ShieldCheck, Sliders, Layers } from "lucide-react";
import { mockIlluminatedFeature } from "@/data/mock-data";
import { Button } from "@/components/ui/Button";

export const IlluminatedFrameFeature: React.FC = () => {
  const [isLit, setIsLit] = useState(true);

  return (
    <section
      id="illuminated-feature"
      className="py-20 sm:py-28 bg-[#0E0E0E] border-b border-[#222222] relative overflow-hidden"
    >
      {/* Dynamic ambient background glow that adjusts with lit state */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isLit ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D94A36]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36] mb-2.5">
            {mockIlluminatedFeature.eyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[0.92]">
            {mockIlluminatedFeature.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D2C8] font-normal leading-relaxed">
            {mockIlluminatedFeature.subtitle}
          </p>
          <p className="mt-2 text-sm text-[#8D8D8D] leading-relaxed">
            {mockIlluminatedFeature.description}
          </p>
        </div>

        {/* Interactive Dual-State Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Interactive Frame Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* The Frame Display */}
            <div className="relative w-full max-w-xl aspect-[16/10] sm:aspect-[16/9] rounded-[3px] p-3 sm:p-4 bg-[#181818] border-4 border-[#252525] shadow-2xl shadow-black">
              {/* Internal Bezel */}
              <div className="relative w-full h-full overflow-hidden bg-black rounded-[1px]">
                {/* Lit Image State */}
                <Image
                  src={mockIlluminatedFeature.litSpecs.image}
                  alt={mockIlluminatedFeature.litSpecs.description}
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    isLit ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />

                {/* Unlit Image State */}
                <Image
                  src={mockIlluminatedFeature.unlitSpecs.image}
                  alt={mockIlluminatedFeature.unlitSpecs.description}
                  fill
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    isLit ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />

                {/* Status Indicator inside Frame */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-[2px] transition-colors duration-300 ${
                      isLit
                        ? "bg-black/85 text-[#F5F2EC] border border-[#D94A36]/60"
                        : "bg-black/85 text-[#8D8D8D] border border-white/20"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isLit ? "bg-[#D94A36] animate-pulse" : "bg-[#888888]"
                      }`}
                    />
                    {isLit ? "ILLUMINATED STATE (ON)" : "DAYLIGHT STATE (OFF)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Accessible Lighting State Switcher Control */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl justify-between bg-[#151515] p-3 border border-[#242424] rounded-[2px]">
              <div className="text-xs text-[#8D8D8D] flex items-center gap-2">
                <span className="font-semibold text-white">INTERACTIVE SIMULATION</span>
                <span>•</span>
                <span>Toggle physical state:</span>
              </div>

              <div className="flex items-center gap-1 bg-[#1E1E1E] p-1 rounded-[2px] border border-[#2C2C2C]">
                <button
                  type="button"
                  onClick={() => setIsLit(false)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all rounded-[1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                    !isLit
                      ? "bg-[#F5F2EC] text-[#111111] shadow-sm"
                      : "text-[#8D8D8D] hover:text-white"
                  }`}
                  aria-pressed={!isLit}
                >
                  <LightbulbOff className="w-3.5 h-3.5" />
                  <span>LIGHT OFF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsLit(true)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all rounded-[1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                    isLit
                      ? "bg-[#D94A36] text-white shadow-sm"
                      : "text-[#8D8D8D] hover:text-white"
                  }`}
                  aria-pressed={isLit}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>LIGHT ON</span>
                </button>
              </div>
            </div>

            <p className="mt-2 text-[10px] text-[#666666] text-center">
              *Real product includes hardware switch & remote control. Toggle above to compare the two physical states.
            </p>
          </div>

          {/* Right Column: Physical Specifications & Craft Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#141414] border border-[#242424] rounded-[2px] space-y-5">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white tracking-wide">
                ENGINEERED FOR REAL WALLS
              </h3>

              <div className="space-y-4">
                {mockIlluminatedFeature.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[2px] bg-[#1E1E1E] border border-[#2B2B2B] flex items-center justify-center text-[#D94A36] shrink-0 mt-0.5">
                      {idx === 0 && <Sliders className="w-3.5 h-3.5" />}
                      {idx === 1 && <ShieldCheck className="w-3.5 h-3.5" />}
                      {idx === 2 && <Layers className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-white tracking-wider">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-[#8D8D8D] leading-relaxed mt-0.5">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#8D8D8D] block">
                    STARTING AT
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-2xl text-white font-bold">
                    ₹4,999
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href="/products/itachi-crow-mirage-reveal-frame"
                  className="w-full sm:w-auto"
                >
                  VIEW REVEAL FRAME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
