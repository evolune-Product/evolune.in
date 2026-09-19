// Real SpendVeto mark (gate/bracket glyph), inlined from the founder-supplied
// spendveto-logo.svg so `currentColor` can be controlled via CSS text color.
export function SpendVetoIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 4v16" />
      <path d="M14 4v16" />
      <path d="M4 4h6" />
      <path d="M14 6h6" />
    </svg>
  );
}
