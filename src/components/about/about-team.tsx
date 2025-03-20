"use client";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { teamData } from "@/data/about-data";
import { SiGmail, SiInstagram } from "@icons-pack/react-simple-icons";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Award, Camera, ChevronRight, Linkedin, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function AboutTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"bio" | "portfolio">("bio");

  // Función para manejar el clic en un miembro del equipo
  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
    setActiveTab("bio");
    // Bloquear el scroll cuando el modal está abierto
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedMember(null);
    // Restaurar el scroll cuando el modal se cierra
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-zinc-950 to-black py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-amber-500">
            EL EQUIPO
          </span>
          <h3 className="mb-6 mt-2 text-3xl font-bold md:text-4xl">
            {teamData.title}
          </h3>
          <p className="mx-auto max-w-3xl text-gray-300">
            {teamData.description}
          </p>
        </motion.div>

        {/* Team Grid - Staggered Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12">
          {teamData.members.map((member, index) => {
            // Determinar el tamaño y posición de cada tarjeta
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
            const rowSpan = isLarge ? "md:row-span-2" : "md:row-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colSpan} ${rowSpan} group cursor-pointer`}
                onClick={() => handleMemberClick(index)}
              >
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl border border-zinc-800 transition-all duration-300 hover:border-amber-500/50">
                  {/* Imagen con overlay */}
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Especialidad */}
                    <div className="mb-3 w-fit rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-500">
                      {member.speciality}
                    </div>

                    {/* Nombre y rol */}
                    <h4 className="mb-1 text-2xl font-bold">{member.name}</h4>
                    <p className="mb-3 text-sm text-amber-500">{member.role}</p>

                    {/* Cita */}
                    <div className="mb-4 translate-y-4 transform rounded-lg bg-black/40 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm italic text-gray-300">
                        &quot;{member.quote}&quot;
                      </p>
                    </div>

                    {/* Ver más */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {member.achievements
                          .slice(0, 1)
                          .map((achievement, i) => (
                            <div key={i} className="flex items-center">
                              <Award className="mr-1 h-4 w-4 text-amber-500" />
                              <span className="text-xs text-gray-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        {member.achievements.length > 1 && (
                          <span className="text-xs text-gray-400">
                            +{member.achievements.length - 1} más
                          </span>
                        )}
                      </div>

                      <span className="flex items-center text-sm text-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Ver perfil <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal de perfil detallado */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre */}
              <button
                onClick={handleCloseModal}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Contenido del modal */}
              <div className="flex h-full flex-col md:flex-row">
                {/* Columna izquierda - Imagen */}
                <div className="relative w-full md:w-2/5">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={
                        teamData.members[selectedMember]?.image ??
                        "/placeholder.svg"
                      }
                      alt={
                        teamData.members[selectedMember]?.name ??
                        "Miembro del equipo"
                      }
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Información básica superpuesta */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="mb-3 w-fit rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-500">
                        {teamData.members[selectedMember]?.speciality}
                      </div>
                      <h3 className="mb-1 text-2xl font-bold">
                        {teamData.members[selectedMember]?.name}
                      </h3>
                      <p className="text-sm text-amber-500">
                        {teamData.members[selectedMember]?.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Información */}
                <div className="max-h-[60vh] w-full overflow-y-auto p-6 md:max-h-[90vh] md:w-3/5 md:p-8">
                  {/* Pestañas */}
                  <div className="mb-6 flex border-b border-zinc-800">
                    <button
                      className={`px-4 py-2 text-sm font-medium ${activeTab === "bio" ? "border-b-2 border-amber-500 text-amber-500" : "text-gray-400 hover:text-white"}`}
                      onClick={() => setActiveTab("bio")}
                    >
                      Biografía
                    </button>
                    <button
                      className={`px-4 py-2 text-sm font-medium ${activeTab === "portfolio" ? "border-b-2 border-amber-500 text-amber-500" : "text-gray-400 hover:text-white"}`}
                      onClick={() => setActiveTab("portfolio")}
                    >
                      Portafolio
                    </button>
                  </div>

                  {/* Contenido de la pestaña */}
                  <div className="space-y-6">
                    {activeTab === "bio" ? (
                      <>
                        {/* Cita destacada */}
                        <div className="mb-6 rounded-lg border-l-4 border-amber-500 bg-zinc-800/50 p-4">
                          <p className="italic text-gray-300">
                            &quot;{teamData.members[selectedMember]?.quote}
                            &quot;
                          </p>
                        </div>

                        {/* Biografía */}
                        <div>
                          <h4 className="mb-3 text-lg font-semibold">
                            Biografía
                          </h4>
                          <p className="text-gray-300">
                            {teamData.members[selectedMember]?.bio}
                          </p>
                        </div>

                        {/* Detalles */}
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="rounded-lg bg-zinc-800/30 p-4">
                            <h5 className="mb-2 text-sm font-semibold text-amber-500">
                              Equipo favorito
                            </h5>
                            <div className="flex items-center">
                              <Camera className="mr-2 h-4 w-4 text-gray-400" />
                              <p className="text-sm text-gray-300">
                                {teamData.members[selectedMember]?.equipment}
                              </p>
                            </div>
                          </div>

                          <div className="rounded-lg bg-zinc-800/30 p-4">
                            <h5 className="mb-2 text-sm font-semibold text-amber-500">
                              Dato curioso
                            </h5>
                            <p className="text-sm text-gray-300">
                              {teamData.members[selectedMember]?.funFact}
                            </p>
                          </div>
                        </div>

                        {/* Logros */}
                        <div>
                          <h4 className="mb-3 text-lg font-semibold">
                            Logros destacados
                          </h4>
                          <ul className="space-y-2">
                            {teamData.members[selectedMember]?.achievements.map(
                              (achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <Award className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                                  <span className="text-gray-300">
                                    {achievement}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Redes sociales */}
                        <div>
                          <h4 className="mb-3 text-lg font-semibold">
                            Conecta con{" "}
                            {
                              teamData.members[selectedMember]?.name.split(
                                " ",
                              )[0]
                            }
                          </h4>
                          <div className="flex space-x-3">
                            <SocialIcon
                              icon={<SiInstagram />}
                              href={
                                teamData.members[selectedMember]?.social
                                  .instagram
                              }
                              aria-label="Instagram"
                            ></SocialIcon>
                            <SocialIcon
                              icon={<Linkedin />}
                              href={
                                teamData.members[selectedMember]?.social
                                  .linkedin
                              }
                              aria-label="LinkedIn"
                            ></SocialIcon>
                            <SocialIcon
                              icon={<SiGmail />}
                              href={
                                teamData.members[selectedMember]?.social.email
                              }
                              aria-label="Email"
                            ></SocialIcon>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4 className="mb-4 text-lg font-semibold">
                          Trabajos destacados
                        </h4>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {teamData.members[
                            selectedMember
                          ]?.portfolioImages.map((image, i) => (
                            <div
                              key={i}
                              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Trabajo de ${teamData.members[selectedMember]?.name} ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 text-center">
                          <Button
                            variant="outline"
                            className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500/10"
                            onClick={() =>
                              (window.location.href = "/portafolio")
                            }
                          >
                            Ver más trabajos
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
