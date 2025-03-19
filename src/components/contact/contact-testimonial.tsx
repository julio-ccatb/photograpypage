"use client";

import type React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface ContactTestimonialProps {
  text: string;
  name: string;
  role: string;
  delay?: number;
}

export function ContactTestimonial({
  text,
  name,
  role,
  delay = 0,
}: ContactTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6"
    >
      <div className="mb-4 flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="mr-1 h-4 w-4 text-amber-500"
            fill="currentColor"
          />
        ))}
      </div>
      <p className="mb-6 text-gray-300">&quot;{text}&quot;</p>
      <div className="flex items-center">
        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-amber-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Star icon component for testimonials
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
