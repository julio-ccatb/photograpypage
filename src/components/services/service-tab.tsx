"use client";

import { cn } from "@/lib/utils";
import type { ServiceType } from "@/types/services";

interface ServiceTabProps {
  service: ServiceType;
  isActive: boolean;
  onClick: () => void;
}

export function ServiceTab({ service, isActive, onClick }: ServiceTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center border-l-2 p-4 text-left transition-all duration-300 sm:p-5",
        isActive
          ? "border-l-amber-500 bg-zinc-800/50"
          : "border-l-zinc-700 hover:border-l-zinc-500 hover:bg-zinc-800/30",
      )}
    >
      <div
        className={cn(
          "mr-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-16",
          isActive ? "bg-amber-500 text-black" : "bg-zinc-800 text-amber-500",
        )}
      >
        {service.icon}
      </div>
      <div>
        <h3
          className={cn(
            "text-base font-semibold transition-colors duration-300 sm:text-lg",
            isActive ? "text-amber-500" : "text-white",
          )}
        >
          {service.title}
        </h3>
        <p className="mt-1 hidden text-sm text-gray-400 sm:block">
          {service.shortDesc}
        </p>
      </div>
    </button>
  );
}
