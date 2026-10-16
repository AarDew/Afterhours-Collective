"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { cartCount, wishlist, openCart } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "SHOP", href: "/shop" },
    { label: "COLLECTIONS", href: "/#fandoms" },
    { label: "REVEAL FRAMES", href: "/shop?type=illuminated-frame" },
    { label: "3D FIGURES", href: "/shop?type=figure" },
    { label: "WALL OF FAME", href: "/#wall-of-fame" },
    { label: "OUR STORY", href: "/#brand-story" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#242424] py-3 shadow-lg shadow-black/50"
            : "bg-[#111111] border-b border-[#222222] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Mobile & Tablet menu trigger (shown below lg to avoid header crowding) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-[#D8D2C8] hover:text-white hover:bg-[#1C1C1C] active:scale-95 rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36]"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] rounded py-1 px-1.5 -ml-1.5"
          >
            <div className="w-2.5 h-2.5 bg-[#D94A36] rotate-45 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
            <span className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-white uppercase select-none">
              AFTERHOURS <span className="text-[#8D8D8D] font-normal transition-colors group-hover:text-white">COLLECTIVE</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Cleanly spaced for lg+ screens) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D8D2C8] hover:text-white transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] rounded-sm group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D94A36] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Utility Actions (Search, Wishlist, Bag with clear interactive states) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] ${
                searchOpen
                  ? "bg-[#1E1E1E] text-white border border-[#3A3A3A]"
                  : "text-[#D8D2C8] hover:text-white hover:bg-[#1C1C1C]"
              }`}
              aria-label="Search collectibles"
              aria-expanded={searchOpen}
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/shop"
              className="p-2 text-[#D8D2C8] hover:text-white hover:bg-[#1C1C1C] rounded transition-all duration-200 relative active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36]"
              aria-label={`Wishlist with ${wishlist.length} saved items`}
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? "fill-[#D94A36] text-[#D94A36]" : ""}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D94A36] ring-2 ring-[#111111]" />
              )}
            </Link>

            <button
              onClick={openCart}
              className="p-1.5 sm:px-3 sm:py-1.5 text-white bg-[#1A1A1A] hover:bg-[#252525] hover:border-[#4A4A4A] border border-[#2F2F2F] transition-all duration-200 active:scale-95 relative flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] rounded-[2px]"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D8D2C8]" />
              <span className="text-xs font-semibold tracking-wider">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#222222] bg-[#141414] px-4 py-3 sm:px-6 transition-all duration-200 animate-in fade-in slide-in-from-top-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                  setSearchOpen(false);
                }
              }}
              className="max-w-2xl mx-auto flex items-center gap-3"
            >
              <Search className="w-4 h-4 text-[#8D8D8D] shrink-0" />
              <input
                type="text"
                placeholder="Search by fandom, character, or format (e.g. Itachi, Spider-Man, Reveal Frame)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="text-[10px] sm:text-xs text-[#D94A36] hover:text-white tracking-widest uppercase font-semibold shrink-0 py-1 px-2 hover:bg-[#1E1E1E] rounded transition-colors"
              >
                SEARCH
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[10px] sm:text-xs text-[#8D8D8D] hover:text-white tracking-widest uppercase font-semibold shrink-0 py-1 px-2 hover:bg-[#1E1E1E] rounded transition-colors"
              >
                CLOSE
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-full max-w-xs bg-[#141414] border-r border-[#242424] p-6 flex flex-col justify-between h-full z-10 animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#242424]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D94A36] rotate-45" />
                  <span className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white uppercase">
                    AFTERHOURS <span className="text-[#8D8D8D]">COLLECTIVE</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#8D8D8D] hover:text-white hover:bg-[#1E1E1E] rounded transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D8D2C8] hover:text-white hover:bg-[#1A1A1A] rounded transition-colors border-b border-[#1C1C1C]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D94A36]" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#242424] space-y-4">
              <p className="text-[10px] text-[#8D8D8D] tracking-widest uppercase font-medium">
                YOUR WORLD. YOUR WALL. YOUR COLLECTION.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-[#D8D2C8]">
                <Link href="#account" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                  ACCOUNT
                </Link>
                <span className="text-[#444]">•</span>
                <Link href="#wishlist" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                  WISHLIST (1)
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
