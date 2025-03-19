"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./whatsapp-button";
import { info } from "@/data/info";

interface ContactCardProps {
  onMethodChange: (method: string) => void;
}

export function ContactCard({ onMethodChange }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-900/20"
    >
      <div className="relative p-6 sm:p-8">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl"></div>

        <h2 className="mb-4 text-2xl font-bold">Estamos Aquí Para Ayudarte</h2>
        <p className="mb-6 text-gray-300">
          Nuestro equipo está listo para responder a todas tus preguntas y
          ayudarte a crear momentos extraordinarios.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            className="rounded-full bg-amber-500 text-black hover:bg-amber-600"
            onClick={() => onMethodChange("message")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Enviar Mensaje
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-white/30 text-white hover:border-white/60 hover:bg-white/10"
            onClick={() => onMethodChange("call")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Llamar Ahora
          </Button>

          <WhatsAppButton phoneNumber={info.phone_address} text="WhatsApp" />
        </div>
      </div>
    </motion.div>
  );
}
