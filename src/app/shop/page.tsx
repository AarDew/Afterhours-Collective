import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopContent } from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop All Collectibles | Afterhours Collective",
  description:
    "Explore our full catalog of design-led pop-culture collectibles. Dual-state illuminated reveal frames, archival framed art posters, and precision 3D display figures.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#111111] flex items-center justify-center py-24">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-6 border-2 border-[#D94A36] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8D8D8D]">
              LOADING COLLECTIBLES CATALOG...
            </p>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
