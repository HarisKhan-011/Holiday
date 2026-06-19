import { Link } from "@tanstack/react-router";

export function Logo({ className = "", tone = "ocean" }: { className?: string; tone?: "ocean" | "light" }) {
  const text = tone === "light" ? "text-cloud" : "text-ocean";
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Holiday PA home">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ocean-gradient shadow-soft transition-transform duration-300 group-hover:scale-105">
        <PalmIcon className="h-5 w-5 text-cloud" />
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${text}`}>
        Holiday
        <sup className="ml-0.5 align-super text-[0.55em] font-bold tracking-widest text-lagoon">PA</sup>
      </span>
    </Link>
  );
}

export function PalmIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21c0-4.5-.3-8.2-1.1-10.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11 10.4c-1.5-2-3.7-3-6.3-2.6 1.2-1 2.8-1.3 4.3-.9M11 10.4c1.9-1.7 4.3-2.2 6.8-1.2-1.4-.8-3-1-4.5-.5M11 10.4c.2-2.5 1.6-4.5 4-5.6-1.5.2-2.9 1-3.8 2.2M11 10.4c-1.1-2.3-3-3.7-5.6-4 1.5-.3 3 0 4.2.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.2" cy="9.6" r="1" fill="currentColor" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
