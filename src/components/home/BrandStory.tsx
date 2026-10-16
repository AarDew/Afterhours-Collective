import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, Eye, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-24 sm:py-32 bg-[#F5F2EC] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Editorial Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[2px] overflow-hidden border-8 border-white shadow-xl shadow-stone-300 bg-[#E8E2D6]">
              <Image
                src="/images/chandra-poster.jpg"
                alt="Chandra editorial art print typography layout"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-[#D8D2C8] rounded-[2px]">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-[#D94A36]">
                  DESIGN ARCHITECTURE
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg text-[#111111] font-bold uppercase mt-0.5">
                  THE CHANDRA MONOLITH
                </p>
                <p className="text-[11px] text-[#666666]">
                  Archival 280gsm velvet stock • Hand-pulled ink tests
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36]">
                THE AFTERHOURS PHILOSOPHY
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111111] leading-[0.92]">
                FOR THE THINGS YOU NEVER OUTGREW.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#333333] leading-relaxed font-normal">
              Most pop-culture merchandise ends up in one of two extremes: cheap, disposable plastic from generic marketplaces, or hyper-inflated luxury figures locked behind five-figure price tags.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              We started Afterhours Collective to build what was missing: display-worthy physical objects inspired by anime, graphic novels, motorsport, and cinema. Objects that hold their own alongside high-end interior design, crafted with archival papers, solid frames, patented optical reveals, and precision resin.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-4 bg-white border border-[#D8D2C8] rounded-[2px] space-y-1">
                <div className="flex items-center gap-2 text-[#D94A36]">
                  <Award className="w-4 h-4" />
                  <h4 className="text-xs font-bold tracking-wider uppercase text-[#111111]">
                    Archival Integrity
                  </h4>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Cotton rag papers and pigment inks rated for 100+ years without color degradation.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#D8D2C8] rounded-[2px] space-y-1">
                <div className="flex items-center gap-2 text-[#D94A36]">
                  <Eye className="w-4 h-4" />
                  <h4 className="text-xs font-bold tracking-wider uppercase text-[#111111]">
                    Original Compositions
                  </h4>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Art-directed in-house with distinct typographic treatment for every universe.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#D8D2C8] rounded-[2px] space-y-1">
                <div className="flex items-center gap-2 text-[#D94A36]">
                  <Compass className="w-4 h-4" />
                  <h4 className="text-xs font-bold tracking-wider uppercase text-[#111111]">
                    Dual-Phase Reveal Tech
                  </h4>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Internal optical diffusion presenting completely separate physical daylight and night illumination.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#D8D2C8] rounded-[2px] space-y-1">
                <div className="flex items-center gap-2 text-[#D94A36]">
                  <HeartHandshake className="w-4 h-4" />
                  <h4 className="text-xs font-bold tracking-wider uppercase text-[#111111]">
                    Collector Safe Transit
                  </h4>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Corner-reinforced armor packaging with immediate zero-hassle replacement if damaged in transit.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="obsidian"
                size="lg"
                href="/shop"
              >
                DISCOVER OUR COLLECTIBLES
              </Button>
              <Link
                href="#about"
                className="text-xs font-semibold tracking-widest uppercase text-[#111111] hover:text-[#D94A36] transition-colors py-2"
              >
                READ THE STUDIO MANIFESTO →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
