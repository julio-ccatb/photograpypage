"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudioDetailHeader } from "@/components/studios/studio-detail-header"
import { StudioGallery } from "@/components/studios/studio-gallery"
import { StudioFeaturesDetail } from "@/components/studios/studio-features-detail"
import { StudioEquipment } from "@/components/studios/studio-equipment"
import { StudioPricing } from "@/components/studios/studio-pricing"
import { StudioCTA } from "@/components/studios/studio-cta"
import { studios } from "@/data/studios-data"
import type { Studio } from "@/data/studios-data"

export default function StudioDetailPage() {
  const params = useParams()
  const [studio, setStudio] = useState<Studio | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const foundStudio = studios.find((s) => s.slug === params.slug)
      setStudio(foundStudio || null)
      setLoading(false)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (!studio) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Estudio no encontrado</h1>
          <p className="text-xl text-gray-300 mb-8">Lo sentimos, el estudio que buscas no existe.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <StudioDetailHeader studio={studio} />
      <StudioGallery studio={studio} />
      <StudioFeaturesDetail studio={studio} />
      <StudioEquipment studio={studio} />
      <StudioPricing studio={studio} />
      <StudioCTA />
      <Footer />
    </div>
  )
}

