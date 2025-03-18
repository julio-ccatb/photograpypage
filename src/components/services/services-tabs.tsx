"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ServiceTab } from "./service-tab";
import { ServiceDetail } from "./service-detail";
import { services } from "@/data/services-data";

export function ServicesTabs() {
  const [activeService, setActiveService] = useState(services[1]!.id);
  const selectedService =
    services.find((service) => service.id === activeService) ?? services[0];

  return (
    <section className="bg-zinc-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Tabs de navegación */}
          <div className="flex flex-col lg:col-span-4">
            {services.map((service) => (
              <ServiceTab
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Detalle del servicio */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <ServiceDetail key={activeService} service={selectedService!} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
