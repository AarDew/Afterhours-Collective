"use client";

import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronDown,
  Check,
} from "lucide-react";
import { Product, ProductSizeOption, ProductVariantOption } from "@/types";
import { PriceTag } from "@/components/ui/PriceTag";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useStore } from "@/context/StoreContext";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  // Selected Size (defaults to first size option if available)
  const [selectedSize, setSelectedSize] = useState<ProductSizeOption | undefined>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );

  // Selected Variant / Finish (defaults to first variant option if available)
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariantOption | undefined
  >(
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : undefined
  );

  // Quantity with bounds [1, 10]
  const [quantity, setQuantity] = useState<number>(1);

  // Accordion active tabs
  const [openAccordion, setOpenAccordion] = useState<string>("specs");

  // Dynamic price based on selected size and variant
  const basePrice = selectedSize ? selectedSize.price : product.price;
  const currentPrice = selectedVariant?.priceDelta
    ? basePrice + selectedVariant.priceDelta
    : basePrice;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, quantity, selectedSize, selectedVariant);
  };

  return (
    <div className="flex flex-col space-y-6 text-white">
      {/* Eyebrow & Category Kicker */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D94A36] uppercase">
              {product.fandom}
            </span>
            <span className="text-[#555]">•</span>
            <span className="text-[11px] font-medium tracking-wider text-[#8D8D8D] uppercase">
              {product.productTypeLabel}
            </span>
          </div>

          {product.badge && (
            <Badge variant={product.isLimited ? "ember" : "stone"}>
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Product Headline */}
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[0.95]">
          {product.title}
        </h1>

        {/* Edition Note */}
        {product.editionNote && (
          <p className="text-xs font-semibold tracking-widest text-[#D8D2C8] uppercase">
            {product.editionNote}
          </p>
        )}
      </div>

      {/* Price & Stock Indicator */}
      <div className="py-3 border-y border-[#222222] flex items-center justify-between">
        <div>
          <PriceTag
            price={currentPrice}
            originalPrice={product.originalPrice}
            size="lg"
          />
          <p className="text-[10px] text-[#777777] mt-0.5">
            Inclusive of all taxes • Insured pan-India transit
          </p>
        </div>

        <div>
          {product.inStock ? (
            <div className="flex items-center gap-2 text-xs text-[#10B981] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="uppercase tracking-wider text-[11px]">
                In Stock & Ready To Dispatch
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-[#EF4444] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="uppercase tracking-wider text-[11px]">
                Sold Out • Waitlist Open
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Short Narrative Description */}
      <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Size Selector (when product has multiple sizes) */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-2.5 pt-1">
          <label className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase block">
            SELECT DIMENSIONS / FORMAT
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`flex flex-col items-start p-3 rounded-[2px] border text-left transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                  selectedSize?.id === size.id
                    ? "bg-[#1E1E1E] border-[#D94A36] text-white"
                    : "bg-[#141414] border-[#262626] text-[#8D8D8D] hover:text-white hover:border-[#3E3E3E]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {size.label}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    ₹{size.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <span className="text-[10px] text-[#777777] mt-0.5">
                  {size.dimensions}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Finish / Variant Selector (when product has variants) */}
      {product.variants && product.variants.length > 0 && (
        <div className="space-y-2.5 pt-1">
          <label className="text-[10px] font-semibold tracking-widest text-[#8D8D8D] uppercase block">
            SELECT FRAME FINISH / MATERIAL
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setSelectedVariant(variant)}
                className={`flex items-center justify-between p-3 rounded-[2px] border text-left transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
                  selectedVariant?.id === variant.id
                    ? "bg-[#1E1E1E] border-[#D94A36] text-white font-semibold"
                    : "bg-[#141414] border-[#262626] text-[#8D8D8D] hover:text-white hover:border-[#3E3E3E]"
                }`}
              >
                <span className="text-xs tracking-wider uppercase">
                  {variant.name}
                </span>
                {variant.priceDelta && variant.priceDelta > 0 ? (
                  <span className="text-[10px] text-[#D94A36] font-semibold">
                    +₹{variant.priceDelta}
                  </span>
                ) : (
                  <Check
                    className={`w-3.5 h-3.5 ${
                      selectedVariant?.id === variant.id
                        ? "text-[#D94A36]"
                        : "opacity-0"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & CTA Bar */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Quantity selector */}
          <div className="flex items-center border border-[#333333] rounded-[2px] bg-[#161616] h-12">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              disabled={quantity <= 1 || !product.inStock}
              className="px-3.5 h-full text-base text-[#8D8D8D] hover:text-white disabled:opacity-40 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-10 text-center text-sm font-semibold text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}
              disabled={quantity >= 10 || !product.inStock}
              className="px-3.5 h-full text-base text-[#8D8D8D] hover:text-white disabled:opacity-40 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to Bag Button */}
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 h-12 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>
              {product.inStock
                ? `ADD TO BAG • ₹${(currentPrice * quantity).toLocaleString(
                    "en-IN"
                  )}`
                : "CURRENTLY SOLD OUT"}
            </span>
          </Button>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            className={`h-12 w-12 rounded-[2px] border flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] ${
              isWishlisted
                ? "bg-[#D94A36]/15 border-[#D94A36] text-[#D94A36]"
                : "bg-[#161616] border-[#333333] text-[#D8D2C8] hover:text-white hover:border-[#444]"
            }`}
            aria-label={
              isWishlisted ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? "fill-[#D94A36]" : ""}`}
            />
          </button>
        </div>

        {/* Confidence Guarantees */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#8D8D8D] pt-1">
          <div className="flex items-center gap-1.5 p-2 bg-[#161616] border border-[#222222] rounded-[1px]">
            <Truck className="w-3.5 h-3.5 text-[#D94A36] shrink-0" />
            <span className="truncate">Free Insured Express Over ₹2,500</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 bg-[#161616] border border-[#222222] rounded-[1px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D94A36] shrink-0" />
            <span className="truncate">Transit Damage Replacement</span>
          </div>
        </div>
      </div>

      {/* Accordion Tabs for Details */}
      <div className="pt-4 border-t border-[#222222] space-y-2">
        {/* Specifications Tab */}
        <div className="border border-[#242424] rounded-[2px] bg-[#141414] overflow-hidden">
          <button
            type="button"
            onClick={() =>
              setOpenAccordion(openAccordion === "specs" ? "" : "specs")
            }
            className="w-full p-4 flex items-center justify-between text-left text-xs font-semibold tracking-widest uppercase text-white hover:bg-[#1A1A1A] transition-colors"
          >
            <span>PHYSICAL SPECIFICATIONS</span>
            <ChevronDown
              className={`w-4 h-4 text-[#8D8D8D] transition-transform duration-200 ${
                openAccordion === "specs" ? "rotate-180 text-white" : ""
              }`}
            />
          </button>

          {openAccordion === "specs" && (
            <div className="p-4 pt-0 border-t border-[#1F1F1F] text-xs space-y-2.5">
              {product.specs && product.specs.length > 0 ? (
                product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-[#1E1E1E] last:border-0"
                  >
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8D8D8D]">
                      {spec.label}
                    </span>
                    <span className="text-xs text-[#E0E0E0] font-medium sm:text-right">
                      {spec.value}
                    </span>
                  </div>
                ))
              ) : (
                <div className="space-y-2 py-1">
                  {product.dimensions && (
                    <div className="flex justify-between py-1 border-b border-[#1E1E1E]">
                      <span className="text-[#8D8D8D]">DIMENSIONS</span>
                      <span>{product.dimensions}</span>
                    </div>
                  )}
                  {product.material && (
                    <div className="flex justify-between py-1 border-b border-[#1E1E1E]">
                      <span className="text-[#8D8D8D]">MATERIAL</span>
                      <span>{product.material}</span>
                    </div>
                  )}
                  {product.finish && (
                    <div className="flex justify-between py-1">
                      <span className="text-[#8D8D8D]">FINISH</span>
                      <span>{product.finish}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* What's Included Tab */}
        {product.whatsIncluded && product.whatsIncluded.length > 0 && (
          <div className="border border-[#242424] rounded-[2px] bg-[#141414] overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setOpenAccordion(openAccordion === "included" ? "" : "included")
              }
              className="w-full p-4 flex items-center justify-between text-left text-xs font-semibold tracking-widest uppercase text-white hover:bg-[#1A1A1A] transition-colors"
            >
              <span>WHAT&apos;S IN THE BOX</span>
              <ChevronDown
                className={`w-4 h-4 text-[#8D8D8D] transition-transform duration-200 ${
                  openAccordion === "included" ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {openAccordion === "included" && (
              <div className="p-4 pt-0 border-t border-[#1F1F1F] text-xs space-y-2">
                {product.whatsIncluded.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#D0D0D0]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D94A36] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Studio Craft & Guarantee Tab */}
        <div className="border border-[#242424] rounded-[2px] bg-[#141414] overflow-hidden">
          <button
            type="button"
            onClick={() =>
              setOpenAccordion(openAccordion === "care" ? "" : "care")
            }
            className="w-full p-4 flex items-center justify-between text-left text-xs font-semibold tracking-widest uppercase text-white hover:bg-[#1A1A1A] transition-colors"
          >
            <span>STUDIO PACKAGING & GUARANTEE</span>
            <ChevronDown
              className={`w-4 h-4 text-[#8D8D8D] transition-transform duration-200 ${
                openAccordion === "care" ? "rotate-180 text-white" : ""
              }`}
            />
          </button>

          {openAccordion === "care" && (
            <div className="p-4 pt-0 border-t border-[#1F1F1F] text-xs text-[#8D8D8D] space-y-2 leading-relaxed">
              <p>
                All pieces are shipped in multi-layer armored cardboard with high-density EVA corner foam. We guarantee 100% damage-free delivery. In the rare event of transit damage, we ship an immediate replacement at zero cost upon receiving photo verification.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#D8D2C8]">
                <RotateCcw className="w-3.5 h-3.5 text-[#D94A36]" />
                <span>7-Day Replacement Guarantee for manufacturing defects.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
