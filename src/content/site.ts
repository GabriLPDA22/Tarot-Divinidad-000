export const siteConfig = {
  name: "Tarot Divinidad 000",
  tagline: "Consulta de tarot por teléfono",
  description:
    "Acompañamos tus procesos con tus guías espirituales. Tarot Divinidad 000 ilumina tu camino.",

  reservaUrl: "https://RESERVA_URL_PLACEHOLDER",

  whatsapp: {
    phone: "34600000000",
    message:
      "Hola, me gustaría reservar una consulta de tarot con Tarot Divinidad 000.",
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    microline: "Consulta de tarot por teléfono",
    heading: "Acompañamos tus procesos con tus guías espirituales",
    subheading:
      "Si quieres que tus guías te acompañen en tus decisiones importantes, detente, escucha y elige desde tu corazón. Tarot Divinidad 000 ilumina tu camino sin imponer, despertando claridad y calma en cada persona.",
    ctaPrimary: "Reservar",
    ctaSecondary: "WhatsApp",
  },
} as const;
