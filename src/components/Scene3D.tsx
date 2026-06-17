"use client";

import { useEffect, useRef } from "react";

export function Scene3D({ visible = true }: { visible?: boolean }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.y = (e.clientX / window.innerWidth - 0.5) * 360;
      target.current.x = (e.clientY / window.innerHeight - 0.5) * -50;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const current = { x: 0, y: 0 };
    let frame = 0;

    const animate = () => {
      current.x += (target.current.x - current.x) * 0.06;
      current.y += (target.current.y - current.y) * 0.06;
      if (titleRef.current) {
        titleRef.current.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      style={{ perspective: "900px" }}
    >
      <div
        ref={titleRef}
        className="font-mono text-[11px] font-normal tracking-wide text-[var(--text-muted)] select-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        abby is thinking
      </div>
    </div>
  );
}
