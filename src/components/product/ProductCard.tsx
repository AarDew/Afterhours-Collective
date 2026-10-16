"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { PriceTag } from "@/components/ui/PriceTag";

import { useStore } from "@/context/StoreContext";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  compact?: boolean;
  href?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  priority = false,
  compact = false,
  href,
}) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);
  const [isHovered, setIsHovered] = useState(false);

  // If this product is dual-state, switch image on hover
  const displayImage =
    isHovered && product.images.secondary
      ? product.images.secondary
      : product.images.primary;

  const productUrl = href || `/products/${product.slug}`;

  return (
    <div
      className="group flex flex-col bg-[#141414] border border-[#242424] hover:border-[#3A3A3A] transition-all duration-300 rounded-[2px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181818]">
        <Image
          src={displayImage}
          alt={product.images.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
            !product.inStock ? "opacity-60 grayscale-[40%]" : ""
          }`}
          priority={priority}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none z-10">
          <div className="flex flex-col gap-1.5">
            {!product.inStock ? (
              <Badge variant="stone">SOLD OUT</Badge>
            ) : product.badge ? (
              <Badge variant={product.isLimited ? "ember" : "stone"}>
                {product.badge}
              </Badge>
            ) : null}

            {product.productType === "illuminated-frame" && product.inStock && (
              <span className="text-[9px] font-bold tracking-widest uppercase bg-black/80 backdrop-blur-sm text-[#F5F2EC] px-2 py-0.5 border border-white/10 rounded-[2px]">
                HOVER TO REVEAL
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className="pointer-events-auto p-2 rounded-full bg-black/60 backdrop-blur-md text-[#D8D2C8] hover:text-[#D94A36] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isWishlisted ? "fill-[#D94A36] text-[#D94A36]" : ""
              }`}
            />
          </button>
        </div>

        {/* Edition Label overlay at bottom of image */}
        {product.editionNote && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6 pointer-events-none">
            <span className="text-[10px] font-semibold tracking-widest text-[#D8D2C8] uppercase">
              {product.editionNote}
            </span>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div
        className={`${
          compact ? "p-3 sm:p-4" : "p-4 sm:p-5"
        } flex flex-col flex-1 justify-between gap-3 bg-[#141414]`}
      >
        <div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#8D8D8D] mb-1.5">
            <span>{product.fandom}</span>
            <span className="text-[#666666]">{product.productTypeLabel}</span>
          </div>

          <Link href={productUrl} className="group-hover:text-[#D94A36] transition-colors">
            <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold tracking-wide uppercase text-white leading-snug">
              {product.title}
            </h3>
          </Link>

          {!compact && (
            <p className="mt-1.5 text-xs text-[#8D8D8D] line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          )}

          {product.dimensions && !compact && (
            <p className="mt-2 text-[10px] tracking-wider uppercase text-[#666666]">
              {product.dimensions}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
          <PriceTag price={product.price} originalPrice={product.originalPrice} size={compact ? "sm" : "md"} />

          <Link
            href={productUrl}
            className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#D8D2C8] hover:text-[#D94A36] transition-colors"
          >
            {product.inStock ? "VIEW DETAILS →" : "JOIN WAITLIST →"}
          </Link>
        </div>
      </div>
    </div>
  );
};
