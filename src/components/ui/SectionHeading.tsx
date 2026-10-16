import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  lightMode?: boolean;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  actionText,
  actionHref,
  lightMode = false,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14 ${
        centered ? "items-center text-center" : ""
      } ${className}`}
    >
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D94A36] mb-2.5">
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[0.95] ${
            lightMode ? "text-[#111111]" : "text-white"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              lightMode ? "text-[#555555]" : "text-[#8D8D8D]"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <Link
          href={actionHref}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-colors group self-start md:self-end ${
            lightMode
              ? "text-[#111111] hover:text-[#D94A36]"
              : "text-[#D8D2C8] hover:text-white"
          }`}
        >
          <span>{actionText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D94A36]" />
        </Link>
      )}
    </div>
  );
};
