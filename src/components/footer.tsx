import { FooterLink } from "@/components/ui/footer-link";
import { SocialIcon } from "@/components/ui/social-icon";
import { info } from "@/data/info";
import {
  SiGmail,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <span className="text-xl font-bold text-amber-500 sm:text-2xl">
                DVINE
              </span>
              <span className="ml-1 text-xl font-light text-white sm:text-2xl">
                STUDIOS
              </span>
            </Link>
            <p className="mb-4 text-sm sm:text-base">
              Servicios de fotografía profesional que capturan lo extraordinario
              en cada toma.
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
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/estudios">Estudios</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/portafolio">Portafolio</FooterLink>
              <FooterLink href="/nosotros">Nosotros</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <FooterLink href="/servicios">Fotografía de Retratos</FooterLink>
              <FooterLink href="/servicios">Fotografía Comercial</FooterLink>
              <FooterLink href="/servicios">Cobertura de Eventos</FooterLink>
              <FooterLink href="/servicios">Fotografía de Productos</FooterLink>
              <FooterLink href="/servicios">Fotografía de Moda</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
              Contáctanos
            </h3>
            <address className="text-sm not-italic sm:text-base">
              <p className="mb-2">
                {info.address.building} {info.address.number}{" "}
                {info.address.street}
              </p>
              <p className="mb-2">
                {info.address.city}, {info.address.country}{" "}
                {info.address.postalCode}
              </p>
              <Link href={`mailto:${info.contact_email}`} className="mb-2">
                {info.contact_email}
              </Link>
              <p>{info.phone}</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dvine Studios. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
