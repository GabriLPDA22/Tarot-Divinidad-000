export const siteConfig = {
  name: "Tarot Divinidad 000",
  tagline: "Consulta de tarot por teléfono",
  description:
    "Acompañamos tus procesos con tus guías espirituales. Tarot Divinidad 000 ilumina tu camino.",

  reservaUrl: "https://RESERVA_URL_PLACEHOLDER",

  reservaLinks: {
    m20: "https://RESERVA_20MIN_PLACEHOLDER",
    m30: "https://RESERVA_30MIN_PLACEHOLDER",
    m45: "https://RESERVA_45MIN_PLACEHOLDER",
    m60: "https://RESERVA_60MIN_PLACEHOLDER",
  },

  whatsapp: {
    phone: "34600000000",
    message:
      "Hola, me gustaría reservar una consulta de tarot con Tarot Divinidad 000.",
    messageTemplate:
      "Hola, quiero reservar la tirada de {duracion} ({precio}). ¿Tienes disponibilidad?",
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Sobre nosotros", href: "/sobre" },
    { label: "Contacto", href: "/#contacto" },
  ],

  hero: {
    microline: "Consulta de tarot por teléfono",
    heading: "Acompañamos tus procesos con tus guías espirituales",
    subheading:
      "Si quieres que tus guías te acompañen en tus decisiones importantes, detente, escucha y elige desde tu corazón. Tarot Divinidad 000 ilumina tu camino sin imponer, despertando claridad y calma en cada persona.",
    ctaPrimary: "Reservar",
    ctaSecondary: "WhatsApp",
  },

  contact: {
    email: "divinidadenergia@gmail.com",
    phone: "34600000000",
  },

  tiers: [
    { duration: 20, price: 20, card: "eye" as const, linkKey: "m20" as const },
    { duration: 30, price: 30, card: "moon" as const, linkKey: "m30" as const },
    { duration: 45, price: 45, card: "star" as const, linkKey: "m45" as const },
    { duration: 60, price: 60, card: "sacred" as const, linkKey: "m60" as const },
  ],
} as const;

export type TierCard = "eye" | "moon" | "star" | "sacred";
export type ReservaLinkKey = "m20" | "m30" | "m45" | "m60";
