import React from "react";

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  lightMode?: boolean;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  originalPrice,
  size = "md",
  className = "",
  lightMode = false,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg font-semibold",
  };

  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span
        className={`font-medium tracking-tight ${sizeStyles[size]} ${
          lightMode ? "text-[#111111]" : "text-white"
        }`}
      >
        {formattedPrice}
      </span>
      {formattedOriginalPrice && (
        <span
          className={`line-through text-xs ${
            lightMode ? "text-[#8D8D8D]" : "text-[#8D8D8D]"
          }`}
        >
          {formattedOriginalPrice}
        </span>
      )}
    </div>
  );
};
