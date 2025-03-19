"use client";

import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";
import { info } from "@/data/info";

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div className="p-6 sm:p-8">
        <h2 className="mb-6 flex items-center text-2xl font-bold sm:text-3xl">
          <MapPin className="mr-3 h-6 w-6 text-amber-500" />
          Visítanos
        </h2>

        <div className="mb-6">
          <p className="mb-4 text-gray-300">
            Nuestro estudio está ubicado en el corazón de {info.address.city},
            con fácil acceso y estacionamiento cercano.
          </p>
          <div className="mb-4 flex items-start">
            <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
            <div>
              <p className="font-medium">
                {info.address.street} {info.address.number},{" "}
                {info.address.building}
              </p>
              <p className="text-gray-400">
                {info.address.city}, {info.address.country}{" "}
                {info.address.postalCode}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
            <div>
              <p className="font-medium">Horario de Atención</p>
              <p className="text-gray-400">Lunes a Viernes: 9:00 - 19:00</p>
              <p className="text-gray-400">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={mapRef} className="relative h-[400px] w-full">
        <iframe
          src={info.external_links.map_location}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Ubicación de Dvine Studios"
          className="grayscale transition-all duration-500 hover:grayscale-0"
        ></iframe>

        <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/70 p-4 text-sm backdrop-blur-sm">
          <p className="mb-1 font-medium">Transporte:</p>
          <p className="text-gray-300">
            Metro Línea 1 - Estación Francisco Alberto Caamaño (5 min a pie)
          </p>
        </div>
      </div>
    </div>
  );
}
