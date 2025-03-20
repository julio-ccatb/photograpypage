"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Star, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function MembershipBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Check if the user has already dismissed the banner
  useEffect(() => {
    const bannerDismissed = localStorage.getItem("membershipBannerDismissed");
    if (bannerDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("membershipBannerDismissed", "true");
  };

  return isVisible ? (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full bg-gradient-to-r from-amber-600 to-amber-500 py-2 text-black"
    >
      <div className="container mx-auto flex items-center justify-center px-4">
        <Star className="mr-2 hidden h-4 w-4 sm:block" fill="currentColor" />
        <p className="text-sm font-medium sm:text-base">
          <span className="hidden sm:inline">¡NUEVO!</span> Plan de Membresía
          Premium con acceso ilimitado a estudios
        </p>
        <Link
          href="/membresia"
          className="ml-2 flex items-center text-sm font-bold hover:underline sm:ml-4 sm:text-base"
        >
          Saber más <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <X className="mr-4 cursor-pointer" onClick={handleDismiss} />
    </motion.div>
  ) : null;
}
