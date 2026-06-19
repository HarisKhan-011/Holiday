import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { TrendingUp, Plug, Users, ShieldCheck, Sparkles, Check, ArrowRight } from "lucide-react";
import partnersHero from "@/assets/partners-hero.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "For Partners — Unlock the £30bn services market | Holiday PA" },
      {
        name: "description",
        content:
          "Rental platforms and property managers: embed Holiday PA into your guest experience to unlock add-on services revenue from the £30bn market.",
      },
      { property: "og:title", content: "For Partners — Holiday PA" },
      {
        property: "og:description",
        content: "Embed Holiday PA and unlock new revenue from guest services.",
      },
    ],
  }),
  component: PartnersPage,
});

const benefits = [
  { icon: TrendingUp, title: "New revenue per booking", text: "Earn on every service your guests add — with zero operational overhead." },
  { icon: Plug, title: "Embed in minutes", text: "A lightweight integration drops Holiday PA straight into your guest journey." },
  { icon: Users, title: "Happier guests", text: "Serviced stays drive better reviews, repeat bookings and referrals." },
  { icon: ShieldCheck, title: "Vetted local network", text: "Every provider is verified and quality-assured by our concierge team." },
  { icon: Sparkles, title: "On-brand experience", text: "Fully white-labelled to feel native to your platform." },
  { icon: Check, title: "Managed end to end", text: "We handle fulfilment, support and the local relationships." },
];

const integration = [
  { step: "01", title: "Connect", text: "Add Holiday PA to your listing pages or guest app." },
  { step: "02", title: "Offer", text: "Guests discover services tailored to their stay." },
  { step: "03", title: "Earn", text: "You earn a share of every booking, automatically." },
];

function PartnersPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ocean-gradient pb-20 pt-32 text-cloud md:pb-28 md:pt-40">
        <div className="container-90 relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surf">For partners</span>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              Unlock the £30bn add-on services market
            </h1>
            <p className="mt-5 max-w-md text-lg text-cloud/80">
              Embed Holiday PA into your guest experience and turn every rental booking into a fully serviced, revenue-generating stay.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="coral" size="xl">
                <a href="#become-a-partner">
                  Become a partner <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-cloud/15">
              <img
                src={partnersHero}
                alt="A property manager using the Holiday PA partner dashboard"
                width={1280}
                height={1024}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="container-90 -mt-12 md:-mt-16">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border shadow-lift sm:grid-cols-3">
            {[
              { value: 30, prefix: "£", suffix: "bn", label: "Market opportunity" },
              { value: 22, suffix: "%", label: "Avg. uplift per booking" },
              { value: 1200, suffix: "+", label: "Local providers ready" },
            ].map((s) => (
              <div key={s.label} className="bg-card p-8 text-center">
                <AnimatedCounter
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="font-display text-4xl font-semibold text-ocean"
                />
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="container-90 py-20 md:py-28">
        <SectionHeading
          eyebrow="Why partner"
          title="Built to grow your revenue, not your workload"
          subtitle="Everything you need to offer concierge-grade services — without lifting a finger."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft hover-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-gradient text-cloud">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* Integration diagram */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-90">
          <SectionHeading eyebrow="How it works" title="Live in three simple steps" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {integration.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-surf">{s.step}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  {i < integration.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-lagoon md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Logos strip */}
          <Reveal className="mt-16">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by forward-thinking rental brands
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
              {["Coastline", "StayLux", "VillaNest", "Riviera Rentals", "Harbour & Co"].map((name) => (
                <span key={name} className="font-display text-xl font-semibold text-ocean">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Become a partner form */}
      <section id="become-a-partner" className="container-90 py-20 md:py-28">
        <div className="grid gap-10 rounded-[2rem] border border-border/70 bg-card p-8 shadow-lift md:p-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Become a partner"
              subtitle="Tell us about your platform and our team will be in touch within two business days."
            />
          </div>
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl bg-secondary/60 p-10 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-surf-gradient text-cloud">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">Thanks — we'll be in touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our partnerships team has your details.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input required placeholder="Your name" className="h-12 rounded-2xl" />
                  <Input required type="email" placeholder="Work email" className="h-12 rounded-2xl" />
                </div>
                <Input required placeholder="Company / platform" className="h-12 rounded-2xl" />
                <textarea
                  placeholder="How many properties do you manage?"
                  rows={4}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button type="submit" variant="coral" size="lg" className="w-full">
                  Request a partnership
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
