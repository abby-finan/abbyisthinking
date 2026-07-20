"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionId, SECTIONS } from "@/lib/types";
import { ReactNode } from "react";

const linkClassName =
  "underline decoration-white/10 underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:decoration-white/25";

export function linkifyText(text: string): ReactNode[] {
  const regex = /(https?:\/\/[^\s<]+[^\s<.,:;"')\]\s])/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {match[0]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

interface ContentPanelProps {
  sectionId: SectionId | null;
  onClose: () => void;
  children: ReactNode;
}

export function ContentPanel({ sectionId, onClose, children }: ContentPanelProps) {
  const section = SECTIONS.find((s) => s.id === sectionId);

  return (
    <AnimatePresence>
      {sectionId && section && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col items-center px-6 pb-28 pt-20 pointer-events-none"
        >
          <div className="panel-scroll pointer-events-auto w-full max-w-md flex-1 overflow-y-auto">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {section.label}
              </p>
              {section.subtitle && (
                <p className="mt-2 text-[11px] font-light tracking-wide text-[var(--text-muted)]/50">
                  {section.subtitle}
                </p>
              )}
            </div>
            {children}
          </div>
          <button
            onClick={onClose}
            className="pointer-events-auto mt-6 shrink-0 text-[11px] tracking-wide text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ItemList({ items }: { items: ReactNode[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-8">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function ItemText({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-light leading-relaxed text-[var(--text-muted)]">
      {typeof children === "string" ? linkifyText(children) : children}
    </p>
  );
}

export function ItemMeta({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1 text-[11px] font-light tracking-wide text-[var(--text-muted)]/50">
      {typeof children === "string" ? linkifyText(children) : children}
    </p>
  );
}

export function ItemLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[13px] font-light leading-relaxed text-[var(--text-muted)] underline decoration-white/10 underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:decoration-white/25"
    >
      {children}
    </a>
  );
}
