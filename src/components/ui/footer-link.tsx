import Link from "next/link"
import type { ReactNode } from "react"

interface FooterLinkProps {
  href: string
  children: ReactNode
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-amber-500 transition-colors duration-300">
        {children}
      </Link>
    </li>
  )
}

