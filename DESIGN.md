# AFTERHOURS COLLECTIVE
## Design Direction & UI/UX Specification

> Working brand concept for a premium, accessible pop-culture collectibles business.
> This document is the design source of truth for Google Stitch and the implementation reference for Antigravity.
> The name, tagline, pricing, and sample content are provisional and must remain easy to change.

---

## 1. Product Vision

Build a design-led collectibles brand where people can discover, purchase, display, and share physical objects inspired by the worlds they love.

### Product lines
- **Art posters:** unframed, display-ready artwork.
- **Framed posters:** finished wall art in a frame.
- **Illuminated reveal frames:** frames designed to present different visual states under different lighting conditions.
- **3D-printed figures:** display collectibles with product-specific dimensions, finishes, and details.
- **Future extensions:** bundles, themed sets, genuine limited editions, and collector-exclusive drops.

### Core experience
1. **Discover** products through fandoms, categories, editorial campaigns, and new drops.
2. **Collect** items with clear product information and useful pairing suggestions.
3. **Display** products in real spaces and see how they fit a personal setup.
4. **Share** collections through Wall of Fame.
5. **Return** for new collections, community challenges, and relevant drops.

### Positioning
Affordable premium: distinctive and well-presented, but not inaccessible or discount-marketplace cheap.

### Working tagline
**YOUR WORLD. YOUR WALL. YOUR COLLECTION.**

Supporting line: **For the things you never outgrew.**

Do not imply official licensing, manufacturer partnerships, product quality claims, or physical product capabilities unless verified. All sample product information is illustrative.

---

## 2. Brand Personality

The brand should feel:
- Bold and expressive.
- Premium but approachable.
- Nostalgic yet contemporary.
- Playful without feeling childish.
- Cinematic, artistic, and collector-focused.
- Community-driven and trustworthy.

Avoid:
- Generic marketplace styling.
- Overly luxurious design that feels financially exclusive.
- Childish toy-store styling.
- Excessive gradients, glassmorphism, neon outlines, floating decorations, and giant rounded cards.
- Repetitive AI-template layouts and filler copy.
- Fake scarcity, fake reviews, fake purchase notifications, or fabricated community activity presented as real.

---

## 3. Visual Design System

### 3.1 Colour tokens

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#111111` | Main dark background, footer, cinematic sections |
| Charcoal | `#1A1A1A` | Secondary dark surfaces |
| Warm Ivory | `#F5F2EC` | Main light background and editorial sections |
| Muted Stone | `#D8D2C8` | Borders, muted surfaces, secondary details |
| Ember Red | `#D94A36` | Primary accent, important CTA, active states |
| Soft Grey | `#8D8D8D` | Secondary text on light surfaces, metadata |
| White | `#FFFFFF` | Text and surfaces where contrast is appropriate |

Use ember red sparingly. Do not colour every button, badge, or link red. Keep colour usage purposeful.

### 3.2 Typography

Use a two-family system:
- **Display:** bold, condensed sans-serif for campaign headlines, collection titles, and expressive typographic moments.
- **Interface:** highly legible contemporary sans-serif for body copy, product information, navigation, prices, and forms.

Typography rules:
- Strong hierarchy, short headings, clear labels, readable body copy.
- Oversized type is an editorial tool, not decoration on every section.
- Avoid using more than two type families unless a specific campaign requires it.
- Keep line lengths comfortable and preserve legibility on mobile.
- Use uppercase selectively for short labels, categories, and campaign statements.

### 3.3 Layout and spacing

- Use a consistent spacing scale based on 4px increments.
- Use generous whitespace for editorial sections.
- Align product grids and text to a clear layout grid.
- Use asymmetry only when it supports the story or artwork.
- Prefer sharp or subtly rounded corners. Define a small, consistent radius scale.
- Use subtle borders and restrained shadows.
- Avoid nesting cards inside cards.
- Keep important product imagery large and unobstructed.

### 3.4 Imagery and art direction

Use high-quality, art-led visuals and product photography. The artwork should be the hero, not UI decoration.

Reference direction from the supplied images:
- **Itachi poster references:** cinematic red/orange light, dark silhouettes, birds, atmospheric contrast, dramatic anime poster composition.
- **Repeated-type character poster:** large condensed typography behind a central character silhouette; bold editorial layout.
- **Spider-Man portrait:** expressive graphic-novel energy, layered colour, painterly textures.
- **Motorsport display:** framed art, miniature vehicle, warm practical lighting, collector-room atmosphere.
- **Spider-Man figure composition:** central display figure with supporting artwork and a gallery-like presentation.

Translate these into original, varied campaign compositions. Do not use the same image treatment for every fandom. Keep placeholders clearly replaceable with real, approved product photography.

