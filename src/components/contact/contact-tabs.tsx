"use client"

import { motion } from "framer-motion"
import { MessageSquare, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

type ContactMethod = "message" | "visit" | "call"

interface ContactTabsProps {
  activeMethod: ContactMethod
  onChange: (method: ContactMethod) => void
}

export function ContactTabs({ activeMethod, onChange }: ContactTabsProps) {
  const tabs = [
    {
      id: "message" as const,
      label: "Enviar Mensaje",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      id: "visit" as const,
      label: "Visítanos",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: "call" as const,
      label: "Llámanos",
      icon: <Phone className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex flex-wrap justify-center max-w-2xl mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "relative flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 mx-2",
            activeMethod === tab.id ? "text-black" : "text-white/80 hover:text-white",
          )}
        >
          {activeMethod === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-amber-500 rounded-lg"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {tab.icon}
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  )
}

