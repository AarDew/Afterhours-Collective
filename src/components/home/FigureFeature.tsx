import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, CheckCircle2 } from "lucide-react";
import { mockFigureFeature } from "@/data/mock-data";
import { Button } from "@/components/ui/Button";

export const FigureFeature: React.FC = () => {
  return (
    <section id="figure-feature" className="py-20 sm:py-28 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Information & Craft details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36]">
                {mockFigureFeature.eyebrow}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[0.92]">
                {mockFigureFeature.title}
              </h2>
              <p className="font-[family-name:var(--font-sans)] text-base sm:text-lg text-[#D8D2C8] font-normal tracking-wide">
                {mockFigureFeature.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#8D8D8D] leading-relaxed">
              {mockFigureFeature.description}
            </p>

            {/* Technical Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {mockFigureFeature.stats.map((stat, i) => (
                <div key={i} className="p-3.5 bg-[#171717] border border-[#262626] rounded-[2px]">
                  <p className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase">
                    {stat.label}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-white font-bold mt-1 uppercase">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 text-xs text-[#D8D2C8]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D94A36] shrink-0" />
                <span>Heavyweight solid obsidian composite magnetic base included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D94A36] shrink-0" />
                <span>Individually numbered metal authentication certificate badge</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D94A36] shrink-0" />
                <span>Shipped in precision-cut EVA foam presentation case</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="lg" href="/shop?type=figure">
                VIEW 3D FIGURE COLLECTION
              </Button>
              <Button variant="obsidian" size="lg" href="#wall-of-fame">
                SEE DESK INTEGRATIONS
              </Button>
            </div>
          </div>

          {/* Right Column: Figure Showcase Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Link
              href="/products/vigilante-ascent-figure"
              className="group block relative aspect-[4/5] w-full max-w-lg mx-auto rounded-[2px] overflow-hidden border border-[#2D2D2D] hover:border-[#D94A36]/60 transition-colors bg-[#161616] shadow-2xl"
            >
              <Image
                src="/images/spiderman-portrait.jpg"
                alt="Precision 3D printed collectible display figure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating specs badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold tracking-widest uppercase rounded-[2px]">
                  <Box className="w-3.5 h-3.5 text-[#D94A36]" />
                  <span>3D DISPLAY SCULPTURE • 1:8 SCALE</span>
                </span>
              </div>

              {/* Bottom detail card */}
              <div className="absolute bottom-4 inset-x-4 z-20 bg-black/90 backdrop-blur-md border border-[#2E2E2E] p-4 rounded-[2px] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold tracking-widest text-[#D94A36] uppercase">
                    LIMITED TO 250 SERIALIZED
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg text-white font-bold uppercase group-hover:text-[#D94A36] transition-colors">
                    Vigilante Ascent Maquette
                  </p>
                  <p className="text-[11px] text-[#8D8D8D]">
                    Dimensions: 25.5cm H × 14cm W • 850g →
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-white">₹6,499</span>
                  <span className="block text-[9px] text-[#10B981] font-semibold uppercase">
                    IN STOCK
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
