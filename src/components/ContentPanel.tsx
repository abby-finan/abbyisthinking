"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionId, SECTIONS } from "@/lib/types";
import { ReactNode } from "react";

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
          className="fixed inset-0 z-40 flex flex-col items-center px-6 pb-28 pt-20"
        >
          <div className="panel-scroll w-full max-w-md flex-1 overflow-y-auto">
            <p className="mb-10 text-center text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
              {section.label}
            </p>
            {children}
          </div>
          <button
            onClick={onClose}
            className="mt-6 shrink-0 text-[11px] tracking-wide text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
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
      {children}
    </p>
  );
}

export function ItemMeta({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1 text-[11px] font-light tracking-wide text-[var(--text-muted)]/50">
      {children}
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
