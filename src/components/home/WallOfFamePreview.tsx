"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Tag, CheckCircle, Upload } from "lucide-react";
import { mockWallOfFameItems } from "@/data/mock-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const WallOfFamePreview: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>(() =>
    mockWallOfFameItems.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.likesCount }),
      {}
    )
  );

  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setUserLiked((prev) => {
      const isCurrentlyLiked = !!prev[id];
      setLikes((currLikes) => ({
        ...currLikes,
        [id]: currLikes[id] + (isCurrentlyLiked ? -1 : 1),
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  return (
    <section id="wall-of-fame" className="py-20 sm:py-28 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="COMMUNITY SPOTLIGHT"
          title="YOUR COLLECTION. YOUR LEGACY."
          subtitle="Real spaces, real collectors. Explore how community members display their posters, illuminated frames, and figures."
          actionText="EXPLORE FULL WALL OF FAME"
          actionHref="#wall-of-fame-full"
        />

        {/* Verification banner */}
        <div className="mb-8 p-3 bg-[#181818] border border-[#2B2B2B] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8D8D8D]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-white font-medium">Sample Community Submissions:</span>
            <span>All setups tagged with actual Afterhours Collective collectibles.</span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#D94A36] font-semibold">
            MONTHLY PRIZE CHALLENGE ACTIVE
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockWallOfFameItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#161616] border border-[#262626] hover:border-[#383838] transition-all duration-300 rounded-[2px] overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full bg-[#1F1F1F] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} by ${item.collectorName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Overlay: Collector handle & Upvote */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                  <div className="pointer-events-auto bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-[2px] border border-white/10 flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-white">
                      {item.collectorHandle}
                    </span>
                    {item.isVerifiedSetup && (
                      <CheckCircle className="w-3 h-3 text-[#10B981]" />
                    )}
                  </div>

                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] backdrop-blur-md text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                      userLiked[item.id]
                        ? "bg-[#D94A36] text-white"
                        : "bg-black/70 text-[#D8D2C8] hover:text-white"
                    }`}
                    aria-label={`Like setup by ${item.collectorName}`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        userLiked[item.id] ? "fill-white" : ""
                      }`}
                    />
                    <span>{likes[item.id]}</span>
                  </button>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8D8D8D] uppercase tracking-wider mt-0.5">
                    {item.collectorName} • {item.location}
                  </p>

                  <p className="mt-3 text-xs italic text-[#D8D2C8] leading-relaxed border-l-2 border-[#D94A36] pl-3 py-0.5">
                    &ldquo;{item.featuredQuote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8D8D8D] mb-1.5 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#D94A36]" />
                    <span>FEATURED IN THIS SETUP:</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.taggedProductTitles.map((prodTitle, idx) => (
                      <Link
                        key={idx}
                        href="#new-drops"
                        className="text-[10px] bg-[#1E1E1E] hover:bg-[#282828] text-[#D8D2C8] hover:text-white px-2 py-0.5 rounded-[1px] border border-[#2D2D2D] transition-colors"
                      >
                        {prodTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission CTA Banner */}
        <div className="mt-12 p-8 bg-[#161616] border border-[#2B2B2B] rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold uppercase text-white">
              HAVE AN AFTERHOURS PIECE ON YOUR WALL?
            </h3>
            <p className="text-xs sm:text-sm text-[#8D8D8D] max-w-xl">
              Share your room, desk, or gallery setup. Monthly winner receives ₹10,000 in store credit and a limited-edition physical reveal frame.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            href="#submit-setup"
            className="shrink-0 flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>SUBMIT YOUR SETUP</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
