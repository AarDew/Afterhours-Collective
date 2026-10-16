"use client";

import React, { useState } from "react";
import { mockProducts } from "@/data/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const NewDrops: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { label: "ALL DROPS", value: "all" },
    { label: "REVEAL FRAMES", value: "illuminated-frame" },
    { label: "FRAMED ART", value: "framed-poster" },
    { label: "FINE POSTERS", value: "poster" },
    { label: "3D FIGURES", value: "figure" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? mockProducts
      : mockProducts.filter((p) => p.productType === activeFilter);

  return (
    <section id="new-drops" className="py-20 sm:py-28 bg-[#0F0F0F] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="LATEST RELEASES"
          title="NEW DROPS"
          subtitle="Explore the latest studio arrivals across physical formats. Serialized reveal frames, heavy archival prints, and handcrafted figures."
          actionText="VIEW ALL DROPS"
          actionHref="/shop"
        />

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all whitespace-nowrap rounded-[2px] border ${
                activeFilter === tab.value
                  ? "bg-[#D94A36] text-white border-[#D94A36]"
                  : "bg-[#181818] text-[#8D8D8D] border-[#2A2A2A] hover:text-white hover:border-[#444]"
              } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
};
