"use client";

export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="gradient-orb absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, #e8653a 0%, #ff6b4a 40%, transparent 70%)",
        }}
      />
      <div
        className="gradient-orb absolute -right-[15%] top-[10%] h-[60vh] w-[60vh] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, #6366f1 40%, transparent 70%)",
        }}
      />
      <div
        className="gradient-orb absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vh] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, #2dd4bf 0%, #3b82f6 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[var(--bg-deep)]/60" />
    </div>
  );
}
