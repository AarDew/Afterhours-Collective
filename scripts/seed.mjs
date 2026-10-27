import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// 1. Read environment variables from .env.local
const envPath = path.resolve(".env.local");
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local file");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf-8");
const env = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const [key, ...vals] = trimmed.split("=");
  env[key.trim()] = vals.join("=").trim();
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

// 2. Transpile mock-data.ts in memory, stripping import from "@/types"
const mockDataTs = fs.readFileSync(path.resolve("src/data/mock-data.ts"), "utf-8");
// Remove the import from "@/types"
const cleanedTs = mockDataTs.replace(/import\s*\{[^}]*\}\s*from\s*['"]@\/types['"];?/g, "");

const transpiled = ts.transpileModule(cleanedTs, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
});

// Run in CommonJS sandbox
const moduleExports = {};
const fn = new Function("exports", "require", transpiled.outputText);
fn(moduleExports, (mod) => {
  throw new Error(`Unexpected require of ${mod}`);
});

const { mockProducts, mockWallOfFameItems } = moduleExports;

async function seed() {
  console.log(`\n📦 Starting seed for Afterhours Collective...`);
  console.log(`Found ${mockProducts.length} products and ${mockWallOfFameItems.length} wall of fame items.`);

  // Seed Products
  const productsToInsert = mockProducts.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    fandom: p.fandom,
    fandom_slug: p.fandomSlug,
    product_type: p.productType,
    product_type_label: p.productTypeLabel,
    price: p.price,
    original_price: p.originalPrice || null,
    edition_note: p.editionNote || null,
    badge: p.badge || null,
    is_new_drop: Boolean(p.isNewDrop),
    is_limited: Boolean(p.isLimited),
    in_stock: Boolean(p.inStock),
    images: p.images,
    gallery: p.gallery || null,
    sizes: p.sizes || null,
    variants: p.variants || null,
    dimensions: p.dimensions || null,
    material: p.material || null,
    finish: p.finish || null,
    specs: p.specs || null,
    whats_included: p.whatsIncluded || null,
    short_description: p.shortDescription,
    long_description: p.longDescription || null,
    popularity: p.popularity || 0,
  }));

  const { error: prodError } = await supabase
    .from("products")
    .upsert(productsToInsert, { onConflict: "id" });

  if (prodError) {
    console.error("❌ Error inserting products:", prodError.message);
  } else {
    console.log(`✅ Successfully seeded ${productsToInsert.length} products into 'public.products'!`);
  }

  // Seed Wall of Fame
  const wofToInsert = mockWallOfFameItems.map((w) => ({
    id: w.id,
    title: w.title,
    collector_name: w.collectorName,
    collector_handle: w.collectorHandle,
    location: w.location,
    image_url: w.image,
    tagged_product_titles: w.taggedProductTitles || [],
    likes_count: w.likesCount || 0,
    featured_quote: w.featuredQuote,
    is_verified_setup: Boolean(w.isVerifiedSetup),
    is_approved: true, // Seeded items approved by default
  }));

  const { error: wofError } = await supabase
    .from("wall_of_fame")
    .upsert(wofToInsert, { onConflict: "id" });

  if (wofError) {
    console.error("❌ Error inserting wall of fame:", wofError.message);
  } else {
    console.log(`✅ Successfully seeded ${wofToInsert.length} wall of fame items into 'public.wall_of_fame'!`);
  }

  console.log("\n🎉 Database seed complete!\n");
}

seed().catch(console.error);
