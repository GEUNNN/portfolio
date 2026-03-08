"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 220; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 0.5;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 5;

      star.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background-color: white;
        opacity: ${Math.random() * 0.6 + 0.2};
        animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
      `;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
