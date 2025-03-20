"use client"

import Image from "next/image"
import { historyData } from "@/data/about-data"

export function AboutHistory() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{historyData.title}</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">{historyData.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {historyData.milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={milestone.image || "/placeholder.svg"}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-amber-500 text-xl font-bold block mb-2">{milestone.year}</span>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

