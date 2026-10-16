"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { PriceTag } from "@/components/ui/PriceTag";
import { Button } from "@/components/ui/Button";

const FREE_SHIPPING_THRESHOLD = 2500;

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useStore();

  if (!isCartOpen) return null;

  const freeShippingRemaining = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - cartSubtotal
  );
  const freeShippingProgress = Math.min(
    100,
    (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#141414] border-l border-[#242424] shadow-2xl flex flex-col justify-between h-full z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#242424] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#D94A36]" />
            <h2 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              YOUR BAG ({cartCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-[#8D8D8D] hover:text-white hover:bg-[#1E1E1E] rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36]"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-5 sm:px-6 py-3 bg-[#181818] border-b border-[#242424]">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            {freeShippingRemaining > 0 ? (
              <span className="text-[#D8D2C8]">
                Add{" "}
                <span className="text-white font-bold">
                  ₹{freeShippingRemaining.toLocaleString("en-IN")}
                </span>{" "}
                more for free insured express delivery
              </span>
            ) : (
              <span className="text-[#10B981] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                You&apos;ve unlocked Free Insured Express Delivery!
              </span>
            )}
            <span className="text-[10px] text-[#8D8D8D] font-bold">
              {Math.round(freeShippingProgress)}%
            </span>
          </div>
          <div className="w-full h-1 bg-[#282828] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D94A36] transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Line Items or Empty State */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#666666] mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white tracking-wide">
                YOUR BAG IS CURRENTLY EMPTY
              </h3>
              <p className="mt-2 text-xs text-[#8D8D8D] max-w-xs leading-relaxed">
                Explore our dual-state illuminated frames, archival prints, and precision 3D figures to start your collection.
              </p>
              <div className="mt-6">
                <Button variant="primary" size="md" href="/shop" onClick={closeCart}>
                  EXPLORE COLLECTIBLES
                </Button>
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-[#181818] border border-[#252525] rounded-[2px]"
              >
                {/* Thumbnail */}
                <div className="relative w-20 aspect-[4/5] bg-black rounded-[2px] overflow-hidden shrink-0 border border-[#2D2D2D]">
                  <Image
                    src={item.product.images.primary}
                    alt={item.product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/products/${item.product.slug}`}
                        onClick={closeCart}
                        className="font-[family-name:var(--font-display)] text-sm font-bold uppercase text-white hover:text-[#D94A36] transition-colors truncate"
                      >
                        {item.product.title}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#666666] hover:text-[#D94A36] transition-colors p-1"
                        aria-label={`Remove ${item.product.title} from cart`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[10px] uppercase tracking-wider text-[#8D8D8D] mt-0.5">
                      {item.product.productTypeLabel}
                    </p>

                    {item.selectedSize && (
                      <p className="text-[10px] text-[#A0A0A0] mt-0.5">
                        Size: {item.selectedSize.label} ({item.selectedSize.dimensions})
                      </p>
                    )}

                    {item.selectedVariant && (
                      <p className="text-[10px] text-[#A0A0A0] mt-0.5">
                        Finish: {item.selectedVariant.name}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#222222] mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#333333] rounded-[2px] bg-[#141414]">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#8D8D8D] hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-semibold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#8D8D8D] hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Line Total */}
                    <PriceTag price={item.unitPrice * item.quantity} size="sm" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Handoff */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#161616] border-t border-[#242424] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8D8D8D] uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                ₹{cartSubtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="text-[10px] text-[#666666] leading-relaxed">
              Taxes calculated at checkout. Shipped in armored collector packaging with transit insurance.
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                alert("Prototype Checkout: Payment integrations will be connected in a future milestone. Items remain saved in your bag.");
              }}
              className="w-full justify-center flex items-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <button
              onClick={closeCart}
              className="w-full text-center text-[11px] font-semibold tracking-widest uppercase text-[#8D8D8D] hover:text-white py-1 transition-colors"
            >
              CONTINUE BROWSING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