Product imagery must communicate the physical product type accurately:
- Poster: show the artwork and optionally a room-context mockup.
- Framed poster: show the frame and finish clearly.
- Illuminated reveal frame: show the separate lighting states and explain the actual behaviour accurately.
- Figure: show front, side, back, base, and detail views where available.

Do not imply placeholder renders are photographs of manufactured stock.

---

## 4. Information Architecture

### Primary navigation
- Shop
- Collections
- New Drops
- Wall of Fame
- About
- Search
- Account
- Wishlist
- Shopping bag

Keep navigation compact. On mobile, use a well-structured menu and persistent access to search and the bag.

### Main pages
1. Home
2. Shop / All Products
3. Collection / Category
4. Product Detail
5. New Drops
6. Wall of Fame
7. Collector Profile / Submission Detail
8. About
9. Search Results
10. Wishlist
11. Cart
12. Checkout handoff
13. Sign In / Create Account
14. Customer Account / Order History
15. Admin Dashboard
16. Admin Product Management
17. Admin Collection and Category Management
18. Admin Content Management
19. Admin Community Moderation
20. Policies, FAQ, Shipping, Returns, Contact

### Product discovery taxonomy
Browse by both **fandom** and **product type**.

Suggested fandoms:
- Anime
- Superheroes
- Movies & Series
- Gaming & Cartoons
- Motorsport
- Other Sports
- Indian Cinema & Series
- Mixed Collections

Suggested product types:
- Posters
- Framed Posters
- Illuminated Reveal Frames
- 3D-Printed Figures
- Bundles

A product may belong to multiple collections and have one or more relevant tags. Avoid a rigid taxonomy that prevents future categories.

---

## 5. Page Specifications

### 5.1 Home

The homepage must tell a story rather than present disconnected product grids.

Recommended section order:
1. Editable announcement bar.
2. Premium global navigation.
3. Cinematic hero with headline, short supporting copy, primary CTA “EXPLORE THE COLLECTION” and secondary CTA “SHOW US YOUR SETUP”.
4. Distinctive category/fandom tiles.
5. “MORE THAN A POSTER” feature for illuminated reveal frames, showing both lighting states.
6. “BUILD YOUR UNIVERSE” feature for 3D-printed figures.
7. New drops / latest arrivals.
8. Editorial campaign or fandom spotlight.
9. Wall of Fame preview with real or clearly labelled sample setups.
10. Collector's Picks / bundles.
11. Short brand story.
12. Newsletter or drop-alert signup.
13. Footer with support, policies, contact, and social links.

Home should balance cinematic dark sections with warm ivory editorial sections. Avoid making the entire page a uniform dark slab. Use artwork, contrast, and whitespace to create rhythm.

### 5.2 Shop / All Products

Include:
- Page title and short editorial introduction.
- Product-type and fandom navigation.
- Filters: product type, fandom, price range, availability, collection.
- Sorting: featured, newest, price low-to-high, price high-to-low, popularity.
- Product cards with image, title, fandom, price, product type, and relevant availability/edition label.
- Wishlist action.
- Quick view or quick add only if it does not clutter the card.
- Active filter chips and a reset-all control.
- Empty results state with a useful way to clear filters.
- Responsive product grid and mobile filter drawer.

Do not overload cards with badges. Make product imagery the dominant element.

### 5.3 Collection / Category

Reusable templates for Anime, Superheroes, Movies & Series, Gaming & Cartoons, Motorsport, Other Sports, and Indian Cinema & Series.

Include:
- Campaign cover image and category title.
- Short editorial description.
- Product grid.
- Filters by product type, price, and availability.
- Featured collection or curated story.
- Related fandoms and paired products.

Each category may have its own accent imagery and art direction, but must retain shared typography, spacing, navigation, and controls.

### 5.4 Product Detail

Include:
- Large image gallery with thumbnails and zoom where appropriate.
- Product name, fandom, product type, price in INR.
- Product variants and sizes, if applicable.
- Editable specifications: dimensions, materials, finish, care, and contents.
- Stock/availability status based on real data.
- Configurable dispatch/delivery information.
- Add to Cart and Buy Now.
- Wishlist.
- Shipping, returns, and FAQ details.
- Reviews with text, rating, and photo/video support where implemented.
- Related products and “PAIR IT WITH” collection-building suggestions.
- Room-context display image where available.

**Illuminated reveal frame:** provide an accessible “LIGHT OFF / LIGHT ON” control with a visual comparison of the two real states. If the prototype cannot demonstrate physical lighting, present two labelled images rather than implying the website is controlling a real light.

