"use client";

import { StudiosHeader } from "@/components/studios/studios-header";
import { StudiosGrid } from "@/components/studios/studios-grid";
import { StudioFeatures } from "@/components/studios/studio-features";
import { StudioTestimonials } from "@/components/studios/studio-testimonials";
import { StudioFAQ } from "@/components/studios/studio-faq";
import { CTASection } from "@/components/cta-section";

export default function EstudiosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StudiosHeader />
      <StudiosGrid />
      <StudioFeatures />
      <StudioTestimonials />
      <StudioFAQ />
      <CTASection />
    </div>
  );
}
