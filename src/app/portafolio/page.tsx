"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { PortfolioFilters } from "@/components/portfolio/portfolio-filters";
import { portfolioItems, categories } from "@/data/mock-portfolio";
import { motion } from "framer-motion";

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
        {/* Hero section */}
        <section className="relative mb-8 flex h-[30vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container z-10 mx-auto px-4 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Nuestro Portafolio
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Explora nuestra colección de trabajos fotográficos en diferentes
              estilos y categorías
            </p>
          </motion.div>
        </section>

        {/* Filtros en la parte superior */}
        <section className="container mx-auto mb-8 px-4">
          <PortfolioFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onClearFilters={handleClearFilters}
            totalItems={portfolioItems.length}
            filteredItems={filteredItems.length}
          />
        </section>

        {/* Galería principal */}
        <section className="py-4 pb-24">
          <PortfolioGallery items={filteredItems} isLoading={isLoading} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
