import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "obsidian" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider",
    md: "px-5 py-2.5 text-xs font-semibold tracking-wider",
    lg: "px-7 py-3.5 text-sm font-semibold tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#D94A36] text-white hover:bg-[#BF3F2D] active:bg-[#AA3726] shadow-sm",
    secondary:
      "bg-[#F5F2EC] text-[#111111] hover:bg-[#EAE4D9] active:bg-[#DDD5C7]",
    obsidian:
      "bg-[#111111] text-white border border-[#2B2B2B] hover:border-[#D8D2C8]/50 hover:bg-[#1A1A1A]",
    outline:
      "border border-[#D8D2C8]/40 text-[#F5F2EC] hover:border-white hover:bg-white/5",
    ghost:
      "text-[#D8D2C8] hover:text-white hover:bg-white/5",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
