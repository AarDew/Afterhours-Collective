"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  SlidersHorizontal,
  X,
  Search,
  ArrowUpDown,
  Sparkles,
  RotateCcw,
  Check,
} from "lucide-react";
import { mockProducts } from "@/data/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { ProductSortOption } from "@/types";

const FORMAT_OPTIONS = [
  { label: "ALL FORMATS", value: "all" },
  { label: "REVEAL FRAMES", value: "illuminated-frame" },
  { label: "FRAMED ART", value: "framed-poster" },
  { label: "FINE POSTERS", value: "poster" },
  { label: "3D FIGURES", value: "figure" },
];

const FANDOM_OPTIONS = [
  { label: "ALL UNIVERSES", value: "all" },
  { label: "ANIME & MANGA", value: "anime" },
  { label: "SUPERHEROES", value: "superheroes" },
  { label: "INDIAN CINEMA", value: "indian-cinema" },
  { label: "MOTORSPORT", value: "motorsport" },
  { label: "GAMING & CARTOONS", value: "gaming-cartoons" },
];

const PRICE_PRESETS = [
  { label: "All Prices", value: "all", min: 0, max: Infinity },
  { label: "Under ₹2,000", value: "under-2k", min: 0, max: 2000 },
  { label: "₹2,000 – ₹4,000", value: "2k-4k", min: 2000, max: 4000 },
  { label: "₹4,000 – ₹6,000", value: "4k-6k", min: 4000, max: 6000 },
  { label: "Above ₹6,000", value: "above-6k", min: 6000, max: Infinity },
];

