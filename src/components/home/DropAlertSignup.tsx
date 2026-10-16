"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const DropAlertSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-[#141414] border-b border-[#222222] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36] mb-3 block">
          COLLECTOR FIRST-ACCESS
        </span>

        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
          NEVER MISS A LIMITED DROP.
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#8D8D8D] max-w-lg mx-auto leading-relaxed">
          Our serialized reveal frames and 3D figures are printed in small, numbered studio batches. Receive release times 2 hours before general public access.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          {submitted ? (
            <div className="p-4 bg-[#1C1C1C] border border-[#10B981]/50 rounded-[2px] flex items-center justify-center gap-2 text-xs text-[#10B981]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>You are on the collector priority drop list. Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email for drop alerts..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1C1C1C] border border-[#2F2F2F] focus:border-[#D94A36] text-white text-xs pl-10 pr-4 py-3 rounded-[2px] placeholder-[#666666] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D94A36] transition-colors"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="shrink-0 flex items-center justify-center gap-1.5 py-3"
              >
                <span>GET DROP ALERTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </form>
          )}

          <p className="mt-3 text-[11px] text-[#666666]">
            Strict zero-spam policy. Max 2 drop notices per month. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
