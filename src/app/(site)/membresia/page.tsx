"use client";

import { LoginModal } from "@/components/membership/login-modal";
import { MembershipBenefits } from "@/components/membership/membership-benefits";
import { MembershipCTA } from "@/components/membership/membership-cta";
import { MembershipFAQ } from "@/components/membership/membership-faq";
import { MembershipHero } from "@/components/membership/membership-hero";
import { MembershipPlans } from "@/components/membership/membership-plans";
import { useState } from "react";

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
