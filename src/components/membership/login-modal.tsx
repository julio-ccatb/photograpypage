"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiGoogle } from "@icons-pack/react-simple-icons";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string | null;
}

export function LoginModal({ isOpen, onClose, selectedPlan }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);

    // Simulate Google login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to checkout page
      window.location.href = `/membresia/checkout?plan=${selectedPlan ?? "pro"}`;
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="w-full max-w-md overflow-hidden rounded-xl bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Iniciar sesión</h3>
                <p className="text-gray-400">
                  Inicia sesión para continuar con tu membresía
                  {selectedPlan &&
                    ` ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}`}
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-6 text-black hover:bg-gray-100"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <SiGoogle />
                  )}
                  Continuar con Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-zinc-900 px-2 text-gray-400">o</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-lg border-zinc-700 py-6 text-white hover:border-zinc-600 hover:bg-zinc-800"
                  onClick={onClose}
                >
                  Continuar más tarde
                </Button>
              </div>

              <p className="mt-6 text-center text-xs text-gray-400">
                Al iniciar sesión, aceptas nuestros{" "}
                <a href="/terminos" className="text-amber-500 hover:underline">
                  Términos de Servicio
                </a>{" "}
                y{" "}
                <a
                  href="/privacidad"
                  className="text-amber-500 hover:underline"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
