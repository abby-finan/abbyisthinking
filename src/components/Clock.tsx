"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <div className="h-5" />;

  const date = now.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="font-mono text-[11px] tracking-wide text-[var(--text-muted)] select-none">
      <span>{date}</span>
      <span className="mx-3 opacity-30">·</span>
      <span>{time}</span>
    </div>
  );
}