const SORT_OPTIONS: { label: string; value: ProductSortOption }[] = [
  { label: "Featured Curation", value: "featured" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popularity" },
];

const ShopContentInner: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL Query param initialization
  const initialType = searchParams.get("type") || "all";
  const initialFandom = searchParams.get("fandom") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = (searchParams.get("sort") as ProductSortOption) || "featured";

  // State
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedFandom, setSelectedFandom] = useState<string>(initialFandom);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedSort, setSelectedSort] = useState<ProductSortOption>(initialSort);
  const [pricePreset, setPricePreset] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  // Filtering and Sorting logic
  const filteredAndSortedProducts = useMemo(() => {
    return mockProducts
      .filter((product) => {
        // Format filter
        if (selectedType !== "all" && product.productType !== selectedType) {
          return false;
        }

        // Fandom filter
        if (selectedFandom !== "all" && product.fandomSlug !== selectedFandom) {
          return false;
        }

        // Stock filter
        if (inStockOnly && !product.inStock) {
          return false;
        }

        // Price preset filter
        if (pricePreset !== "all") {
          const currentPreset = PRICE_PRESETS.find((p) => p.value === pricePreset);
          if (currentPreset) {
            if (
              product.price < currentPreset.min ||
              product.price > currentPreset.max
            ) {
              return false;
            }
          }
        }

        // Search Query filter (matches title, fandom, short description, materials)
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchTitle = product.title.toLowerCase().includes(query);
          const matchFandom = product.fandom.toLowerCase().includes(query);
          const matchDesc = product.shortDescription.toLowerCase().includes(query);
          const matchMaterial = product.material?.toLowerCase().includes(query) ?? false;
          if (!matchTitle && !matchFandom && !matchDesc && !matchMaterial) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        switch (selectedSort) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "popularity":
            return (b.popularity || 0) - (a.popularity || 0);
          case "newest":
            return (
              new Date(b.createdAt || 0).getTime() -
              new Date(a.createdAt || 0).getTime()
            );
          case "featured":
          default:
            return (b.isNewDrop ? 1 : 0) - (a.isNewDrop ? 1 : 0);
        }
      });
  }, [
    selectedType,
    selectedFandom,
    pricePreset,
    inStockOnly,
    searchQuery,
    selectedSort,
  ]);

  // Check active filter count
  const activeFiltersCount =
    (selectedType !== "all" ? 1 : 0) +
    (selectedFandom !== "all" ? 1 : 0) +
    (pricePreset !== "all" ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedType("all");
    setSelectedFandom("all");
    setPricePreset("all");
    setInStockOnly(false);
    setSearchQuery("");
    setSelectedSort("featured");
    router.replace("/shop");
  };

  return (
    <div className="bg-[#111111] min-h-screen text-white pt-6 pb-24 border-b border-[#222222]">
      {/* Header & Editorial Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 border-b border-[#222222]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2B2B2B] text-[#D8D2C8] text-[10px] font-semibold tracking-[0.2em] uppercase rounded-[2px]">
            <Sparkles className="w-3.5 h-3.5 text-[#D94A36]" />
            <span>ARCHIVAL PRINTS • DUAL-STATE REVEALS • 3D SCULPTURES</span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-white leading-none">
            SHOP ALL COLLECTIBLES
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#8D8D8D] leading-relaxed">
            Every collectible is designed and crafted with uncompromising physical standards. Discover patented dual-phase reveal frames, heavyweight 310gsm cotton prints, and hand-finished 12K photopolymer sculptures.
          </p>
        </div>

        {/* Fandom Quick Navigation Bar */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-[10px] font-semibold tracking-widest text-[#666666] uppercase whitespace-nowrap mr-2">
            UNIVERSE:
          </span>
          {FANDOM_OPTIONS.map((fandom) => (
            <button
              key={fandom.value}
              onClick={() => setSelectedFandom(fandom.value)}
              className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap rounded-[2px] transition-all border ${
                selectedFandom === fandom.value
                  ? "bg-white text-[#111111] border-white shadow-sm"
                  : "bg-[#181818] text-[#8D8D8D] border-[#2A2A2A] hover:text-white hover:border-[#444]"
              } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]`}
            >
              {fandom.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Filter & Utility Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
          {/* Format Chips on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {FORMAT_OPTIONS.map((format) => (
              <button
                key={format.value}
                onClick={() => setSelectedType(format.value)}
                className={`px-3.5 py-2 text-xs font-semibold tracking-widest uppercase transition-all whitespace-nowrap rounded-[2px] border ${
                  selectedType === format.value
                    ? "bg-[#D94A36] text-white border-[#D94A36]"
                    : "bg-[#161616] text-[#8D8D8D] border-[#262626] hover:text-white hover:border-[#383838]"
                } focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]`}
              >
                {format.label}
              </button>
            ))}
          </div>

          {/* Search, Sort, and Mobile Filter Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Inline Search Bar */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#161616] border border-[#292929] focus:border-[#D94A36] text-xs text-white pl-9 pr-7 py-2 rounded-[2px] placeholder-[#555] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8D8D8D] hover:text-white"
                  aria-label="Clear search input"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) =>
                  setSelectedSort(e.target.value as ProductSortOption)
                }
                className="bg-[#161616] border border-[#292929] hover:border-[#3E3E3E] text-xs font-semibold tracking-wider text-[#D8D2C8] py-2 pl-3 pr-8 rounded-[2px] uppercase focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] cursor-pointer appearance-none"
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#161616] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ArrowUpDown className="w-3 h-3 text-[#8D8D8D] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Mobile Filter Drawer Trigger */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#444] text-xs font-semibold tracking-wider uppercase text-white rounded-[2px] active:scale-95 transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D94A36]" />
              <span>FILTERS</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#D94A36] text-[10px] flex items-center justify-center font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Secondary Filters (Price Range & Availability) */}
        <div className="hidden lg:flex items-center justify-between pt-4 pb-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-widest text-[#666666] uppercase">
              PRICE:
            </span>
            <div className="flex items-center gap-1.5">
              {PRICE_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setPricePreset(preset.value)}
                  className={`px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-[2px] transition-colors border ${
                    pricePreset === preset.value
                      ? "bg-[#252525] text-white border-[#444]"
                      : "bg-[#141414] text-[#8D8D8D] border-[#222] hover:text-white"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none text-[#D8D2C8] hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-3.5 h-3.5 accent-[#D94A36] rounded bg-[#1C1C1C] border-[#333]"
            />
            <span className="text-[11px] font-medium tracking-wider uppercase">
              In Stock Only
            </span>
          </label>
        </div>

        {/* Active Filter Chips Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-2">
            <span className="text-[10px] font-semibold tracking-widest text-[#666666] uppercase mr-1">
              ACTIVE FILTERS:
            </span>

            {selectedType !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-[10px] font-semibold tracking-wider text-[#D8D2C8] uppercase rounded-[2px]">
                <span>
                  Format:{" "}
                  {FORMAT_OPTIONS.find((f) => f.value === selectedType)?.label}
                </span>
                <button
                  onClick={() => setSelectedType("all")}
                  className="hover:text-white"
                  aria-label="Remove format filter"
                >
                  <X className="w-3 h-3 text-[#8D8D8D]" />
                </button>
              </span>
            )}

            {selectedFandom !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-[10px] font-semibold tracking-wider text-[#D8D2C8] uppercase rounded-[2px]">
                <span>
                  Universe:{" "}
                  {FANDOM_OPTIONS.find((f) => f.value === selectedFandom)?.label}
                </span>
                <button
                  onClick={() => setSelectedFandom("all")}
                  className="hover:text-white"
                  aria-label="Remove fandom filter"
                >
                  <X className="w-3 h-3 text-[#8D8D8D]" />
                </button>
              </span>
            )}

            {pricePreset !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-[10px] font-semibold tracking-wider text-[#D8D2C8] uppercase rounded-[2px]">
                <span>
                  Price:{" "}
                  {PRICE_PRESETS.find((p) => p.value === pricePreset)?.label}
                </span>
                <button
                  onClick={() => setPricePreset("all")}
                  className="hover:text-white"
                  aria-label="Remove price filter"
                >
                  <X className="w-3 h-3 text-[#8D8D8D]" />
                </button>
              </span>
            )}

            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-[10px] font-semibold tracking-wider text-[#D8D2C8] uppercase rounded-[2px]">
                <span>In Stock Only</span>
                <button
                  onClick={() => setInStockOnly(false)}
                  className="hover:text-white"
                  aria-label="Remove in stock filter"
                >
                  <X className="w-3 h-3 text-[#8D8D8D]" />
                </button>
              </span>
            )}

            {searchQuery.trim() && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-[10px] font-semibold tracking-wider text-[#D8D2C8] uppercase rounded-[2px]">
                <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="hover:text-white"
                  aria-label="Remove search filter"
                >
                  <X className="w-3 h-3 text-[#8D8D8D]" />
                </button>
              </span>
            )}

            <button
              onClick={resetAllFilters}
              className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-[#D94A36] hover:text-white uppercase transition-colors ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>RESET ALL</span>
            </button>
          </div>
        )}

        {/* Results Count Indicator */}
        <div className="pt-6 pb-4 flex items-center justify-between text-xs text-[#8D8D8D]">
          <p>
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredAndSortedProducts.length}
            </span>{" "}
            of {mockProducts.length} collectibles
          </p>

          <p className="text-[11px] text-[#666666] hidden sm:block">
            Prices displayed in INR (₹) • Free insured shipping above ₹2,500
          </p>
        </div>

        {/* Product Grid or Empty State */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
            {filteredAndSortedProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={idx < 4}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 px-4 text-center border border-dashed border-[#262626] rounded-[2px] bg-[#141414] max-w-2xl mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] flex items-center justify-center mx-auto text-[#D94A36] mb-4">
              <Search className="w-5 h-5" />
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white tracking-wide">
              NO COLLECTIBLES MATCH YOUR CURRENT FILTERS
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#8D8D8D] max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find any pieces matching your selection. Try clearing search keywords, broadening your price range, or clearing active filters.
            </p>

            <div className="mt-6">
              <Button
                variant="primary"
                size="md"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET ALL FILTERS</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Filter Slide-over Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-sm bg-[#141414] border-l border-[#242424] p-6 flex flex-col justify-between h-full z-10 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#242424]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#D94A36]" />
                  <span className="font-[family-name:var(--font-display)] text-lg uppercase tracking-wider text-white font-bold">
                    FILTERS & SORTING
                  </span>
                </div>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-[#8D8D8D] hover:text-white"
                  aria-label="Close filters drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Format Filter */}
              <div className="space-y-2">
                <label className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase block">
                  PHYSICAL FORMAT
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {FORMAT_OPTIONS.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setSelectedType(f.value)}
                      className={`flex items-center justify-between p-2.5 text-xs font-semibold tracking-wider uppercase rounded-[2px] transition-colors border ${
                        selectedType === f.value
                          ? "bg-[#D94A36] text-white border-[#D94A36]"
                          : "bg-[#181818] text-[#8D8D8D] border-[#252525] hover:text-white"
                      }`}
                    >
                      <span>{f.label}</span>
                      {selectedType === f.value && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fandom Filter */}
              <div className="space-y-2">
                <label className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase block">
                  FANDOM / UNIVERSE
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {FANDOM_OPTIONS.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setSelectedFandom(f.value)}
                      className={`flex items-center justify-between p-2.5 text-xs font-semibold tracking-wider uppercase rounded-[2px] transition-colors border ${
                        selectedFandom === f.value
                          ? "bg-white text-[#111111] border-white font-bold"
                          : "bg-[#181818] text-[#8D8D8D] border-[#252525] hover:text-white"
                      }`}
                    >
                      <span>{f.label}</span>
                      {selectedFandom === f.value && <Check className="w-3.5 h-3.5 text-[#111111]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-2">
                <label className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase block">
                  PRICE RANGE
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {PRICE_PRESETS.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPricePreset(p.value)}
                      className={`flex items-center justify-between p-2.5 text-xs font-medium tracking-wide rounded-[2px] transition-colors border ${
                        pricePreset === p.value
                          ? "bg-[#252525] text-white border-[#444]"
                          : "bg-[#181818] text-[#8D8D8D] border-[#252525] hover:text-white"
                      }`}
                    >
                      <span>{p.label}</span>
                      {pricePreset === p.value && <Check className="w-3.5 h-3.5 text-[#D94A36]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock Toggle */}
              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 bg-[#181818] border border-[#252525] rounded-[2px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#D94A36]"
                  />
                  <span className="text-xs font-semibold tracking-wider uppercase text-white">
                    In Stock Only
                  </span>
                </label>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#242424] space-y-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full justify-center"
              >
                APPLY FILTERS ({filteredAndSortedProducts.length})
              </Button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="w-full text-center text-xs font-semibold tracking-widest uppercase text-[#8D8D8D] hover:text-[#D94A36] py-2"
                >
                  RESET ALL FILTERS
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ShopContent: React.FC = () => {
  const searchParams = useSearchParams();
  return <ShopContentInner key={searchParams.toString()} />;
};
