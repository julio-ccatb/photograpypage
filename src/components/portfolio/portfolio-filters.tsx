"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Category } from "@/data/mock-portfolio";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";

interface PortfolioFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  onClearFilters: () => void;
  totalItems: number;
  filteredItems: number;
}

export function PortfolioFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  onClearFilters,
  totalItems,
  filteredItems,
}: PortfolioFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
      {/* Header con contador y toggle */}
      <div className="flex items-center justify-between border-b border-zinc-800 p-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-amber-500" />
          <h3 className="font-medium">Filtros</h3>
          {selectedCategory !== "all" && (
            <button
              onClick={onClearFilters}
              className="ml-2 rounded-full bg-zinc-800 p-1 hover:bg-zinc-700"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            Mostrando {filteredItems} de {totalItems}
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Contenido expandible */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsExpanded(false);
                }}
                className={cn(
                  "flex items-center justify-center rounded-lg p-3 text-sm transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-amber-500 font-medium text-black"
                    : "border border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700/70",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Vista compacta (siempre visible) */}
      <div
        className={cn(
          "scrollbar-hide overflow-x-auto p-4",
          isExpanded ? "hidden" : "block",
        )}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all duration-300",
                selectedCategory === category.id
                  ? "bg-amber-500 font-medium text-black"
                  : "border border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700/70",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
