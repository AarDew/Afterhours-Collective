import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { mockProducts } from "@/data/mock-data";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Collectible Not Found | Afterhours Collective",
    };
  }

  return {
    title: `${product.title} | Afterhours Collective`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Afterhours Collective`,
      description: product.shortDescription,
      images: [product.images.primary],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same fandom or format (excluding current product)
  const relatedProducts = mockProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.fandomSlug === product.fandomSlug ||
          p.productType === product.productType)
    )
    .slice(0, 4);

  return (
    <div className="bg-[#111111] min-h-screen text-white pt-6 pb-24 border-b border-[#222222]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav
          className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#8D8D8D] overflow-x-auto whitespace-nowrap scrollbar-none"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>HOME</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <Link href="/shop" className="hover:text-white transition-colors">
            <span>SHOP</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <Link
            href={`/shop?fandom=${product.fandomSlug}`}
            className="hover:text-white transition-colors"
          >
            <span>{product.fandom}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <span className="text-white truncate max-w-[200px] sm:max-w-none">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Main Two-Column Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery product={product} />
          </div>

          {/* Right Column: Product Information & Purchase Controls */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Editorial Long Narrative Section */}
      {product.longDescription && (
        <section className="mt-16 py-16 bg-[#161616] border-y border-[#242424]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D94A36]">
              STUDIO CURATION & ARCHITECTURE
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
              ABOUT THIS COLLECTIBLE
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed max-w-2xl mx-auto pt-2">
              {product.longDescription}
            </p>
          </div>
        </section>
      )}

      {/* Related Collectibles Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <SectionHeading
            eyebrow="PAIR IT WITH"
            title="COMPLEMENTARY PIECES"
            subtitle="Curate your wall or display shelf with matching prints, figures, and illuminated frames."
            actionText="VIEW ALL PIECES"
            actionHref="/shop"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                href={`/products/${relProduct.slug}`}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D8D2C8] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#D94A36]" />
              <span>RETURN TO ALL COLLECTIBLES</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
