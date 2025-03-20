"use client";

import { info } from "@/data/info";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

interface FloatingWhatsAppProps {
  message?: string;
}

export function FloatingWhatsApp({
  message = "Hola, me gustaría obtener más información sobre sus servicios.",
}: FloatingWhatsAppProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${info.phone_address}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="hover flex items-center justify-center rounded-full bg-black p-4 text-amber-500 shadow-lg outline outline-1 transition-all"
        onClick={handleClick}
        aria-label="Contactar por WhatsApp"
      >
        <SiWhatsapp className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
