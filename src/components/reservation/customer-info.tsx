"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

export function CustomerInfoStep() {
  const { reservationData, updateCustomerInfo, setCurrentStep } =
    useReservation();
  const [formData, setFormData] = useState({
    name: reservationData.customer.name,
    email: reservationData.customer.email,
    phone: reservationData.customer.phone,
    notes: reservationData.customer.notes ?? "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      updateCustomerInfo({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes,
      });
      setCurrentStep(2);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">Información de Contacto</h3>
        <p className="text-gray-400">
          Por favor, completa tus datos para continuar con la reserva
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre Completo</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notas Adicionales (Opcional)</Label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Cuéntanos cualquier detalle importante para tu sesión"
            rows={3}
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full rounded-full bg-amber-500 text-black hover:bg-amber-600"
          >
            Continuar
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
