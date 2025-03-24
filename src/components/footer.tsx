"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { FooterLink } from "@/components/ui/footer-link";
import { Input } from "@/components/ui/input";
import { SocialIcon } from "@/components/ui/social-icon";
import { info, ROUTES } from "@/data/info";
import {
  SiGmail,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Aquí iría la lógica para enviar el email a tu sistema
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-zinc-950 to-black pt-16 text-gray-400">
      <div className="container mx-auto px-4">
        {/* Logo y descripción */}
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" className="mb-6 flex items-center">
                <span className="text-2xl font-bold text-amber-500 sm:text-3xl">
                  DVINE
                </span>
                <span className="ml-1 text-2xl font-light text-white sm:text-3xl">
                  STUDIOS
                </span>
              </Link>
              <p className="mb-6 text-gray-400">
                Capturamos momentos extraordinarios con pasión y precisión.
                Nuestro equipo de fotógrafos profesionales transforma visiones
                en imágenes que perduran en el tiempo.
              </p>
              <div className="flex space-x-4">
                <SocialIcon
                  target="_blank"
                  href={info.external_links.instagram}
                  icon={<SiInstagram className="h-4 w-4" />}
                />
                <SocialIcon
                  target="_blank"
                  href={info.external_links.tiktok}
                  icon={<SiTiktok className="h-4 w-4" />}
                />
                <SocialIcon
                  target="_blank"
                  href={info.external_links.youtube}
                  icon={<SiYoutube className="h-4 w-4" />}
                />
                <SocialIcon
                  href={`mailto:${info.contact_email}`}
                  icon={<SiGmail className="h-4 w-4" />}
                />
              </div>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                Explorar
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/estudios">Estudios</FooterLink>
                <FooterLink href="/servicios">Servicios</FooterLink>
                <FooterLink href="/portafolio">Portafolio</FooterLink>
                <FooterLink href="/nosotros">Nosotros</FooterLink>
                <FooterLink href="/contacto">Contacto</FooterLink>
                <FooterLink href={ROUTES.RESERVAS}>Reservar</FooterLink>
              </ul>
            </motion.div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                Servicios
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/servicios/">
                  Fotografía de Retratos
                </FooterLink>
                <FooterLink href="/servicios/">Fotografía Comercial</FooterLink>
                <FooterLink href="/servicios/">Cobertura de Eventos</FooterLink>
                <FooterLink href="/servicios/">
                  Fotografía de Productos
                </FooterLink>
                <FooterLink href="/servicios/">Fotografía de Moda</FooterLink>
              </ul>
            </motion.div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <span>
                    {info.address.street} {info.address.number},{" "}
                    {info.address.building}
                    <br />
                    {info.address.city}, {info.address.country}{" "}
                    {info.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <Link href={`tel:${info.phone_address}`}>{info.phone}</Link>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <Link href={`mailto:${info.contact_email}`}>
                    {info.contact_email}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                Newsletter
              </h3>
              <p className="mb-4 text-sm">
                Suscríbete para recibir noticias, ofertas especiales y consejos
                de fotografía.
              </p>

              {subscribed ? (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
                  ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-zinc-800 bg-zinc-900/50 pr-10 focus:border-amber-500"
                    />
                    <Button
                      type="submit"
                      className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-600"
                    >
                      <Send />
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mapa y horarios */}
        <div className="grid grid-cols-1 gap-8 border-t border-zinc-800 pb-8 pt-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-48 overflow-hidden rounded-lg"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              Horario de Atención
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-zinc-800 py-2">
                <span>Lunes - Viernes</span>
                <span className="font-medium text-white">9:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 py-2">
                <span>Sábado</span>
                <span className="font-medium text-white">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Domingo</span>
                <span className="text-amber-500">Cerrado</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                className="group rounded-full bg-amber-500 text-black hover:bg-amber-600"
                asChild
              >
                <Link href={ROUTES.RESERVAS}>
                  Reservar Ahora{" "}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Certificaciones y premios */}
        <div className="border-t border-zinc-800 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/50 p-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Premio Fotografía"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-xs">
                Premio Nacional
                <br />
                Fotografía 2023
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/50 p-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Certificación"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-xs">
                Certificación
                <br />
                Profesional
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/50 p-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Asociación"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-xs">
                Miembro
                <br />
                AFPE
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/50 p-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sostenibilidad"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-xs">
                Compromiso
                <br />
                Sostenible
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright y políticas */}
        <div className="flex flex-col items-center justify-between border-t border-zinc-800 py-6 md:flex-row">
          <p className="mb-4 text-sm md:mb-0">
            &copy; {new Date().getFullYear()} Dvine Studios. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/privacidad"
              className="transition-colors hover:text-amber-500"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="transition-colors hover:text-amber-500"
            >
              Términos de Uso
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-amber-500"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
