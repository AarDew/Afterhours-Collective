import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "ember" | "stone" | "charcoal" | "ivory" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "stone",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase rounded-[2px]";

  const variantStyles = {
    ember: "bg-[#D94A36]/15 text-[#D94A36] border border-[#D94A36]/30",
    stone: "bg-[#1A1A1A] text-[#D8D2C8] border border-[#2E2E2E]",
    charcoal: "bg-[#1A1A1A] text-white/90 border border-white/10",
    ivory: "bg-[#F5F2EC] text-[#111111] border border-[#D8D2C8]",
    outline: "bg-transparent text-[#8D8D8D] border border-[#2E2E2E]",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
