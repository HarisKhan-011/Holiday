import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, Compass, ShieldCheck, Sparkles } from "lucide-react";
import aboutEditorial from "@/assets/about-editorial.jpg";
import founder from "@/assets/founder.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The story behind Holiday PA" },
      {
        name: "description",
        content:
          "Holiday PA is on a mission to make every holiday rental a fully serviced, concierge-grade stay. Meet founder Oliver Wronski and our values.",
      },
      { property: "og:title", content: "About Holiday PA" },
      { property: "og:description", content: "The story and mission behind Holiday PA." },
      { property: "og:image", content: aboutEditorial },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Effortless", text: "We remove every point of friction so guests can simply enjoy their stay." },
  { icon: ShieldCheck, title: "Trusted", text: "Every provider is vetted, verified and held to a concierge standard." },
  { icon: Compass, title: "Local", text: "We champion the local chefs, therapists and guides who make a place special." },
  { icon: Sparkles, title: "Premium", text: "Five-star service, whether you're in a villa, an apartment or a beach house." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ocean-gradient pb-20 pt-32 text-cloud md:pb-28 md:pt-40">
        <div className="container-90 relative z-10 max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surf">Our story</span>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              We believe a rental stay should feel five-star
            </h1>
            <p className="mt-5 text-lg text-cloud/80">
              Holiday PA connects holiday-rental guests with trusted local services — turning any stay into a fully serviced, concierge-grade trip.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission + image */}
      <section className="container-90 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={aboutEditorial}
                alt="A guest being welcomed to a luxury villa by a Holiday PA concierge"
                width={1280}
                height={1024}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The mission"
              title="Concierge care, for the way we travel now"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Holiday rentals have transformed how the world travels — more space, more freedom, more character than a hotel room. But they've always missed one thing: the seamless service that makes a stay truly special.
              </p>
              <p>
                We built Holiday PA to close that gap. From a private chef on your first night to a transfer waiting at arrivals, your personal PA arranges the trusted local services that turn a great rental into an unforgettable trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/40 py-16">
        <div className="container-90 grid gap-8 text-center sm:grid-cols-3">
          {[
            { value: 1200, suffix: "+", label: "Trusted local providers" },
            { value: 40, suffix: "+", label: "Destinations worldwide" },
            { value: 4.9, decimals: 1, label: "Average guest rating" },
          ].map((s) => (
            <Reveal key={s.label}>
              <AnimatedCounter
                to={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                className="font-display text-5xl font-semibold text-ocean"
              />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="container-90 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={founder}
                  alt="Oliver Wronski, founder and CEO of Holiday PA"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-ocean-gradient px-5 py-3 text-cloud shadow-lift">
                <p className="font-display text-sm font-semibold">Oliver Wronski</p>
                <p className="text-xs text-cloud/75">Founder &amp; CEO</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="From the founder" title="Why I started Holiday PA" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                "After years of staying in incredible rentals around the world, I kept noticing the same thing — the property was perfect, but arranging a chef, a transfer or a treatment meant juggling a dozen local contacts and a lot of hope."
              </p>
              <p>
                "Holiday PA is the service I always wished existed: one trusted concierge that turns any rental into a fully serviced stay, and gives brilliant local providers a global stage."
              </p>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">— Oliver Wronski, London · University of Nottingham</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-90">
          <SectionHeading eyebrow="Our values" title="What guides everything we do" />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-gradient text-cloud">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-90 py-20 md:py-28">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-ocean-gradient px-8 py-14 text-center text-cloud md:py-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Your stay, fully serviced
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cloud/80">
              Explore the marketplace and let your personal PA take care of the details.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="coral" size="xl">
                <Link to="/services">Browse services</Link>
              </Button>
              <Button asChild variant="ghostLight" size="xl">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
