import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const social = [
  { href: "https://www.linkedin.com/in/oliver-wronski-543946127/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/theholiday_pa/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/theholidaypa/", label: "Facebook", Icon: Facebook },
];

const cols = [
  {
    title: "Explore",
    links: [
      { to: "/services", label: "All services" },
      { to: "/#destinations", label: "Destinations" },
      { to: "/#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/partners", label: "For partners" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ocean-gradient text-cloud">
      <div className="container-90 relative z-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud/70">
              Your stay, fully serviced. Trusted local chefs, spas, experiences and transfers for your holiday rental.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cloud/20 text-cloud/80 transition-colors hover:bg-cloud/10 hover:text-cloud"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-surf">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-cloud/75 transition-colors hover:text-cloud">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-surf">Newsletter</h4>
            <p className="mt-4 text-sm text-cloud/70">Concierge tips and new destinations, now and then.</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="h-11 rounded-full border-cloud/20 bg-cloud/10 text-cloud placeholder:text-cloud/50 focus-visible:ring-surf"
              />
              <Button type="submit" variant="coral" size="icon" className="h-11 w-11 shrink-0" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cloud/15 pt-6 text-sm text-cloud/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Holiday PA. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-surf underline-offset-4 hover:underline"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
