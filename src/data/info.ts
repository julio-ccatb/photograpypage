// Definition of the info object that contains the information of the company

export const info = {
  contact_email: "info@dvinestudios.com",
  phone: "1+ (809) 221-5317",
  phone_address: "+18092215317",
  site: "https://dvinestudios.com",
  address: {
    street: "Av. José Contreras",
    number: "128",
    building: "Plaza Cosmos",
    floor: "2do Piso",
    city: "Distrito Nacional",
    country: "República Dominicana",
    postalCode: "10102",
  },
  external_links: {
    booking: "https://calendly.com/dvinestudios",
    whatsapp: "https://wa.me/18092215317",
    instagram: "https://www.instagram.com/dvinestudios/",
    tiktok: "https://www.tiktok.com/@dvinestudios",
    youtube: "https://www.youtube.com/@Dvinestudiosrd",
  },
};

export enum Routes {
  HOME = "/",
  ABOUT = "/nosotros",
  SERVICES = "/servicios",
  PORTFOLIO = "/portafolio",
  CONTACT = "/contacto",
  ESTUDIOS = "/estudios",
  NOT_FOUND = "/404",
}
