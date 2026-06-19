import { Link } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import type { Service } from "@/data/holidaypa";

export function ServiceCard({ service, className = "" }: { service: Service; className?: string }) {
  return (
    <Link
      to="/services/$id"
      params={{ id: service.id }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card hover-lift ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cloud/90 px-3 py-1 text-xs font-semibold text-ocean backdrop-blur">
          {service.categoryName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{service.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground">
            <Star className="h-4 w-4 fill-coral text-coral" />
            {service.rating}
          </span>
        </div>
        <p className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {service.location}
        </p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="text-sm text-muted-foreground">
            from <span className="text-base font-bold text-foreground">£{service.priceFrom}</span>
          </p>
          <span className="text-sm font-semibold text-lagoon transition-colors group-hover:text-ocean">View →</span>
        </div>
      </div>
    </Link>
  );
}
