import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#111111] text-white flex items-center justify-center py-20 px-4 border-b border-[#222222]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center mx-auto text-[#D94A36]">
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-[#D94A36] uppercase">
            PAGE OR COLLECTIBLE NOT FOUND
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            404 • ARCHIVE ERROR
          </h1>
          <p className="text-xs sm:text-sm text-[#8D8D8D] leading-relaxed pt-1">
            The piece you are looking for may have been retired, sold out from our studio archive, or the link may be mistyped.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button variant="primary" size="md" href="/shop">
            EXPLORE THE SHOP
          </Button>
          <Button variant="obsidian" size="md" href="/">
            RETURN HOME
          </Button>
        </div>

        <div className="pt-4 border-t border-[#222222]">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-[#8D8D8D] hover:text-white uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D94A36]" />
            <span>Browse All 12 Available Collectibles</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
