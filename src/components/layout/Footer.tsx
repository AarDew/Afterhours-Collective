import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1F1F1F] text-[#8D8D8D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1E1E1E]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#D94A36] rotate-45" />
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wider text-white uppercase">
                AFTERHOURS <span className="text-[#8D8D8D] font-normal">COLLECTIVE</span>
              </span>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D8D2C8]">
              YOUR WORLD. YOUR WALL. YOUR COLLECTION.
            </p>
            <p className="text-xs leading-relaxed text-[#777777] max-w-sm">
              Design-led pop-culture physical collectibles. Art posters, dual-state illuminated reveal frames, and precision 3D display figures crafted for the things you never outgrew.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#666666]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Studio Dispatch • Insured Pan-India Express Delivery</span>
            </div>
          </div>

          {/* Fandoms */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Fandoms
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop?fandom=anime" className="hover:text-white transition-colors">
                  Anime & Manga
                </Link>
              </li>
              <li>
                <Link href="/shop?fandom=superheroes" className="hover:text-white transition-colors">
                  Superheroes & Graphic Novels
                </Link>
              </li>
              <li>
                <Link href="/shop?fandom=indian-cinema" className="hover:text-white transition-colors">
                  Indian Cinema & Series
                </Link>
              </li>
              <li>
                <Link href="/shop?fandom=motorsport" className="hover:text-white transition-colors">
                  Motorsport & Endurance
                </Link>
              </li>
              <li>
                <Link href="/shop?fandom=gaming-cartoons" className="hover:text-white transition-colors">
                  Gaming & Cartoons
                </Link>
              </li>
            </ul>
          </div>

          {/* Formats */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Physical Formats
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop?type=illuminated-frame" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Reveal Frames</span>
                  <span className="text-[9px] px-1 bg-[#D94A36]/20 text-[#D94A36] rounded font-semibold">PATENTED</span>
                </Link>
              </li>
              <li>
                <Link href="/shop?type=figure" className="hover:text-white transition-colors">
                  3D Display Figures
                </Link>
              </li>
              <li>
                <Link href="/shop?type=framed-poster" className="hover:text-white transition-colors">
                  Framed Archival Art
                </Link>
              </li>
              <li>
                <Link href="/shop?type=poster" className="hover:text-white transition-colors">
                  Unframed Fine Art Prints
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Collectibles
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Community & Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#wall-of-fame" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Wall of Fame</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D94A36]" />
                </Link>
              </li>
              <li>
                <Link href="#wall-of-fame" className="hover:text-white transition-colors">
                  Submit Your Setup
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:text-white transition-colors">
                  Frame Lighting Care Guide
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:text-white transition-colors">
                  Shipping & Damaged Item Guarantee
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:text-white transition-colors">
                  Authentication & Limited Ed.
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666]">
          <p>© 2026 Afterhours Collective. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#returns" className="hover:text-white transition-colors">
              Returns & Replacement Policy
            </Link>
            <span>Prices displayed in INR (₹)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
