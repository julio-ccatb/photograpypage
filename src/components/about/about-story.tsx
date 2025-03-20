"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { historyData } from "@/data/about-data";

export function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 text-center"
        >
          <div className="absolute left-0 top-1/2 -z-10 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <span className="mb-3 inline-block bg-black px-4 text-sm uppercase tracking-widest text-amber-500">
            NUESTRO VIAJE
          </span>

          <h2 className="mb-6 mt-2 inline-block bg-black px-6 text-4xl font-bold md:text-5xl">
            {historyData.title}
          </h2>

          <p className="mx-auto max-w-3xl text-gray-300">
            {historyData.description}
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="mx-auto max-w-6xl">
          {historyData.story.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-24 items-center gap-8 last:mb-0`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={milestone.image || "/placeholder.svg"}
                    alt={milestone.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="block text-xl font-bold text-amber-500">
                      {milestone.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  {milestone.title}
                </h3>
                <p className="mb-6 text-gray-300">{milestone.description}</p>

                {/* Quote */}
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-400">
                  &quot;{milestone.quote}&quot;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
