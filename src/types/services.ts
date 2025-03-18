import type { ReactNode } from "react"

export interface ServiceType {
  id: string
  title: string
  shortDesc: string
  description: string
  icon: ReactNode
  image: string
  features: string[]
  price: string
  popular?: boolean
}

export interface PackageType {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

export interface WorkSampleType {
  image: string
  title: string
  category: string
}

