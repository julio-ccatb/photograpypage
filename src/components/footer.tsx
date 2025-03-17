import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { SocialIcon } from "@/components/ui/social-icon"
import { FooterLink } from "@/components/ui/footer-link"

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl sm:text-2xl font-bold text-amber-500">DVINE</span>
              <span className="text-xl sm:text-2xl font-light ml-1 text-white">STUDIOS</span>
            </Link>
            <p className="mb-4 text-sm sm:text-base">
              Servicios de fotografía profesional que capturan lo extraordinario en cada toma.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/estudios">Estudios</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/portafolio">Portafolio</FooterLink>
              <FooterLink href="/nosotros">Nosotros</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Servicios</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/servicios/retratos">Fotografía de Retratos</FooterLink>
              <FooterLink href="/servicios/comercial">Fotografía Comercial</FooterLink>
              <FooterLink href="/servicios/eventos">Cobertura de Eventos</FooterLink>
              <FooterLink href="/servicios/productos">Fotografía de Productos</FooterLink>
              <FooterLink href="/servicios/moda">Fotografía de Moda</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Contáctanos</h3>
            <address className="not-italic text-sm sm:text-base">
              <p className="mb-2">123 Avenida Fotografía</p>
              <p className="mb-2">Madrid, España 28001</p>
              <p className="mb-2">info@lenscraft.com</p>
              <p>(+34) 91 123 4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Dvine Studios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

