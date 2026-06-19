import { Suspense, lazy, useEffect, useState } from "react";
import heroCoastal from "@/assets/hero-coastal.jpg";

const Globe3D = lazy(() => import("./Globe3D"));

/**
 * Renders the interactive 3D globe on capable desktop devices.
 * Falls back to a lightweight static rendered image on mobile,
 * when reduced motion is requested, or before client hydration.
 */
export function HeroGlobe() {
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnable3D(mq.matches && !reduce);
    const onChange = () => setEnable3D(mq.matches && !reduce);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="relative aspect-square w-full">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-surf-gradient opacity-30 blur-3xl" />
      {enable3D ? (
        <Suspense fallback={<GlobeFallback />}>
          <Globe3D />
        </Suspense>
      ) : (
        <GlobeFallback />
      )}
    </div>
  );
}

function GlobeFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="relative aspect-square w-[82%] overflow-hidden rounded-full shadow-glow ring-1 ring-surf/40">
        <img
          src={heroCoastal}
          alt="A sun-drenched coastal villa overlooking a turquoise lagoon"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-gradient opacity-25" />
      </div>
    </div>
  );
}
