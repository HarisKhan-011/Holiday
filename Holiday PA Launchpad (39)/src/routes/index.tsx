import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ChefHat,
  Sparkles,
  Compass,
  Car,
  ShoppingBasket,
  HandHeart,
  ArrowRight,
  Quote,
  CalendarCheck,
  Plus,
  PartyPopper,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HeroGlobe } from "@/components/HeroGlobe";
import { ConciergeSearch } from "@/components/ConciergeSearch";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Carousel } from "@/components/Carousel";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MagneticButton } from "@/components/MagneticButton";
import { categories, services, destinations, testimonials, faqs } from "@/data/holidaypa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holiday PA — Your stay, fully serviced" },
      {
        name: "description",
        content:
          "Discover and book trusted local chefs, spas, experiences and airport transfers for your holiday rental. Your stay, fully serviced by Holiday PA.",
      },
      { property: "og:title", content: "Holiday PA — Your stay, fully serviced" },
      {
        property: "og:description",
        content: "Trusted local chefs, spas, experiences and transfers for your holiday rental.",
      },
    ],
  }),
  component: Home,
});

const categoryIcons: Record<string, typeof ChefHat> = {
  "private-chefs": ChefHat,
  "spa-wellness": Sparkles,
  activities: Compass,
  "airport-transfers": Car,
  "grocery-prestock": ShoppingBasket,
  "in-villa-massage": HandHeart,
};

const steps = [
  {
    icon: CalendarCheck,
    title: "Choose your stay",
    text: "Tell us your destination and dates, and we'll surface trusted local providers near your rental.",
  },
  {
    icon: Plus,
    title: "Add the services you want",
    text: "A private chef, a spa treatment, a yacht day, a transfer — build your perfect serviced stay.",
  },
  {
    icon: PartyPopper,
    title: "Arrive to everything ready",
    text: "Your personal PA confirms every detail, so you walk in and your holiday is already taken care of.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-ocean-gradient pb-20 pt-28 text-cloud md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-surf/20 blur-3xl" />
        <div className="container-90 relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-cloud/20 bg-cloud/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-surf"
            >
              Concierge for holiday rentals
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              Your stay,
              <br />
              <span className="text-gradient">fully serviced.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-cloud/80"
            >
              Discover trusted local chefs, spas, experiences and transfers for your holiday rental — booked and managed by your personal PA.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8"
            >
              <ConciergeSearch variant="hero" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex items-center gap-6 text-sm text-cloud/70"
            >
              <span>★ 4.9 average rating</span>
              <span className="h-1 w-1 rounded-full bg-cloud/40" />
              <span>1,200+ trusted providers</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <HeroGlobe />
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-90 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we offer"
          title="Everything your holiday rental was missing"
          subtitle="Hand-picked local services, brought to your door and managed end to end."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.slug] ?? Compass;
            return (
              <motion.div key={cat.slug} variants={staggerItem}>
                <Link
                  to="/services"
                  className="group relative block h-72 overflow-hidden rounded-3xl hover-lift"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cloud">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cloud/15 backdrop-blur transition-colors group-hover:bg-coral">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{cat.name}</h3>
                    <p className="mt-1 max-h-0 overflow-hidden text-sm text-cloud/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {cat.blurb}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-secondary/40 py-20 md:py-28">
        <div className="container-90">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to a serviced stay"
            subtitle="From booking to arrival, your PA handles the details so you don't have to."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative h-full rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-surf">{`0${i + 1}`}</span>
                  <span className="absolute right-8 top-8 grid h-12 w-12 place-items-center rounded-2xl bg-ocean-gradient text-cloud">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container-90 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Featured"
            title="Loved by guests this season"
            subtitle="A taste of the experiences our PAs arrange every day."
          />
          <Button asChild variant="soft" className="hidden md:inline-flex">
            <Link to="/services">
              Browse all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Carousel className="mt-12">
          {services.map((s) => (
            <div key={s.id} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_31%]">
              <ServiceCard service={s} className="h-full" />
            </div>
          ))}
        </Carousel>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="bg-secondary/40 py-20 md:py-28">
        <div className="container-90">
          <SectionHeading
            eyebrow="Destinations"
            title="Serviced stays around the world"
            subtitle="Live across the Mediterranean, the Middle East and beyond — with new spots every month."
          />
          <Carousel className="mt-12">
            {destinations.map((d) => (
              <div key={d.name} className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]">
                <Link to="/services" className="group relative block h-96 overflow-hidden rounded-3xl hover-lift">
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.country}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-cloud">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                      <p className="text-sm text-cloud/80">{d.country}</p>
                    </div>
                    <span className="rounded-full bg-cloud/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {d.services} services
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* £30BN OPPORTUNITY */}
      <section className="grain relative overflow-hidden bg-ocean-gradient py-20 text-cloud md:py-28">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-surf/15 blur-3xl" />
        <div className="container-90 relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="The opportunity"
            title="A £30bn add-on services market, unlocked"
            subtitle="Holiday rentals are booming — but the services that make a stay unforgettable have been left on the table. Until now."
          />
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: 30, prefix: "£", suffix: "bn", label: "Add-on services market" },
              { value: 1200, suffix: "+", label: "Trusted local providers" },
              { value: 4.9, decimals: 1, label: "Average guest rating" },
              { value: 40, suffix: "+", label: "Destinations and growing" },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div className="rounded-3xl border border-cloud/15 bg-cloud/5 p-6 backdrop-blur">
                  <AnimatedCounter
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="font-display text-4xl font-semibold text-surf md:text-5xl"
                  />
                  <p className="mt-2 text-sm text-cloud/75">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-90 py-20 md:py-28">
        <SectionHeading
          eyebrow="Guest stories"
          title="The trips people don't stop talking about"
        />
        <Carousel className="mt-12" align="center">
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-0 flex-[0_0_90%] lg:flex-[0_0_60%]">
              <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft md:p-10">
                <Quote className="h-8 w-8 text-surf" />
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.trip}</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Carousel>
      </section>

      {/* PARTNERS TEASER */}
      <section className="container-90 pb-20 md:pb-28">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-ocean-gradient px-8 py-14 text-cloud md:px-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-surf/20 blur-3xl" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surf">For partners</span>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                  Turn every booking into a serviced stay
                </h2>
                <p className="mt-4 max-w-xl text-cloud/80">
                  Rental platforms and property managers — embed Holiday PA into your guest experience and unlock new revenue from the services your guests already want.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <MagneticButton>
                  <Button asChild variant="coral" size="xl">
                    <Link to="/partners">
                      Explore partnerships <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-90 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading align="left" eyebrow="FAQ" title="Good to know" />
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/70">
                  <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
        <Reveal className="container-90 mt-20">
          <div className="rounded-[2rem] border border-border/70 bg-card px-8 py-14 text-center shadow-soft md:py-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Ready to make your next stay unforgettable?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Browse trusted local services and let your personal PA handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="coral" size="xl">
                <Link to="/services">Book a service</Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <Link to="/about">Our story</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
