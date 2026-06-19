import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/services", label: "Services" },
  { to: "/#how-it-works", label: "How it Works" },
  { to: "/#destinations", label: "Destinations" },
  { to: "/partners", label: "For Partners" },
  { to: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onDark = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !onDark;
  const linkColor = solid ? "text-foreground/70 hover:text-foreground" : "text-cloud/85 hover:text-cloud";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-90 flex h-16 items-center justify-between md:h-20">
        <Logo tone={solid ? "ocean" : "light"} />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant={solid ? "ghost" : "ghostLight"} size="sm">
            <Link to="/contact">Sign in</Link>
          </Button>
          <Button asChild variant="coral" size="sm">
            <Link to="/services">Book a service</Link>
          </Button>
        </div>

        <button
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
            solid ? "text-foreground" : "text-cloud"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="container-90 flex flex-col gap-1 border-t border-border/60 bg-background/95 py-4 backdrop-blur-xl">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild variant="soft">
                <Link to="/contact">Sign in</Link>
              </Button>
              <Button asChild variant="coral">
                <Link to="/services">Book a service</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
