"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MembershipHero } from "@/components/membership/membership-hero";
import { MembershipPlans } from "@/components/membership/membership-plans";
import { MembershipBenefits } from "@/components/membership/membership-benefits";
import { MembershipFAQ } from "@/components/membership/membership-faq";
import { MembershipCTA } from "@/components/membership/membership-cta";
import { LoginModal } from "@/components/membership/login-modal";

export default function MembershipPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleGetMembership = (planId: string) => {
    setSelectedPlan(planId);
    setIsLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <MembershipHero onGetStarted={() => setIsLoginModalOpen(true)} />
      <MembershipPlans onSelectPlan={handleGetMembership} />
      <MembershipBenefits />
      <MembershipFAQ />
      <MembershipCTA onGetStarted={() => setIsLoginModalOpen(true)} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
