"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PackageType } from "@/types/services";
import { ROUTES } from "@/data/info";

interface ServicePackageProps {
  packageData: PackageType;
}

export function ServicePackage({ packageData }: ServicePackageProps) {
  const { title, price, features, popular } = packageData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative h-full overflow-hidden rounded-xl border bg-zinc-800/50 transition-all duration-300",
        popular ? "border-amber-500" : "border-zinc-700 hover:border-zinc-500",
      )}
    >
      {popular && (
        <div className="absolute left-0 right-0 top-0 bg-amber-500 py-1 text-center text-xs font-bold text-black">
          RECOMENDADO
        </div>
      )}

      <div className={cn("p-6 sm:p-8", popular ? "pt-8" : "")}>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-amber-500">{price}</span>
        </div>

        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full rounded-full",
            popular
              ? "bg-amber-500 text-black hover:bg-amber-600"
              : "bg-zinc-700 text-white hover:bg-zinc-600",
          )}
          asChild
        >
          <Link href={ROUTES.RESERVAS}>Seleccionar</Link>
        </Button>
      </div>
    </motion.div>
  );
}
