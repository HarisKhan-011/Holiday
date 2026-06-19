import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Clock, Check, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Holiday PA" },
      {
        name: "description",
        content: "Get in touch with the Holiday PA concierge team. We're here to help plan your fully serviced stay.",
      },
      { property: "og:title", content: "Contact Holiday PA" },
      { property: "og:description", content: "Reach the Holiday PA concierge team." },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Mail, label: "Email", value: "hello@holidaypa.com" },
  { icon: MapPin, label: "Base", value: "London, United Kingdom" },
  { icon: Clock, label: "Hours", value: "Concierge support, 7 days a week" },
];

const social = [
  { href: "https://www.linkedin.com/in/oliver-wronski-543946127/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/theholiday_pa/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/theholidaypa/", label: "Facebook", Icon: Facebook },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="grain relative overflow-hidden bg-ocean-gradient pb-16 pt-32 text-cloud md:pb-20 md:pt-40">
        <div className="container-90 relative z-10 max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surf">Contact</span>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Let's plan your serviced stay
            </h1>
            <p className="mt-4 text-lg text-cloud/80">
              Questions, special requests or partnership ideas — our concierge team would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-90 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-lift md:p-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">Send us a message</h2>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center justify-center rounded-3xl bg-secondary/60 p-12 text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-surf-gradient text-cloud">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">Message sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out — your PA will reply shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <Input required placeholder="Your name" className="h-12 rounded-2xl" />
                    </Field>
                    <Field label="Email">
                      <Input required type="email" placeholder="you@email.com" className="h-12 rounded-2xl" />
                    </Field>
                  </div>
                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </Field>
                  <Button type="submit" variant="coral" size="lg" className="w-full">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Details + map */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft">
                <h2 className="font-display text-xl font-semibold text-foreground">Get in touch</h2>
                <ul className="mt-5 space-y-5">
                  {details.map((d) => (
                    <li key={d.label} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ocean-gradient text-cloud">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{d.label}</p>
                        <p className="mt-0.5 font-medium text-foreground">{d.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  {social.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.1}>
              <div className="grain relative h-64 overflow-hidden rounded-[2rem] bg-ocean-gradient shadow-soft">
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 400 260" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                    <g stroke="var(--surf)" strokeWidth="1.2" fill="none" opacity="0.5">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={i * 32} x2="400" y2={i * 32} />
                      ))}
                      {Array.from({ length: 13 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="260" />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-0 grid place-items-center text-center text-cloud">
                  <div>
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cloud/15 backdrop-blur">
                      <MapPin className="h-6 w-6 text-surf" />
                    </span>
                    <p className="mt-3 font-display text-lg font-semibold">London, United Kingdom</p>
                    <p className="text-sm text-cloud/75">Serving destinations worldwide</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
