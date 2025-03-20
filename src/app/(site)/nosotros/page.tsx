import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutPhilosophy } from "@/components/about/about-philosophy"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutProjects } from "@/components/about/about-projects"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTestimonials } from "@/components/about/about-testimonials"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "Nosotros | Dvine Studios - Estudio Fotográfico Profesional",
  description:
    "Conoce la historia, el equipo y los valores que hacen de Dvine Studios el estudio fotográfico líder en República Dominicana.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutPhilosophy />
      <AboutValues />
      <AboutTeam />
      <AboutProjects />
      <AboutTestimonials />
      <AboutCta />
    </main>
  )
}

