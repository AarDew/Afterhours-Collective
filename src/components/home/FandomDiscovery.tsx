import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mockFandomTiles } from "@/data/mock-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const FandomDiscovery: React.FC = () => {
  return (
    <section id="fandoms" className="py-20 sm:py-28 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="DISCOVER BY UNIVERSE"
          title="CURATED WORLDS"
          subtitle="Explore physical art, reveal frames, and collectible figures grouped by the fandoms that define your space."
          actionText="VIEW ALL CATEGORIES"
          actionHref="/shop"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mockFandomTiles.map((fandom) => (
            <Link
              key={fandom.id}
              href={`/shop?fandom=${fandom.slug}`}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-[2px] overflow-hidden border border-[#242424] hover:border-[#D8D2C8]/50 transition-all duration-300 flex flex-col justify-end p-6 bg-[#161616]"
            >
              {/* Background Artwork */}
              <Image
                src={fandom.image}
                alt={fandom.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-75"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-semibold tracking-widest text-[#D94A36] uppercase">
                  <span>{fandom.countLabel}</span>
                  <div className="w-6 h-6 rounded-full bg-black/60 border border-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide leading-none">
                  {fandom.name}
                </h3>

                <p className="text-xs text-[#D8D2C8]/80 leading-relaxed line-clamp-2 pt-1 font-normal">
                  {fandom.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
