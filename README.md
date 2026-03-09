<div align="center">

# ✦ Tarot Divinidad 000 ✦

**Sitio web profesional para consultas de tarot telefónico**

Diseño oscuro y elegante con acentos dorados, animaciones cinematográficas y optimización completa para SEO y rendimiento.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdivinidad000.com&style=for-the-badge&label=divinidad000.com&color=C7A85A&labelColor=181411)](https://divinidad000.com)

</div>

---

## 🛠️ Tech Stack

<div align="center">

![Astro](https://img.shields.io/badge/Astro-181411?style=for-the-badge&logo=astro&logoColor=FF5D01)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-181411?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![JavaScript](https://img.shields.io/badge/JavaScript-181411?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-181411?style=for-the-badge&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-181411?style=for-the-badge&logo=css3&logoColor=1572B6)
![SVG](https://img.shields.io/badge/SVG-181411?style=for-the-badge&logo=svg&logoColor=FFB13B)
![Calendly](https://img.shields.io/badge/Calendly-181411?style=for-the-badge&logo=calendly&logoColor=006BFF)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-181411?style=for-the-badge&logo=googlefonts&logoColor=4285F4)
![Schema.org](https://img.shields.io/badge/Schema.org-181411?style=for-the-badge&logo=json&logoColor=C7A85A)

</div>

<div align="center">

| Tecnología | Rol en el proyecto |
|:---:|:---|
| **Astro** | Framework SSG — generación estática ultra rápida |
| **Tailwind CSS** | Sistema de estilos utility-first |
| **Vanilla JS** | Animaciones, parallax, interacciones sin dependencias |
| **SVG** | Ilustraciones decorativas y loader cinematográfico |
| **Calendly** | Sistema de reservas y gestión de citas |
| **Schema.org** | Datos estructurados JSON-LD para SEO |

</div>

---

## ✨ Características

<table>
<tr>
<td width="50%">

🔮 **Loader cinematográfico**
Animación de ojo con zoom al entrar (una vez por sesión)

🌀 **Efectos parallax**
Movimiento sutil en secciones al hacer scroll

🎨 **Scrollbar personalizado**
Integrado con la paleta oscura/dorada del sitio

📅 **Reservas con Calendly**
Integración directa para cada tipo de tirada (20, 30, 45 y 60 min)

</td>
<td width="50%">

🔍 **SEO completo**
Meta tags, Open Graph, canonical URLs, sitemap, JSON-LD

♿ **Accesibilidad**
`prefers-reduced-motion`, ARIA, navegación por teclado

📱 **Responsive**
Adaptado a móvil, tablet y escritorio

💬 **WhatsApp directo**
Botón de contacto con mensaje preconfigurado por tirada

</td>
</tr>
</table>

---

## 📅 Sistema de reservas

Las reservas se gestionan con **Calendly**. Cada tirada tiene su propio enlace configurado en `src/content/site.ts`:

```ts
reservaLinks: {
  m20: "https://calendly.com/TU_USUARIO/evento-20min",
  m30: "https://calendly.com/TU_USUARIO/evento-30min",
  m45: "https://calendly.com/TU_USUARIO/evento-45min",
  m60: "https://calendly.com/TU_USUARIO/evento-60min",
}
```

Para cambiar o actualizar los enlaces de Calendly, editar únicamente ese archivo.

---

## 🗂️ Estructura

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ServicesSection.astro
│   ├── CTASection.astro
│   ├── LoaderOverlay.astro
│   ├── CookieBanner.astro
│   └── ...
├── layouts/
│   ├── BaseLayout.astro
│   └── LegalLayout.astro
├── pages/               # Páginas del sitio
│   ├── index.astro      # Inicio
│   ├── sobre.astro      # Sobre nosotros
│   ├── reservar.astro   # Precios y reserva
│   └── ...              # Páginas legales
├── styles/
│   └── global.css
└── content/
    └── site.ts          # ← Config central (textos, precios, enlaces Calendly, WhatsApp)
```

---

## ⚙️ Configuración central

Todo el contenido editable está en **`src/content/site.ts`**: nombre, descripción, precios, enlaces de Calendly, número de WhatsApp, navegación y tiradas.

---

## 🚀 Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build
```

---

## 🎨 Paleta

<div align="center">

| | Color | Hex | Uso |
|:---:|:---|:---:|:---|
| ![#181411](https://img.shields.io/badge/-181411?style=flat-square&color=181411) | Fondo principal | `#181411` | Background general |
| ![#211B17](https://img.shields.io/badge/-211B17?style=flat-square&color=211B17) | Fondo secundario | `#211B17` | Secciones alternadas |
| ![#26201B](https://img.shields.io/badge/-26201B?style=flat-square&color=26201B) | Superficies/cards | `#26201B` | Tarjetas y componentes |
| ![#F4EEE6](https://img.shields.io/badge/-F4EEE6?style=flat-square&color=F4EEE6) | Texto principal | `#F4EEE6` | Texto general |
| ![#CBBFB1](https://img.shields.io/badge/-CBBFB1?style=flat-square&color=CBBFB1) | Texto secundario | `#CBBFB1` | Subtítulos |
| ![#C7A85A](https://img.shields.io/badge/-C7A85A?style=flat-square&color=C7A85A) | Dorado | `#C7A85A` | Acentos, botones, iconos |
| ![#D6B86B](https://img.shields.io/badge/-D6B86B?style=flat-square&color=D6B86B) | Dorado claro | `#D6B86B` | Hover states |
| ![#8E6E34](https://img.shields.io/badge/-8E6E34?style=flat-square&color=8E6E34) | Dorado oscuro | `#8E6E34` | Scrollbar, bordes sutiles |

</div>

---

## 📄 Despliegue

Generación estática con `npm run build` → carpeta `dist/` desplegada en **Hostinger**.

Incluye `.htaccess` con caché optimizado para assets estáticos.

---

<div align="center">

**✦**

<sub>Hecho con <a href="https://astro.build">Astro</a> · Desplegado en Hostinger</sub>

</div>
