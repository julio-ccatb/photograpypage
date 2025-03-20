"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/membership/checkout-form"
import { CheckoutSummary } from "@/components/membership/checkout-summary"
import { Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan) {
      setSelectedPlan(plan)
    } else {
      setSelectedPlan("pro") // Default plan
    }

    // Simulate checking if user is logged in
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Finalizar compra</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <CheckoutForm selectedPlan={selectedPlan} />
              </div>

              <div className="lg:col-span-5">
                <CheckoutSummary selectedPlan={selectedPlan} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

