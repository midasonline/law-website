export function CornerMarks({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 flex justify-between ${className}`}><span className="size-[calc(11.19*var(--unit))] bg-white" /><span className="size-[calc(11.19*var(--unit))] bg-white" /></div>;
}
