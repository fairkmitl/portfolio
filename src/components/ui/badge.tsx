interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full border border-emerald-100 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100/80">
      {children}
    </span>
  );
}
