import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#111111] border-b border-[#222222]">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 bg-radial from-[#D94A36]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,17,17,0.2)_0%,rgba(17,17,17,0.95)_100%)] pointer-events-none z-10" />

      {/* Hero Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Typographic Moment & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Category kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2D2D2D] text-[#D8D2C8] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase rounded-[2px]">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D94A36]" />
              <span>DESIGN-LED POP-CULTURE COLLECTIBLES</span>
            </div>

            {/* Deliberate Editorial Headline Composition across 2-3 lines */}
            <div className="space-y-2.5">
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] font-bold tracking-tight uppercase text-white leading-[0.96]">
                <span className="block sm:inline lg:block">YOUR WORLD. </span>
                <span className="block sm:inline lg:block">YOUR WALL. </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F2EC] to-[#D8D2C8]">
                  YOUR COLLECTION.
                </span>
              </h1>
              <p className="font-[family-name:var(--font-sans)] text-sm sm:text-base md:text-lg text-[#D8D2C8] font-normal tracking-wide pt-1">
                For the things you never outgrew.
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm md:text-base text-[#8D8D8D] leading-relaxed max-w-lg">
              Physical collectibles crafted with obsessive attention to detail. Discover dual-state illuminated reveal frames, archival framed art, and precision 3D display figures.
            </p>

            {/* CTAs visible without excessive scrolling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Button
                variant="primary"
                size="lg"
                href="/shop"
                className="justify-center"
              >
                EXPLORE THE COLLECTION
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#wall-of-fame"
                className="justify-center"
              >
                SHOW US YOUR SETUP
              </Button>
            </div>

            {/* Quality indicators */}
            <div className="pt-5 border-t border-[#222222] grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-white font-bold">
                  DUAL-STATE
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#8D8D8D]">
                  Reveal Frames
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-white font-bold">
                  310 GSM
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#8D8D8D]">
                  Archival Stock
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-white font-bold">
                  CUSTOM 3D
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#8D8D8D]">
                  Resin Display
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Artwork - Large, Visually Balanced, No Overlapping Elements */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <Link
                href="/products/itachi-crow-mirage-reveal-frame"
                className="group block relative aspect-[4/5] w-full rounded-[2px] overflow-hidden border border-[#2D2D2D] hover:border-[#D94A36]/60 transition-colors shadow-2xl shadow-black/90 bg-[#161616]"
              >
                <Image
                  src="/images/itachi-reveal-lit.jpg"
                  alt="Itachi Crow Mirage Illuminated Reveal Frame in active state"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Status indicator badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black/85 backdrop-blur-md border border-[#D94A36]/60 text-[#F5F2EC] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-[2px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D94A36] animate-pulse" />
                    FEATURED DROP • REVEAL STATE
                  </span>
                </div>

                {/* Bottom metadata banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 sm:p-6 z-20">
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#D94A36]">
                    AKATSUKI SHADOW SERIES
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold uppercase text-white tracking-wide mt-0.5 group-hover:text-[#D94A36] transition-colors">
                    ITACHI: CROW MIRAGE
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#D8D2C8] mt-1">
                    Dual-Phase Illuminated Reveal Frame • Limited First Batch →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 border-t border-[#1C1C1C] py-2.5 sm:py-3 text-center">
        <Link
          href="#fandoms"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8D8D8D] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]"
        >
          <span>SCROLL TO EXPLORE WORLDS</span>
          <ArrowDown className="w-3 h-3 text-[#D94A36]" />
        </Link>
      </div>
    </section>
  );
};
