import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MapPin, CalendarDays, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConciergeSearch({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const navigate = useNavigate();
  const [dest, setDest] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2 guests");

  const base =
    variant === "hero"
      ? "border-cloud/20 bg-cloud/95 shadow-lift"
      : "border-border bg-card shadow-soft";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/services" });
      }}
      className={`flex flex-col gap-2 rounded-3xl border p-2.5 backdrop-blur md:flex-row md:items-center ${base}`}
    >
      <Field icon={<MapPin className="h-4 w-4 text-lagoon" />} label="Destination">
        <input
          value={dest}
          onChange={(e) => setDest(e.target.value)}
          placeholder="Where to?"
          className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-muted-foreground"
        />
      </Field>
      <Divider />
      <Field icon={<CalendarDays className="h-4 w-4 text-lagoon" />} label="Dates">
        <input
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          placeholder="Add dates"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:text-muted-foreground"
        />
      </Field>
      <Divider />
      <Field icon={<Users className="h-4 w-4 text-lagoon" />} label="Guests">
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-ink outline-none"
        >
          <option>1 guest</option>
          <option>2 guests</option>
          <option>4 guests</option>
          <option>6 guests</option>
          <option>8+ guests</option>
        </select>
      </Field>
      <Button type="submit" variant="coral" size="lg" className="shrink-0 md:h-14 md:w-14 md:px-0" aria-label="Search">
        <Search className="h-5 w-5" />
        <span className="md:hidden">Search</span>
      </Button>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-2.5 transition-colors hover:bg-secondary/50">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
        {children}
      </span>
    </label>
  );
}

function Divider() {
  return <span className="mx-1 hidden h-8 w-px bg-border md:block" />;
}
