"use client"

import { useState } from "react"
import { ContactFAQItem } from "./contact-faq-item"
import { faqItems } from "@/data/contact-data"

export function ContactFAQSection() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <ContactFAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              icon={item.icon}
              isOpen={openFAQIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

