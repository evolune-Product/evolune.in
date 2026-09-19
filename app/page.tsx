import { Hero } from '@/sections/Hero';
import { CompanyIntro } from '@/sections/CompanyIntro';
import { Pillars } from '@/sections/Pillars';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { EdgeLab } from '@/sections/EdgeLab';
import { ProjectsTeaser } from '@/sections/ProjectsTeaser';
import { WhyEvolune } from '@/sections/WhyEvolune';
import { CTA } from '@/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Pillars />
      <ProductShowcase />
      <EdgeLab />
      <ProjectsTeaser />
      <WhyEvolune />
      <CTA />
    </>
  );
}