**3D figure:** show multiple angles and close-up details. Make dimensions, scale, material, finish, and included accessories clear when known.

### 5.5 Wall of Fame

This is a core brand differentiator, not an ordinary reviews page.

Include:
- Headline: “YOUR COLLECTION. YOUR LEGACY.”
- Explanation of the community and submission rules.
- Upload/submission action for collection photos and videos.
- Editorial or masonry gallery of collector setups.
- Collector display name/profile image when provided.
- Likes/votes and comments where enabled.
- Product tags that link to matching items.
- Filters for fandoms and mixed collections.
- Sorting: trending, newest, most liked.
- Featured collector / collector story.
- Monthly or seasonal challenge.
- Top 10 leaderboard.
- Prize/goodies information with editable rules and dates.
- Genuine customer review and video showcase area.
- Reporting and moderation controls.

Design the following states:
- Empty community.
- Uploading.
- Pending moderation.
- Approved/published.
- Rejected with an appropriate explanation.
- Contest not yet open.
- Contest active.
- Voting closed.
- Submission reported.
- Failed upload.

Community submissions should not appear publicly until approved if moderation is enabled. Include privacy controls and a way for users to remove their own submissions.

Leaderboard and prize rules must be transparent. Define the voting window, eligibility, ties, abuse handling, and winner selection before launch. Do not fabricate real community activity.

### 5.6 New Drops

Include:
- Campaign hero.
- Upcoming, live, and sold-out states.
- Release date and countdown placeholders.
- Drop-specific collection grid.
- Notify-me signup.
- Related products and collections.

Use limited-edition messaging only when the edition is genuinely limited. Avoid fake countdowns and artificial scarcity.

### 5.7 About

Use editorial storytelling to explain:
- Why the brand exists.
- The connection between collecting and personal identity.
- The design process and product philosophy.
- Community aspirations.
- Craft and manufacturing details only when verified.

### 5.8 Search, Wishlist, Cart, Checkout

Design:
- Search overlay with suggestions and product results.
- No-results state.
- Wishlist and empty wishlist.
- Cart drawer and full cart.
- Quantity and variant controls.
- Coupon field.
- Subtotal, shipping estimate, and order summary.
- Checkout handoff.
- Loading, error, and success states.

Do not imply payment integration or payment success in a static prototype. Make taxes, shipping, and final totals dependent on actual checkout logic.

### 5.9 Customer Account

Include:
- Sign in / account creation.
- Profile and saved preferences.
- Order history and order detail.
- Saved addresses.
- Wishlist.
- Community submissions.
- Review history.
- Public collector profile and privacy settings.

### 5.10 Admin Dashboard

The storefront must be manageable without frontend code changes.

#### Overview
- Illustrative sales and order metrics.
- Recent orders.
- Popular products.
- Low-stock indicators.
- Pending submissions/reviews.
- Community activity.

#### Product management
- Create, edit, publish, unpublish, archive, and delete products.
- Upload and reorder images.
- Manage product type, title, description, price, variants, dimensions, materials, finish, stock, and status.
- Assign fandom, collections, tags, and categories.
- Feature products and associate them with drops.
- Manage related products and bundles.

#### Collections and categories
- Create, edit, reorder, publish, unpublish, archive, and remove.
- Support parent categories and subcategories where useful.
- Upload cover images and campaign banners.
- Assign products to multiple collections.
- Configure homepage featured collections.
- Edit descriptions and SEO fields.

#### Homepage content
- Edit hero copy, artwork, buttons, announcement bar, campaigns, featured products, and homepage sections.
- Reorder sections.
- Schedule campaigns if supported.

#### Community moderation
- Approve, reject, feature, or remove submissions.
- Moderate comments and reviews.
- Manage reported content.
- Configure contest dates, eligibility, prizes, and voting rules.
- Review leaderboard activity and suspicious voting.

#### Orders and support
- View order and payment status.
- Update fulfillment and tracking information.
- Manage returns and customer inquiries.

#### Site settings
- Brand information.
- Navigation and footer.
- Shipping and returns policies.
- Newsletter settings.
- Promotional content.

Admin UX must include searchable tables, filters, pagination where needed, validation, confirmation for destructive actions, clear feedback, and empty/error/loading states. Destructive actions should not happen from a single accidental click.

Enforce authorization on the backend. Hiding an admin link in the frontend is not security.

---

## 6. Interaction and Motion Principles

Motion should reinforce the product and brand, never compete with the artwork.

Preferred motion:
- Short, smooth page/section transitions.
- Restrained product-image zoom on hover.
- Text reveal on scroll for selected editorial sections.
- Slow, controlled campaign marquee.
- Subtle parallax on selected hero imagery.
- Smooth image-gallery transitions.
- Clear transition between illuminated-frame states.
- Gentle Wall of Fame gallery transitions.
- Tactile button and cart feedback.
- Lightweight toast notifications.

