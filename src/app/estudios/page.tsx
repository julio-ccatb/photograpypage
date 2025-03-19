"use client";

import { Header } from "@/components/header";
import { StudiosHeader } from "@/components/studios/studios-header";
import { StudiosGrid } from "@/components/studios/studios-grid";
import { StudioFeatures } from "@/components/studios/studio-features";
import { StudioTestimonials } from "@/components/studios/studio-testimonials";
import { StudioFAQ } from "@/components/studios/studio-faq";
import { StudioCTA } from "@/components/studios/studio-cta";

export default function EstudiosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <StudiosHeader />
      <StudiosGrid />
      <StudioFeatures />
      <StudioTestimonials />
      <StudioFAQ />
      <StudioCTA />
    </div>
  );
}
