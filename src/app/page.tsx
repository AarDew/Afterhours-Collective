import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FandomDiscovery } from "@/components/home/FandomDiscovery";
import { IlluminatedFrameFeature } from "@/components/home/IlluminatedFrameFeature";
import { FigureFeature } from "@/components/home/FigureFeature";
import { NewDrops } from "@/components/home/NewDrops";
import { WallOfFamePreview } from "@/components/home/WallOfFamePreview";
import { BrandStory } from "@/components/home/BrandStory";
import { DropAlertSignup } from "@/components/home/DropAlertSignup";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Fandom & Universe Discovery */}
      <FandomDiscovery />

      {/* 3. More Than A Poster: Dual-State Illuminated Reveal Frame */}
      <IlluminatedFrameFeature />

      {/* 4. Build Your Universe: 3D Display Collectibles */}
      <FigureFeature />

      {/* 5. New Drops & Latest Releases */}
      <NewDrops />

      {/* 6. Wall of Fame Community Gallery Preview */}
      <WallOfFamePreview />

      {/* 7. Warm Ivory Editorial Brand Story */}
      <BrandStory />

      {/* 8. Collector First-Access Drop Alerts */}
      <DropAlertSignup />
    </div>
  );
}
