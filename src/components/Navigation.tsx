"use client";

import { SectionId, SECTIONS } from "@/lib/types";

interface NavigationProps {
  active: SectionId | null;
  onSelect: (id: SectionId) => void;
}

export function Navigation({ active, onSelect }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-6 pt-4">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={`text-[11px] tracking-wide transition-colors ${
                isActive
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {section.shortLabel}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
