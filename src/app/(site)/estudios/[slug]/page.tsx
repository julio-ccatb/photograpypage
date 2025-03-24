"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { StudioDetailHeader } from "@/components/studios/studio-detail-header";
import { StudioGallery } from "@/components/studios/studio-gallery";
import { StudioFeaturesDetail } from "@/components/studios/studio-features-detail";
import { StudioEquipment } from "@/components/studios/studio-equipment";
import { StudioPricing } from "@/components/studios/studio-pricing";
import { studios } from "@/data/studios-data";
import type { Studio } from "@/data/studios-data";
import { CTASection } from "@/components/cta-section";

export default function StudioDetailPage() {
  const params = useParams();
  const [studio, setStudio] = useState<Studio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const foundStudio = studios.find((s) => s.slug === params.slug);
      setStudio(foundStudio ?? null);
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-amber-500"></div>
      </div>
    );
  }

  if (!studio) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="mb-4 text-4xl font-bold">Estudio no encontrado</h1>
          <p className="mb-8 text-xl text-gray-300">
            Lo sentimos, el estudio que buscas no existe.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StudioDetailHeader studio={studio} />
      <StudioGallery studio={studio} />
      <StudioFeaturesDetail studio={studio} />
      <StudioEquipment studio={studio} />
      <StudioPricing studio={studio} />
      <CTASection />
    </div>
  );
}
