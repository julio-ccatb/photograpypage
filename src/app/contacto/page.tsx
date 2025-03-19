"use client";

import { ContactHeader } from "@/components/contact/contact-header";
import { ContactMethods } from "@/components/contact/contact-methods";
import { ContactTestimonials } from "@/components/contact/contact-testimonials";
import { CTASection } from "@/components/cta-section";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ContactHeader />
      <ContactMethods />
      <ContactTestimonials />
      <CTASection />
    </div>
  );
}
