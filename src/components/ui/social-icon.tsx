"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SocialIconProps {
  icon: ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export function SocialIcon({
  icon,
  href = "#",
  target = "_self",
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target={target}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-amber-500/70 hover:bg-amber-500/20 hover:text-amber-400 sm:h-10 sm:w-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{icon}</span>
    </motion.a>
  );
}
