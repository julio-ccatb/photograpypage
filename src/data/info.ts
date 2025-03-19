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
    whatsapp:
      "https://api.whatsapp.com/send/?phone=18098476177&text=%C2%A1Hola%21+%EF%BF%BD+Me+gustar%C3%ADa+obtener+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios+y+opciones+disponibles.+Quisiera+saber+c%C3%B3mo+puedo+agendar+una+sesi%C3%B3n+y+qu%C3%A9+incluyen+los+paquetes.+%C2%A1Espero+su+respuesta%21&type=phone_number&app_absent=0",
    instagram: "https://www.instagram.com/dvinestudios/",
    tiktok: "https://www.tiktok.com/@dvinestudios",
    youtube: "https://www.youtube.com/@Dvinestudiosrd",
    map_location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.565232471388!2d-69.92958292480984!3d18.458039082623458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea563f8955548a3%3A0xfd5903c790bdc498!2sDvine%20Studios!5e0!3m2!1ses-419!2sdo!4v1742388046151!5m2!1ses-419!2sdo",
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
