"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactTabs } from "./contact-tabs";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";
import { ContactCall } from "./contact-call";
import { ContactFAQSection } from "./contact-faq-section";
import { ContactCard } from "./contact-card";
import { BusinessHours } from "./business-hours";

type ContactMethod = "message" | "visit" | "call";

export function ContactMethods() {
  const [activeMethod, setActiveMethod] = useState<ContactMethod>("message");

  return (
    <>
      {/* Contact Methods Tabs */}
      <section className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4">
          <ContactTabs activeMethod={activeMethod} onChange={setActiveMethod} />
        </div>
      </section>

      {/* Contact Methods Content */}
      <section className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column - Contact Form or Map - Takes more space */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {activeMethod === "message" && (
                  <motion.div
                    key="message-form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContactForm />
                  </motion.div>
                )}

                {activeMethod === "visit" && (
                  <motion.div
                    key="visit-map"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <ContactMap />
                  </motion.div>
                )}

                {activeMethod === "call" && (
                  <motion.div
                    key="call-info"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContactCall />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - FAQ and Contact Card - Takes less space */}
            <div className="space-y-8 lg:col-span-5">
              {/* FAQ Section */}
              <ContactFAQSection />

              {/* Contact Card */}
              <ContactCard
                onMethodChange={(method: string) =>
                  setActiveMethod(method as ContactMethod)
                }
              />

              {/* Business Hours Card */}
              <BusinessHours />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
