"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesTabs } from "@/components/services/services-tabs";
import { PricingPackages } from "@/components/services/pricing-packages";
import { WorkSamples } from "@/components/services/work-samples";
import { ServicesCTA } from "@/components/services/services-cta";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ServicesHero />
      <ServicesTabs />
      <PricingPackages />
      <WorkSamples />
      <ServicesCTA />
      <Footer />
    </div>
  );
}
