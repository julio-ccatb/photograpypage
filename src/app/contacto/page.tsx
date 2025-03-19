"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactMethods } from "@/components/contact/contact-methods"
import { ContactTestimonials } from "@/components/contact/contact-testimonials"
import { ContactCTA } from "@/components/contact/contact-cta"
import { FloatingWhatsApp } from "@/components/contact/floating-whatsapp"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <ContactHeader />
      <ContactMethods />
      <ContactTestimonials />
      <ContactCTA />
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