Avoid:
- Constant motion.
- Long splash screens.
- Excessive cursor effects.
- Unnecessary particle/ember effects throughout the whole site.
- Animations that delay purchase or navigation.
- Motion that causes layout shift.

Respect `prefers-reduced-motion`. Keep all key actions usable without animation.

---

## 7. Responsive Behaviour

Design intentionally for desktop, tablet, and mobile.

### Desktop
- Full navigation.
- Strong editorial hero composition.
- Spacious product grids.
- Large product gallery.
- Rich Wall of Fame layout.

### Tablet
- Rebalanced grid and typography.
- Avoid cramped navigation.
- Maintain useful product-image sizes.

### Mobile
- Compact navigation and accessible menu.
- Search and bag remain easy to reach.
- Swipe-friendly galleries.
- Touch-friendly filters, selectors, and voting.
- Clear product price and purchase actions.
- Useful filter drawer.
- No text placed over visually busy areas without contrast.
- Avoid sticky elements that hide content.
- Checkout must be simple and legible.

Do not simply scale down the desktop design.

---

## 8. Reusable Component Library

Define reusable, consistently styled components for:
- Announcement bar.
- Header, mobile menu, footer.
- Primary/secondary/text buttons.
- Inputs, selects, checkboxes, and radio controls.
- Product cards and product grids.
- Collection/fandom tiles.
- Product badges and availability labels.
- Price display.
- Filters, sorting, and active filter chips.
- Product gallery and variant selectors.
- Reviews and review media.
- Community gallery tiles.
- Collector profiles and leaderboard rows.
- Modal, drawer, tooltip, and toast.
- Admin sidebar, table, form, and confirmation dialog.
- Loading skeletons, empty states, and error states.

Define hover, focus, active, disabled, loading, and error states where applicable. Reuse components instead of creating slightly different versions on every page.

---

## 9. Accessibility, Trust, and Content Rules

- Maintain readable contrast and scalable text.
- Use semantic heading hierarchy.
- Ensure keyboard access and visible focus.
- Label inputs and controls clearly.
- Provide alt text for meaningful imagery.
- Do not rely on colour alone to communicate status.
- Respect reduced-motion settings.
- Explain dimensions, materials, product type, shipping, and returns clearly.
- Do not invent reviews, customer identities, ratings, sales counts, or stock claims.
- Label demo content as sample content.
- Provide privacy controls for community uploads and profiles.
- Publish transparent voting and contest rules.
- Keep all real commercial terms configurable until confirmed.

---

## 10. Stitch Workflow and Design Deliverables

Use this document as the design brief and source of truth.

Create a cohesive high-fidelity design in this order:
1. Homepage.
2. Shop / All Products.
3. Illuminated reveal frame product detail.
4. 3D figure product detail.
5. Collection page.
6. Wall of Fame.
7. Cart.
8. Admin dashboard and product management.
9. Mobile homepage and mobile product page.
10. Remaining account, checkout, search, and admin states.

Keep the same design tokens and component language across all screens. Connect screens with realistic navigation. If an interaction cannot be implemented in Stitch, represent the relevant states and document the expected behaviour.

Before finalizing, review:
- Is the brand visually recognizable without relying on the logo?
- Does the homepage tell a coherent story?
- Are the three product types immediately distinguishable?
- Does each product page help the user understand what they are buying?
- Does Wall of Fame feel like a genuine destination?
- Can the owner add or remove products and collections without changing code?
- Is mobile intentionally designed?
- Are motion, contrast, and typography accessible?
- Have generic template patterns and unnecessary decoration been removed?

---

## 11. Handoff Notes for Antigravity

When implementing this design:
- Treat the approved Stitch screens and this document as the visual source of truth.
- Build reusable components and shared design tokens first.
- Keep all products, categories, collections, homepage sections, drops, and community content data-driven.
- Separate the storefront, customer account, and admin experiences.
- Implement backend authorization for admin operations.
- Use real data and integrations for inventory, orders, payments, uploads, reviews, and voting. Do not simulate production functionality as if it were live.
- Use secure image/file upload validation, moderation, rate limiting, and abuse prevention.
- Keep payment processing in a suitable provider integration; never store raw payment-card details.
- Use a maintainable data model so a product can appear in multiple collections.
- Ensure the admin can manage content without code changes.
- Test desktop and mobile layouts and the complete purchase journey.
- Keep the working brand name, colours, typography, and copy easy to update.

**Primary design principle:** Make products feel display-worthy, make collecting feel personal, and make the community worth returning to.
