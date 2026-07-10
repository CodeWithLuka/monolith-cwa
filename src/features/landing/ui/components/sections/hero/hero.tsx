import { Container } from "../../design-system/layout/container";

import { HeroCta } from "./hero-cta";
import { HeroHeading } from "./hero-heading";
import { HeroWorkflow } from "./hero-workflow";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div className="pt-8 sm:pt-0">
            <HeroHeading />
            <HeroCta />
          </div>

          <div className="flex lg:items-center lg:justify-center">
            <HeroWorkflow />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block md:bottom-8">
        <div className="flex flex-col items-center gap-2 text-[11px] text-muted-foreground">
          <span>Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
