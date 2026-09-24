export function SignalArcs({
  className = "",
  stroke = "var(--color-coral)",
  opacity = 0.35,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[100, 180, 260, 340, 420, 500].map((r) => (
        <circle
          key={r}
          cx="100"
          cy="760"
          r={r}
          stroke={stroke}
          strokeOpacity={opacity}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
