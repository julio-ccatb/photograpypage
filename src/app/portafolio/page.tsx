"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { PortfolioFilters } from "@/components/portfolio/portfolio-filters";
import { portfolioItems, categories } from "@/data/mock-portfolio";
import { PortfolioHeader } from "@/components/portfolio/portfolio-header";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    // Filtrar por categoría si no es "all"
    let filtered = portfolioItems;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Simulamos tiempo de carga al cambiar filtros
    setTimeout(() => {
      setFilteredItems(filtered);
      setIsLoading(false);
    }, 500);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main className="w-full pt-20">
        <PortfolioHeader />

        {/* Filtros en la parte superior */}
        <section className="bg-zinc-950 py-8">
          <div className="container mx-auto px-4">
            <PortfolioFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              onClearFilters={handleClearFilters}
              totalItems={portfolioItems.length}
              filteredItems={filteredItems.length}
            />
          </div>
        </section>

        {/* Galería principal */}
        <section className="bg-zinc-950 py-8 pb-24">
          <div className="container mx-auto px-4">
            <PortfolioGallery items={filteredItems} isLoading={isLoading} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
