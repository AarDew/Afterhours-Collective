"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { mockAnnouncement } from "@/data/mock-data";

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#181818] border-b border-[#262626] text-white text-[10px] sm:text-[11px] font-medium tracking-widest uppercase transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2 sm:gap-4">
        <div className="w-6 hidden md:block" />

        <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 text-center min-w-0">
          <span className="inline-flex items-center text-[#D94A36] shrink-0">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="text-[#D8D2C8] truncate">
            {mockAnnouncement.message}
          </span>
          {mockAnnouncement.linkHref && (
            <Link
              href={mockAnnouncement.linkHref}
              className="text-[#D94A36] underline underline-offset-2 hover:text-white transition-colors ml-1 font-semibold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] rounded-xs"
            >
              {mockAnnouncement.linkText || "EXPLORE"}
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-[#8D8D8D] hover:text-white hover:bg-[#252525] p-1 rounded transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
