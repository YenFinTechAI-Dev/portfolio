import { useMemo } from 'react';

const COLS = 24;
const ROWS = 6;

export function InteractiveGrid() {
  const cells = useMemo(() => Array.from({ length: COLS * ROWS }, (_, i) => i), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden select-none"
    >
      <div
        className="hero-grid-mask mx-auto grid pointer-events-auto"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 56px)`,
          gridTemplateRows: `repeat(${ROWS}, 56px)`,
          width: `${COLS * 56}px`,
          height: `${ROWS * 56}px`,
        }}
      >
        {cells.map((idx) => (
          <div
            key={idx}
            className="border-[0.5px] border-[var(--border-default)] bg-[var(--grid-cell-idle)] opacity-60 transition-[opacity,background-color] duration-150 ease-out hover:bg-[var(--grid-cell-hover)] hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
