"use client";

import { SocialIcon } from "@/components/ui/social-icon";
import { info } from "@/data/info";
import {
  SiGmail,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Clock, Mail, Phone } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

export function ContactCall() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div className="p-6 sm:p-8">
        <h2 className="mb-6 flex items-center text-2xl font-bold sm:text-3xl">
          <Phone className="mr-3 h-6 w-6 text-amber-500" />
          Llámanos
        </h2>

        <div className="mb-8 space-y-6">
          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-zinc-800 p-3">
              <Phone className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Teléfono</h3>
              <p className="text-gray-300">{info.phone} (WhatsApp)</p>
            </div>
          </div>

          <div className="mt-4">
            <WhatsAppButton
              phoneNumber={info.phone_address}
              fullWidth={true}
              text="Contactar por WhatsApp"
            />
          </div>

          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-zinc-800 p-3">
              <Mail className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-300">{info.contact_email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 rounded-full bg-zinc-800 p-3">
              <Clock className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Horario de Atención Telefónica
              </h3>
              <p className="text-gray-300">Lunes a Viernes: 9:00 - 19:00</p>
              <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <h3 className="mb-2 font-semibold text-amber-500">
            Respuesta Rápida
          </h3>
          <p className="text-sm">
            Para una respuesta más rápida, envíanos un WhatsApp o un correo
            electrónico con tus datos y el motivo de tu consulta.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 p-6 sm:p-8">
        <h3 className="mb-4 text-lg font-semibold">
          Síguenos en Redes Sociales
        </h3>
        <div className="flex space-x-4">
          <SocialIcon
            target="_blank"
            href={info.external_links.instagram}
            icon={<SiInstagram className="h-4 w-4" />}
          />
          <SocialIcon
            target="_blank"
            href={info.external_links.tiktok}
            icon={<SiTiktok className="h-4 w-4" />}
          />
          <SocialIcon
            target="_blank"
            href={info.external_links.youtube}
            icon={<SiYoutube className="h-4 w-4" />}
          />
          <SocialIcon
            href={`mailto:${info.contact_email}`}
            icon={<SiGmail className="h-4 w-4" />}
          />
        </div>
      </div>
    </div>
  );
}
