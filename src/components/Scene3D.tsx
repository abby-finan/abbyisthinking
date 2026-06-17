"use client";

import { useEffect, useRef } from "react";

function setRotation(el: HTMLElement, clientX: number, clientY: number) {
  const rotY = (clientX / window.innerWidth - 0.5) * 360;
  const rotX = (clientY / window.innerHeight - 0.5) * -50;
  el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

export function Scene3D({ visible = true }: { visible?: boolean }) {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (titleRef.current) setRotation(titleRef.current, e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch && titleRef.current) {
        setRotation(titleRef.current, touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute inset-0 z-0 flex items-center justify-center touch-none"
      style={{ perspective: "900px" }}
    >
      <div
        ref={titleRef}
        className="title-3d font-mono text-[11px] font-normal tracking-wide text-[var(--text-muted)] select-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        abby is thinking
      </div>
    </div>
  );
}
