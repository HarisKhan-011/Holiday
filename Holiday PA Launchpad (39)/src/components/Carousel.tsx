import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({
  children,
  autoplay = true,
  className = "",
  align = "start",
}: {
  children: ReactNode[];
  autoplay?: boolean;
  className?: string;
  align?: "start" | "center";
}) {
  const plugins = autoplay
    ? [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })]
    : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align, dragFree: false }, plugins);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6">{children}</div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:bg-secondary disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:bg-secondary disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
