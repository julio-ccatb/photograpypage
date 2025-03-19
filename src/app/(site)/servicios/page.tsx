"use client";

import { CTASection } from "@/components/cta-section";
import { PricingPackages } from "@/components/services/pricing-packages";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabs } from "@/components/services/services-tabs";
import { WorkSamples } from "@/components/services/work-samples";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ServicesHero />
      <ServicesTabs />
      <PricingPackages />
      <WorkSamples />
      <CTASection />
    </div>
  );
}
