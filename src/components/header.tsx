"use client";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MembershipBanner } from "./banners/membership-banner";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/50 backdrop-blur-md">
      <MembershipBanner />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-amber-500">DVINE</span>
              <span className="ml-1 text-2xl font-light">STUDIOS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden items-center space-x-8 lg:flex"
          >
            <NavLink href="/estudios">Estudios</NavLink>
            <NavLink href="/membresia">Membresias</NavLink>
            <NavLink href="/servicios">Servicios</NavLink>
            <NavLink href="/portafolio">Portafolio</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Button
              variant="outline"
              className="rounded-full border-amber-500 text-amber-500 transition-all duration-300 hover:bg-amber-500/20 hover:text-amber-400"
              asChild
            >
              <Link href="/reservar">Reservar Ahora</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900/95 backdrop-blur-md lg:hidden"
        >
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/estudios"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Estudios
            </Link>
            <Link
              href="/membresia"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Membresias
            </Link>
            <Link
              href="/servicios"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/portafolio"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="/nosotros"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg px-4 py-3 text-gray-200 hover:bg-zinc-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-2">
              <Button
                variant="outline"
                className="w-full rounded-full border-amber-500 text-amber-500 transition-all duration-300 hover:bg-amber-500/20 hover:text-amber-400"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/reservar">Reservar Ahora</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
