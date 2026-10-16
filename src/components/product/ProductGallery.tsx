"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  LightbulbOff,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Product } from "@/types";

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  // Build image list from gallery or fallback to primary & secondary
  const galleryItems =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [
          {
            url: product.images.primary,
            label: "MAIN VIEW",
            alt: product.images.alt,
            lightingState: product.images.lit ? ("lit" as const) : undefined,
          },
          ...(product.images.secondary
            ? [
                {
                  url: product.images.secondary,
                  label: "DAYLIGHT VIEW",
                  alt: `${product.title} daylight unlit state`,
                  lightingState: product.images.unlit
                    ? ("unlit" as const)
                    : undefined,
                },
              ]
            : []),
        ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const currentItem = galleryItems[activeIndex] || galleryItems[0];
  const isRevealFrame = product.productType === "illuminated-frame";

  // Dedicated toggle for dual-state reveal frames
  const handleToggleLighting = (targetState: "lit" | "unlit") => {
    const targetIdx = galleryItems.findIndex(
      (item) => item.lightingState === targetState
    );
    if (targetIdx !== -1) {
      setActiveIndex(targetIdx);
    }
  };

  const isCurrentLit = currentItem.lightingState === "lit";
  const isCurrentUnlit = currentItem.lightingState === "unlit";

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewport */}
      <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full rounded-[2px] overflow-hidden bg-[#161616] border border-[#282828] shadow-2xl">
        <Image
          src={currentItem.url}
          alt={currentItem.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2">
            {currentItem.lightingState && (
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-[2px] backdrop-blur-md transition-colors ${
                  isCurrentLit
                    ? "bg-black/85 text-[#F5F2EC] border border-[#D94A36]/60"
                    : "bg-black/85 text-[#A0A0A0] border border-white/20"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isCurrentLit
                      ? "bg-[#D94A36] animate-pulse"
                      : "bg-[#777777]"
                  }`}
                />
                {isCurrentLit
                  ? "ILLUMINATED STATE (ON)"
                  : "DAYLIGHT STATE (OFF)"}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsZoomModalOpen(true)}
            className="pointer-events-auto p-2 bg-black/60 hover:bg-black/90 text-[#D8D2C8] hover:text-white rounded-[2px] backdrop-blur-md border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]"
            aria-label="Enlarge image in fullscreen view"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Prev / Next Arrows for Mobile/Touch */}
        {galleryItems.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none sm:hidden">
            <button
              onClick={prevImage}
              className="pointer-events-auto p-2 bg-black/60 text-white rounded-full backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto p-2 bg-black/60 text-white rounded-full backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Illuminated Frame Interactive Dual-State Switcher */}
      {isRevealFrame && (
        <div className="p-3 bg-[#161616] border border-[#262626] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-[#8D8D8D]">
            <span className="font-semibold text-white block sm:inline">
              PHYSICAL DUAL-STATE TOGGLE:
            </span>{" "}
            <span className="text-[11px] text-[#A0A0A0]">
              Compare unlit day & illuminated night states
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#1E1E1E] p-1 rounded-[2px] border border-[#2E2E2E] self-stretch sm:self-auto justify-center">
            <button
              type="button"
              onClick={() => handleToggleLighting("unlit")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[1px] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                isCurrentUnlit
                  ? "bg-[#F5F2EC] text-[#111111] shadow-sm"
                  : "text-[#8D8D8D] hover:text-white"
              }`}
              aria-pressed={isCurrentUnlit}
            >
              <LightbulbOff className="w-3.5 h-3.5" />
              <span>LIGHT OFF</span>
            </button>

            <button
              type="button"
              onClick={() => handleToggleLighting("lit")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[1px] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                isCurrentLit
                  ? "bg-[#D94A36] text-white shadow-sm"
                  : "text-[#8D8D8D] hover:text-white"
              }`}
              aria-pressed={isCurrentLit}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>LIGHT ON</span>
            </button>
          </div>
        </div>
      )}

      {/* Supporting Thumbnails Row */}
      {galleryItems.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-square w-16 sm:w-20 shrink-0 rounded-[2px] overflow-hidden bg-[#161616] border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] ${
                activeIndex === idx
                  ? "border-[#D94A36] ring-1 ring-[#D94A36]"
                  : "border-[#262626] opacity-60 hover:opacity-100 hover:border-[#444]"
              }`}
              aria-label={`Select thumbnail ${idx + 1}: ${item.label}`}
              aria-pressed={activeIndex === idx}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
              {item.lightingState && (
                <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold tracking-wider text-center py-0.5 uppercase text-white truncate px-0.5">
                  {item.lightingState === "lit" ? "ON" : "OFF"}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-[#222222]">
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg uppercase tracking-wide">
                {product.title}
              </p>
              <p className="text-[11px] text-[#8D8D8D] uppercase tracking-widest">
                {currentItem.label} • {activeIndex + 1} of {galleryItems.length}
              </p>
            </div>
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="p-2 text-[#8D8D8D] hover:text-white hover:bg-[#1E1E1E] rounded transition-colors"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Main View */}
          <div className="relative flex-1 w-full max-w-5xl mx-auto my-4 overflow-hidden flex items-center justify-center">
            <Image
              src={currentItem.url}
              alt={currentItem.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Modal Thumbnails */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pt-4 border-t border-[#222222]">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-square w-14 shrink-0 rounded-[2px] overflow-hidden border transition-all ${
                  activeIndex === idx
                    ? "border-[#D94A36]"
                    : "border-[#333333] opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
