import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { format } from "date-fns";
import {
  Star,
  MapPin,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  CalendarCheck,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { Carousel } from "@/components/Carousel";
import { services, testimonials, type Service } from "@/data/holidaypa";

export const Route = createFileRoute("/services/$id")({
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.id);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: [
        { title: s ? `${s.title} — Holiday PA` : "Service — Holiday PA" },
        { name: "description", content: s?.description.slice(0, 155) ?? "Book a local service for your holiday rental." },
        { property: "og:title", content: s ? `${s.title} — Holiday PA` : "Holiday PA" },
        { property: "og:description", content: s?.description.slice(0, 155) ?? "" },
        { property: "og:type", content: "website" },
        ...(s
          ? [
              { property: "og:image", content: s.image },
              { property: "og:url", content: `https://holidaypa.com/services/${s.id}` },
              { name: "twitter:image", content: s.image },
              { name: "twitter:title", content: `${s.title} — Holiday PA` },
              { name: "twitter:description", content: s.description.slice(0, 155) },
            ]
          : []),
      ],
      links: s
        ? [{ rel: "canonical", href: `https://holidaypa.com/services/${s.id}` }]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="container-90 flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="font-display text-3xl font-semibold">Service not found</h1>
      <p className="mt-2 text-muted-foreground">It may have been moved or is no longer available.</p>
      <Button asChild variant="coral" className="mt-6">
        <Link to="/services">Back to marketplace</Link>
      </Button>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="container-90 pt-28 md:pt-36">
        <Reveal>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to marketplace
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Left: details */}
          <div>
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={service.image}
                  alt={service.title}
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cloud/90 px-3 py-1 text-xs font-semibold text-ocean backdrop-blur">
                  {service.categoryName}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1 font-semibold text-foreground">
                    <Star className="h-4 w-4 fill-coral text-coral" /> {service.rating}
                    <span className="font-normal text-muted-foreground">({service.reviews} reviews)</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {service.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {service.duration}
                  </span>
                </div>
                <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                <h2 className="font-display text-xl font-semibold text-foreground">What's included</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item: string) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surf-gradient text-cloud">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ocean-gradient text-cloud">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground">{service.provider}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.providerBlurb}</p>
                </div>
              </div>
            </Reveal>

            {/* Reviews */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-foreground">Recent guest reviews</h2>
              <Carousel className="mt-6" autoplay={false} align="center">
                {testimonials.map((t) => (
                  <div key={t.name} className="min-w-0 flex-[0_0_90%] md:flex-[0_0_70%]">
                    <figure className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                      <div className="flex gap-0.5 text-coral">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-coral" />
                        ))}
                      </div>
                      <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
                      <figcaption className="mt-5 flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.trip}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Right: booking card */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <BookingCard service={service} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-90 py-20 md:py-28">
        <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">You might also like</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.id} service={s} className="h-full" />
          ))}
        </div>
      </section>
    </>
  );
}

const slots = ["09:00", "12:30", "16:00", "19:30"];

function BookingCard({ service }: { service: Service }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string | null>(null);
  const [qty, setQty] = useState(2);

  const total = service.priceFrom * qty;
  const stepLabels = ["Date", "Time", "Guests", "Review"];

  const canNext =
    (step === 0 && !!date) || (step === 1 && !!slot) || (step === 2 && qty > 0) || step === 3;

  return (
    <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-lift">
      <div className="bg-ocean-gradient p-6 text-cloud">
        <p className="text-sm text-cloud/75">from</p>
        <p className="font-display text-3xl font-semibold">
          £{service.priceFrom}
          <span className="text-base font-normal text-cloud/70"> / guest</span>
        </p>
      </div>

      {step < 4 && (
        <div className="flex items-center gap-1.5 px-6 pt-5">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`h-1.5 w-full rounded-full transition-colors ${
                  i <= step ? "bg-lagoon" : "bg-secondary"
                }`}
              />
              <span className={`text-[0.65rem] font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Select a date</h3>
                <div className="mt-3 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="pointer-events-auto rounded-2xl border border-border p-3"
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Choose a time</h3>
                <p className="mt-1 text-sm text-muted-foreground">{date && format(date, "EEEE d MMMM")}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`rounded-2xl border py-3 text-sm font-semibold transition-colors ${
                        slot === s
                          ? "border-ocean bg-ocean text-cloud"
                          : "border-border bg-background hover:bg-secondary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">How many guests?</h3>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-background p-4">
                  <span className="text-sm font-medium text-foreground">Guests</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
                      aria-label="Decrease"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-display text-xl font-semibold">{qty}</span>
                    <button
                      onClick={() => setQty((q) => Math.min(12, q + 1))}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
                      aria-label="Increase"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Review your request</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Service" value={service.title} />
                  <Row label="Date" value={date ? format(date, "d MMM yyyy") : "—"} />
                  <Row label="Time" value={slot ?? "—"} />
                  <Row label="Guests" value={`${qty}`} />
                  <div className="my-2 h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <dt className="font-display text-base font-semibold text-foreground">Estimated total</dt>
                    <dd className="font-display text-xl font-semibold text-foreground">£{total}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-muted-foreground">
                  No payment is taken now — your PA confirms availability first.
                </p>
              </div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-6 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-surf-gradient text-cloud"
                >
                  <CalendarCheck className="h-8 w-8" />
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">Request sent</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your PA will confirm <span className="font-semibold text-foreground">{service.title}</span> shortly.
                  Keep an eye on your inbox.
                </p>
                <Button
                  variant="soft"
                  className="mt-6 w-full"
                  onClick={() => {
                    setStep(0);
                    setDate(undefined);
                    setSlot(null);
                    setQty(2);
                  }}
                >
                  Book another service
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {step < 4 && (
          <div className="mt-6 flex gap-3">
            {step > 0 && (
              <Button variant="soft" className="flex-1" onClick={() => setStep((s) => s - 1)}>
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            )}
            <Button
              variant="coral"
              className="flex-[2]"
              disabled={!canNext}
              onClick={() => setStep((s) => s + 1)}
            >
              {step === 3 ? "Request to book" : "Continue"}
              {step < 3 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}
