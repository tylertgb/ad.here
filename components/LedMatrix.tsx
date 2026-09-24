"use client";

import { useEffect, useState } from "react";

const COLS = 14;
const ROWS = 12;
const TOTAL = COLS * ROWS;

// Color palette for the LED pixels
const COLORS = [
  "var(--color-coral)",    // Coral/Orange-Red
  "var(--color-gold)",     // Gold/Yellow
  "#4ecdc4",               // Cyan/Teal
  "#e8a87c",               // Peach
  "#c38d9e",               // Rose
  "#85cdca",               // Light Teal
];

// Different shades for unlit pixels
const UNLIT_SHADES = [
  "#0a1628",  // Deep navy
  "#1c2c4d",  // Normal navy
  "#243556",  // Light navy
];

export default function LedMatrix() {
  const [pixels, setPixels] = useState<Map<number, string>>(new Map());
  const [unlitColors] = useState<string[]>(() => 
    Array.from({ length: TOTAL }, () => 
      UNLIT_SHADES[Math.floor(Math.random() * UNLIT_SHADES.length)]
    )
  );

  useEffect(() => {
    const id = setInterval(() => {
      const nextPixels = new Map<number, string>();
      const count = 10 + Math.floor(Math.random() * 8);
      
      while (nextPixels.size < count) {
        const position = Math.floor(Math.random() * TOTAL);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        nextPixels.set(position, color);
      }
      
      setPixels(nextPixels);
    }, 700);
    
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-[28px] bg-navy-soft p-5 sm:p-7 ">
      <div className="flex items-center justify-between text-xs text-muted-navy mb-4">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-coral" />
          </span>
          Marina Mall-Screen 02
        </span>
        <span>Now showing</span>
      </div>

      <div
        className="grid gap-1 rounded-xl bg-navy p-3"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        aria-hidden="true"
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const color = pixels.get(i);
          
          return (
            <div
              key={i}
              className="aspect-square rounded-xs transition-colors duration-500"
              style={{
                backgroundColor: color || unlitColors[i],
              }}
            />
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-navy">
        <span>
          Loop position <strong className="text-off-white font-semibold">3 / 8</strong>
        </span>
        <span>
          Dwell zone:{" "}
          <strong className="text-off-white font-semibold">
            Food Court Corridor
          </strong>
        </span>
      </div>
    </div>
  );
}
