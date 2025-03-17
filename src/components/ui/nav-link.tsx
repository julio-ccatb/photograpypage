"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={cn(
        "relative text-gray-300 hover:text-white transition-colors duration-300 group",
        isActive && "text-white",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute left-0 right-0 bottom-0 h-0.5 bg-amber-500 transform transition-transform duration-300",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  )
}

