"use client";

import React from "react";
import { CheckCircle2, Heart, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export const ToastNotification: React.FC = () => {
  const { toast, clearToast } = useStore();

  if (!toast) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1C1C1C] border border-[#333333] shadow-2xl px-4 py-3 rounded-[2px] text-white animate-in slide-in-from-bottom-3 duration-200 max-w-sm"
      role="status"
    >
      <div className="shrink-0 text-[#D94A36]">
        {toast.type === "wishlist" ? (
          <Heart className="w-4 h-4 fill-[#D94A36]" />
        ) : (
          <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
        )}
      </div>

      <p className="text-xs text-[#EAEAEA] leading-snug flex-1 font-medium">
        {toast.message}
      </p>

      <button
        onClick={clearToast}
        className="text-[#888888] hover:text-white transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
