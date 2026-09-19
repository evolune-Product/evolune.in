import { Reveal } from '@/components/Reveal';
import { PrimaryLink, ArrowRight } from '@/components/Buttons';
import { NebulaGlow, SectionImage } from '@/components/backgrounds';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-base-900 py-28 md:py-36">
      <SectionImage src="/assets/evolune/backgrounds/contact.jpg" alt="Let's build what comes next" opacity={0.5} />
      <NebulaGlow />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-white leading-tight">
            Let's build what comes <span className="text-gradient">next, together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-brand-silver/75">
            Whether you want to deploy Evolune OS, run testing on Flasqo, or explore a partnership — we respond
            within 24 business hours.
          </p>
          <div className="mt-10">
            <PrimaryLink href="/contact">
              Start a Conversation <ArrowRight />
            </PrimaryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
