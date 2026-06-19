import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";
import { ConciergeSearch } from "@/components/ConciergeSearch";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal, staggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { categories, services } from "@/data/holidaypa";
import heroCoastal from "@/assets/hero-coastal.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Browse Services — Holiday PA Marketplace" },
      {
        name: "description",
        content:
          "Browse trusted local chefs, spa treatments, experiences and airport transfers for your holiday rental. Filter by category, location, price and rating.",
      },
      { property: "og:title", content: "Browse Services — Holiday PA" },
      { property: "og:description", content: "Trusted local services for your holiday rental." },
      { property: "og:image", content: heroCoastal },
      { property: "og:url", content: "https://holidaypa.com/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:image", content: heroCoastal },
      { name: "twitter:title", content: "Browse Services — Holiday PA" },
      { name: "twitter:description", content: "Trusted local services for your holiday rental." },
    ],
    links: [{ rel: "canonical", href: "https://holidaypa.com/services" }],
  }),
  component: ServicesPage,
});

const locations = ["All locations", ...Array.from(new Set(services.map((s) => s.location)))];
const priceBands = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under £60", min: 0, max: 60 },
  { label: "£60 – £150", min: 60, max: 150 },
  { label: "£150+", min: 150, max: Infinity },
];

function ServicesPage() {
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("All locations");
  const [band, setBand] = useState(0);
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(() => {
    const p = priceBands[band];
    return services.filter(
      (s) =>
        (category === "all" || s.category === category) &&
        (location === "All locations" || s.location === location) &&
        s.priceFrom >= p.min &&
        s.priceFrom <= p.max &&
        s.rating >= minRating,
    );
  }, [category, location, band, minRating]);

  return (
    <>
      {/* Header */}
      <section className="grain relative overflow-hidden bg-ocean-gradient pb-12 pt-32 text-cloud md:pb-16 md:pt-40">
        <div className="container-90 relative z-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surf">Marketplace</span>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
              Find the perfect service for your stay
            </h1>
            <p className="mt-4 max-w-xl text-cloud/80">
              Hand-picked local providers, ready to be booked and managed by your personal PA.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <ConciergeSearch variant="hero" />
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="container-90 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* Filter sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
              <div className="flex items-center gap-2 text-foreground">
                <SlidersHorizontal className="h-4 w-4 text-lagoon" />
                <h2 className="font-display text-lg font-semibold">Filters</h2>
              </div>

              <FilterGroup label="Category">
                <Chip active={category === "all"} onClick={() => setCategory("all")}>
                  All
                </Chip>
                {categories.map((c) => (
                  <Chip key={c.slug} active={category === c.slug} onClick={() => setCategory(c.slug)}>
                    {c.name}
                  </Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Location">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {locations.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label="Price">
                {priceBands.map((p, i) => (
                  <Chip key={p.label} active={band === i} onClick={() => setBand(i)}>
                    {p.label}
                  </Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Rating">
                {[0, 4.5, 4.8, 4.9].map((r) => (
                  <Chip key={r} active={minRating === r} onClick={() => setMinRating(r)}>
                    {r === 0 ? "Any" : `${r}+ ★`}
                  </Chip>
                ))}
              </FilterGroup>

              <Button
                variant="ghost"
                size="sm"
                className="mt-5 w-full"
                onClick={() => {
                  setCategory("all");
                  setLocation("All locations");
                  setBand(0);
                  setMinRating(0);
                }}
              >
                Reset filters
              </Button>
            </div>
          </aside>

          {/* Grid */}
          <div>
            <p className="mb-6 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "service" : "services"}
            </p>
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border bg-card p-16 text-center">
                <p className="font-display text-xl text-foreground">No services match those filters</p>
                <p className="mt-2 text-sm text-muted-foreground">Try widening your search.</p>
              </div>
            ) : (
              <motion.div
                layout
                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filtered.map((s, i) => (
                  <motion.div
                    key={s.id}
                    layout
                    variants={staggerItem}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: Math.min(i * 0.06, 0.4) }}
                  >
                    <ServiceCard service={s} className="h-full" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</h3>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "bg-ocean text-cloud"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
      }`}
    >
      {children}
    </button>
  );
}
