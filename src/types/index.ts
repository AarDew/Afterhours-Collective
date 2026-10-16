export type ProductType =
  | "poster"
  | "framed-poster"
  | "illuminated-frame"
  | "figure"
  | "bundle";

export type FandomCategory =
  | "anime"
  | "superheroes"
  | "movies-series"
  | "gaming-cartoons"
  | "motorsport"
  | "other-sports"
  | "indian-cinema"
  | "mixed";

export interface ProductGalleryItem {
  url: string;
  label: string;
  alt: string;
  lightingState?: "lit" | "unlit";
}

export interface ProductSizeOption {
  id: string;
  label: string;
  dimensions: string;
  price: number;
}

export interface ProductVariantOption {
  id: string;
  name: string;
  priceDelta?: number;
}

export interface Product {
  id: string;
  title: string;
  fandom: string;
  fandomSlug: FandomCategory;
  productType: ProductType;
  productTypeLabel: string;
  price: number; // in INR
  originalPrice?: number;
  editionNote?: string;
  badge?: string;
  isNewDrop?: boolean;
  isLimited?: boolean;
  images: {
    primary: string;
    secondary?: string;
    lit?: string;
    unlit?: string;
    alt: string;
  };
  gallery?: ProductGalleryItem[];
  sizes?: ProductSizeOption[];
  variants?: ProductVariantOption[];
  dimensions?: string;
  material?: string;
  finish?: string;
  specs?: { label: string; value: string }[];
  whatsIncluded?: string[];
  shortDescription: string;
  longDescription?: string;
  inStock: boolean;
  slug: string;
  popularity?: number;
  createdAt?: string;
}

export interface CartItem {
  id: string; // unique item id composed of productId + size + variant
  product: Product;
  quantity: number;
  selectedSize?: ProductSizeOption;
  selectedVariant?: ProductVariantOption;
  unitPrice: number;
}

export type ProductSortOption =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "popularity";

export interface FilterState {
  productType: string;
  fandom: string;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: ProductSortOption;
}

export interface FandomTile {
  id: string;
  name: string;
  slug: FandomCategory;
  countLabel: string;
  image: string;
  description: string;
  accentColor?: string;
}

export interface WallOfFameItem {
  id: string;
  title: string;
  collectorName: string;
  collectorHandle: string;
  location: string;
  image: string;
  taggedProductTitles: string[];
  likesCount: number;
  featuredQuote: string;
  isVerifiedSetup: boolean;
}

export interface AnnouncementItem {
  id: string;
  message: string;
  highlightText?: string;
  linkText?: string;
  linkHref?: string;
}
