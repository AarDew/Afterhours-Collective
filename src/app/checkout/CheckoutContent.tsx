"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShoppingBag,
  Lock,
  ChevronRight,
  AlertCircle,
  Loader2,
  PackageCheck,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/Button";

// ─── Constants ────────────────────────────────────────────────────────────────

const FREE_SHIPPING_THRESHOLD = 2500;
const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShippingForm {
  fullName: string;
  email: string;
  phone: string;
  addressLine: string;
  apartment: string;
  city: string;
  state: string;
  pincode: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  addressLine?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/; // Indian mobile: starts 6-9, 10 digits
const PINCODE_RE = /^\d{6}$/;

function validateForm(form: ShippingForm): FormErrors {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Mobile number is required.";
  } else if (!PHONE_RE.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!form.addressLine.trim()) {
    errors.addressLine = "Street address is required.";
  }

  if (!form.city.trim()) {
    errors.city = "City is required.";
  }

  if (!form.state) {
    errors.state = "Please select a state.";
  }

  if (!form.pincode.trim()) {
    errors.pincode = "PIN code is required.";
  } else if (!PINCODE_RE.test(form.pincode.trim())) {
    errors.pincode = "Enter a valid 6-digit Indian PIN code.";
  }

  return errors;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProgressBreadcrumb: React.FC<{ step: "shipping" | "review" }> = ({
  step,
}) => {
  const steps = [
    { id: "shipping", label: "Shipping" },
    { id: "review", label: "Review" },
    { id: "payment", label: "Payment" },
  ];
  return (
    <nav
      aria-label="Checkout progress"
      className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase"
    >
      {steps.map((s, i) => {
        const isActive = s.id === step;
        const isPast =
          steps.findIndex((x) => x.id === step) > i;
        return (
          <React.Fragment key={s.id}>
            {i > 0 && (
              <ChevronRight className="w-3 h-3 text-[#444444]" aria-hidden />
            )}
            <span
              className={
                isActive
                  ? "text-white"
                  : isPast
                  ? "text-[#D94A36]"
                  : "text-[#555555]"
              }
              aria-current={isActive ? "step" : undefined}
            >
              {s.label}
            </span>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
}

const Field: React.FC<FieldProps> = ({
  id,
  label,
  error,
  required,
  className = "",
  ...props
}) => {
  const inputBase =
    "w-full bg-[#1A1A1A] border rounded-[2px] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D94A36] focus:border-[#D94A36]";
  const inputBorder = error ? "border-[#D94A36]" : "border-[#2E2E2E] hover:border-[#3E3E3E]";

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold tracking-widest uppercase text-[#8D8D8D]"
      >
        {label}
        {required && <span className="text-[#D94A36] ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${inputBorder}`}
        {...props}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1 text-[11px] text-[#D94A36]"
        >
          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
};

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  options: string[];
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  error,
  required,
  options,
  placeholder = "Select…",
  className = "",
  ...props
}) => {
  const selectBase =
    "w-full bg-[#1A1A1A] border rounded-[2px] px-3.5 py-2.5 text-sm text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#D94A36] focus:border-[#D94A36] appearance-none";
  const selectBorder = error ? "border-[#D94A36]" : "border-[#2E2E2E] hover:border-[#3E3E3E]";

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold tracking-widest uppercase text-[#8D8D8D]"
      >
        {label}
        {required && <span className="text-[#D94A36] ml-0.5">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${selectBase} ${selectBorder} ${
            !props.value ? "text-[#555555]" : "text-white"
          }`}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1A1A1A] text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronRight
          className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 w-3.5 h-3.5 text-[#555555] pointer-events-none"
          aria-hidden
        />
      </div>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1 text-[11px] text-[#D94A36]"
        >
          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
};

// ─── Empty Cart State ─────────────────────────────────────────────────────────

const EmptyCartState: React.FC = () => (
  <div className="min-h-[70vh] bg-[#111111] flex items-center justify-center px-4 py-24">
    <div className="max-w-sm w-full text-center space-y-6">
      <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center text-[#555555] mx-auto">
        <ShoppingBag className="w-6 h-6" aria-hidden />
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36]">
          Nothing to Check Out
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
          Your Bag Is Empty
        </h1>
        <p className="text-xs text-[#8D8D8D] leading-relaxed pt-1">
          Add collectibles to your bag before proceeding to checkout.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button variant="primary" size="md" href="/shop">
          Explore Collectibles
        </Button>
        <Button variant="obsidian" size="md" href="/">
          Return Home
        </Button>
      </div>
    </div>
  </div>
);

// ─── Submission Pending Banner ────────────────────────────────────────────────

const NotYetConnectedBanner: React.FC = () => (
  <div
    role="status"
    aria-live="polite"
    className="rounded-[2px] border border-[#2E2E2E] bg-[#181818] p-5 space-y-3 text-center"
  >
    <div className="flex items-center justify-center gap-2 text-[#D94A36]">
      <PackageCheck className="w-5 h-5" aria-hidden />
      <span className="font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-white">
        Shipping Details Received
      </span>
    </div>
    <p className="text-xs text-[#8D8D8D] leading-relaxed max-w-sm mx-auto">
      Your shipping information has been validated. Payment processing will be
      connected in the next development phase. Your bag remains saved and no
      charge has been made.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
      <Button variant="obsidian" size="sm" href="/shop">
        Continue Shopping
      </Button>
      <Button variant="ghost" size="sm" href="/">
        Return Home
      </Button>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const CheckoutContent: React.FC = () => {
  const { cart, cartSubtotal, cartCount } = useStore();

  const [form, setForm] = useState<ShippingForm>({
    fullName: "",
    email: "",
    phone: "",
    addressLine: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  // touched tracks which fields have been blurred at least once for UX
  const [touched, setTouched] = useState<Partial<Record<keyof ShippingForm, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ── Derived totals (computed from trusted store state) ────────────────────
  const qualifiesForFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = qualifiesForFreeShipping ? 0 : 199;
  const orderTotal = cartSubtotal + shippingCost;

  // ── Form handlers — defined unconditionally before any early return ────────
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      // Re-validate the changed field if it was already touched
      if (touched[name as keyof ShippingForm]) {
        setErrors((prev) => {
          const revalidated = validateForm({ ...form, [name]: value });
          return { ...prev, [name]: revalidated[name as keyof FormErrors] };
        });
      }
    },
    [form, touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const revalidated = validateForm(form);
      setErrors((prev) => ({
        ...prev,
        [name]: revalidated[name as keyof FormErrors],
      }));
    },
    [form]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      // Mark all fields touched so errors surface
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        addressLine: true,
        city: true,
        state: true,
        pincode: true,
      });

      const validationErrors = validateForm(form);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        // Focus the first invalid field
        const firstErrorKey = Object.keys(validationErrors)[0];
        document.getElementById(firstErrorKey)?.focus();
        return;
      }

      setIsSubmitting(true);
      // Phase 1 boundary: no real server call — show confirmation UI
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 800);
    },
    [form, isSubmitting]
  );

  // ── Early returns after all hooks ─────────────────────────────────────────

  // Empty cart guard
  if (cart.length === 0 && !submitted) {
    return <EmptyCartState />;
  }

  // Submitted state
  if (submitted) {
    return (
      <div className="min-h-[70vh] bg-[#111111] flex items-center justify-center px-4 py-24">
        <div className="max-w-sm w-full">
          <NotYetConnectedBanner />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white pb-24">
      {/* ── Page Header ── */}
      <div className="border-b border-[#1E1E1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-white hover:text-[#D94A36] transition-colors"
            aria-label="Return to Afterhours Collective homepage"
          >
            Afterhours
          </Link>
          <ProgressBreadcrumb step="shipping" />
          <div className="flex items-center gap-1.5 text-[#555555]">
            <Lock className="w-3.5 h-3.5" aria-hidden />
            <span className="text-[10px] font-semibold uppercase tracking-widest hidden sm:inline">
              Secure
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Page title + back link */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#8D8D8D] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D94A36]" aria-hidden />
            Return to Shop
          </Link>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-3">
            Checkout
          </h1>
          <p className="text-xs text-[#8D8D8D] mt-1">
            {cartCount} {cartCount === 1 ? "item" : "items"} in your bag
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* ── Left: Shipping Form ── */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Shipping information"
            >
              {/* Section heading */}
              <div className="mb-6">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D94A36]">
                  Step 1 of 2
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white mt-1">
                  Shipping Details
                </h2>
                <p className="text-xs text-[#8D8D8D] mt-0.5">
                  We ship across India in armoured collector packaging with
                  transit insurance.
                </p>
              </div>

              {/* Contact */}
              <fieldset className="space-y-4 mb-8">
                <legend className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#555555] pb-2 border-b border-[#1E1E1E] w-full">
                  Contact Information
                </legend>

                <Field
                  id="fullName"
                  label="Full Name"
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="Rohan Mehra"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.fullName}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    id="email"
                    label="Email Address"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="rohan@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                  />
                  <Field
                    id="phone"
                    label="Mobile Number"
                    required
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    placeholder="9876543210"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                  />
                </div>
              </fieldset>

              {/* Delivery Address */}
              <fieldset className="space-y-4 mb-8">
                <legend className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#555555] pb-2 border-b border-[#1E1E1E] w-full">
                  Delivery Address
                </legend>

                <Field
                  id="addressLine"
                  label="Street Address"
                  required
                  type="text"
                  autoComplete="address-line1"
                  placeholder="House / Flat no., Building, Street"
                  value={form.addressLine}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.addressLine}
                />

                <Field
                  id="apartment"
                  label="Apartment / Unit / Landmark"
                  type="text"
                  autoComplete="address-line2"
                  placeholder="Optional — floor, wing, landmark"
                  value={form.apartment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    id="city"
                    label="City"
                    required
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Mumbai"
                    value={form.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city}
                  />
                  <Field
                    id="pincode"
                    label="PIN Code"
                    required
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    placeholder="400001"
                    maxLength={6}
                    value={form.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.pincode}
                  />
                </div>

                <SelectField
                  id="state"
                  label="State / Union Territory"
                  required
                  options={INDIAN_STATES}
                  placeholder="Select your state"
                  value={form.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.state}
                />
              </fieldset>

              {/* Submit */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D94A36] hover:bg-[#BF3F2D] active:bg-[#AA3726] text-white text-sm font-semibold tracking-widest uppercase px-7 py-4 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] disabled:opacity-60 disabled:pointer-events-none"
                  aria-label={
                    isSubmitting ? "Validating shipping details…" : "Continue to review"
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                      <span>Validating…</span>
                    </>
                  ) : (
                    <>
                      <span>Continue to Review</span>
                      <ChevronRight className="w-4 h-4" aria-hidden />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-[#555555] leading-relaxed">
                  <Lock className="w-3 h-3 inline-block mr-1 align-[-1px] text-[#8D8D8D]" aria-hidden />
                  Your information is handled securely. Payment details are
                  collected at the next step — not here.
                </p>
              </div>
            </form>
          </div>

          {/* ── Right: Order Summary ── */}
          <aside
            className="lg:col-span-5 order-1 lg:order-2"
            aria-label="Order summary"
          >
            <div className="lg:sticky lg:top-6 bg-[#141414] border border-[#222222] rounded-[2px] overflow-hidden">
              {/* Summary header */}
              <div className="px-5 py-4 border-b border-[#222222] flex items-center gap-2">
                <ShoppingBag
                  className="w-4 h-4 text-[#D94A36]"
                  aria-hidden
                />
                <h2 className="font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider text-white">
                  Your Order ({cartCount})
                </h2>
              </div>

              {/* Line items */}
              <div className="divide-y divide-[#1E1E1E]">
                {cart.map((item) => (
                  <div key={item.id} className="px-5 py-4 flex gap-3">
                    {/* Thumbnail */}
                    <div className="relative w-[56px] aspect-[4/5] rounded-[2px] bg-black border border-[#2A2A2A] overflow-hidden shrink-0">
                      <Image
                        src={item.product.images.primary}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                      {/* Quantity badge */}
                      <span
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#D94A36] text-white text-[10px] font-bold flex items-center justify-center"
                        aria-label={`Quantity: ${item.quantity}`}
                      >
                        {item.quantity}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase text-white leading-snug truncate">
                        {item.product.title}
                      </p>
                      <p className="text-[10px] text-[#8D8D8D] uppercase tracking-wider mt-0.5">
                        {item.product.productTypeLabel}
                      </p>
                      {item.selectedSize && (
                        <p className="text-[10px] text-[#6E6E6E] mt-0.5">
                          {item.selectedSize.label} — {item.selectedSize.dimensions}
                        </p>
                      )}
                      {item.selectedVariant && (
                        <p className="text-[10px] text-[#6E6E6E] mt-0.5">
                          {item.selectedVariant.name}
                        </p>
                      )}
                    </div>

                    {/* Line price */}
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold text-white">
                        ₹{(item.unitPrice * item.quantity).toLocaleString("en-IN")}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-[10px] text-[#555555] mt-0.5">
                          ₹{item.unitPrice.toLocaleString("en-IN")} each
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="px-5 py-4 bg-[#181818] border-t border-[#222222] space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#8D8D8D]">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">
                    ₹{cartSubtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#8D8D8D]">
                  <span>Shipping</span>
                  {qualifiesForFreeShipping ? (
                    <span className="text-[#22C55E] font-semibold text-[11px] uppercase tracking-wider">
                      Free Express
                    </span>
                  ) : (
                    <span className="text-white font-medium">
                      ₹{shippingCost.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                {!qualifiesForFreeShipping && (
                  <p className="text-[10px] text-[#555555] leading-relaxed">
                    Add{" "}
                    <span className="text-[#D8D2C8] font-semibold">
                      ₹{(FREE_SHIPPING_THRESHOLD - cartSubtotal).toLocaleString("en-IN")}
                    </span>{" "}
                    more for free insured express delivery.
                  </p>
                )}

                <div className="pt-2 border-t border-[#242424]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8D8D8D]">
                      Estimated Total
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                      ₹{orderTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#555555] mt-1">
                    Taxes and duties calculated at payment step.
                  </p>
                </div>
              </div>

              {/* Collector packaging note */}
              <div className="px-5 py-3.5 bg-[#161616] border-t border-[#1E1E1E]">
                <p className="text-[10px] text-[#555555] leading-relaxed">
                  All pieces ship in armoured collector packaging with transit
                  insurance. Tracking is provided after dispatch.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
