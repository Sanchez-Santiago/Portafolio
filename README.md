# Portafolio Santiago Sanchez

Portafolio personal de Santiago Sanchez, desarrollador de software. Sitio estático generado con Astro, bilingüe (ES/EN) y construido sobre una cuadrícula bento minimalista en modo oscuro.

# Santiago Sanchez — Portfolio

Personal portfolio of Santiago Sanchez, software developer. A static site built with Astro, bilingual (ES/EN), structured as a minimalist dark-mode bento grid.

---

## 🇪🇸 Español

### Descripción

> Creé este portafolio como una pequeña muestra de mi trabajo: un espacio donde reúno mi perfil, mi experiencia y mis proyectos en un solo lugar, pensado para demostrar tanto lo que sé hacer como el criterio de diseño detrás de cada detalle.

Portafolio web que muestra mi perfil, experiencia laboral, habilidades, proyectos (obtenidos en tiempo de build desde la API de GitHub) y una tarjeta de ubicación con estadísticas dinámicas. Cuenta con un switch de idioma **sin recarga de página**, pantalla de bienvenida animada (efecto _text scramble_) y una sección de contacto.

### Stack

- **Astro 7** — generación de sitio estático (SSG)
- **Tailwind CSS 4** + CSS propio — estilos y animaciones
- **GSAP** + **ScrollTrigger** — animaciones y efecto "Ver más" en proyectos
- **GitHub REST API** — proyectos y estadísticas obtenidas en el build (con fallback estático si la API falla)
- **Netlify** — despliegue

### Elección de diseño: bento grid minimalista dark

El sitio se construye sobre una **cuadrícula bento**, inspirada en los layouts modulares de Apple: en lugar de una lista tradicional, cada card es un módulo visual independiente que cuenta su propia historia (perfil, terminal, ubicación, habilidades, proyectos, contacto). Esto da una **jerarquía visual clara**, hace el contenido **escaneable** de un vistazo y escala de forma natural en pantallas chicas.

Sobre eso, un **minimalismo dark** pensado para reducir el ruido visual, evitar la fatiga ocular y dar protagonismo absoluto al contenido:

- Fondo **#0d0d0d** y acento **#00ff66** (verde neón): el alto contraste del verde sobre el negro es lo primero que llama la atención y refuerza una identidad **técnica / dev / terminal**, coherente con elementos como el reloj ASCII, la terminal de estadísticas y el efecto de texto _scramble_.
- Paleta casi monocromática: todo es gris sobre negro y el verde se reserva para **momentos de foco** (SVG, stats, hover, acentos), no para saturar.
- **Tipografías**: Space Mono (etiquetas y datos técnicos), Teko (títulos, condensados y de gran impacto), Inter (cuerpo legible).
- Cada card con **border-radius de 24px** y un **efecto spotlight** que sigue al mouse, para que el minimalismo no se sienta plano.

En conjunto: una interfaz limpia, de alto contraste y con personalidad, donde el contenido es el protagonista.

### Características

- 🌍 **Bilingüe ES/EN** con cambio de idioma sin recarga (`history.pushState` + atributos `data-i18n`).
- 📊 **Estadísticas dinámicas** (proyectos y commits) desde la API de GitHub en el build.
- 🐶 Mascota ilustrada en CSS puro (Mía).
- 📄 CV descargable en `/assets/Santiago-Sanchez-CV.pdf`.
- 📱 Responsive.

### Estructura

```text
Portafolio/
├── public/
│   └── assets/          # imágenes, íconos, CV
├── src/
│   ├── components/
│   │   ├── effect/      # TextScramel
│   │   └── grids/       # cards del bento grid
│   ├── layouts/         # Layout.astro
│   ├── locales/         # traducciones ES/EN
│   ├── pages/
│   │   ├── index.astro          # pantalla de bienvenida (/)
│   │   └── [lang]/index.astro   # portafolio (/es, /en)
│   └── styles/          # global.css
└── package.json
```

### Comandos

| Comando                 | Acción                                          |
| :---------------------- | :---------------------------------------------- |
| `npm install`           | Instala dependencias                            |
| `npm run dev`           | Dev server en `localhost:4321`                  |
| `npm run build`         | Genera el sitio de producción en `./dist/`      |
| `npm run preview`       | Previsualiza el build localmente                |
| `astro check`           | Chequeo de tipos del proyecto                   |

### Despliegue

Automatizado con **Netlify** (build command: `npm run build`, publish directory: `dist`). Nota: si obtenés respuestas de rate-limit de la API de GitHub (60 req/h sin autenticar), podés definir la variable de entorno `GITHUB_TOKEN` en Netlify para aumentar el límite.

---

## 🇬🇧 English

### Description

> I created this portfolio as a small showcase of my work: a place where I bring together my profile, my experience and my projects in one spot, designed to demonstrate both what I can do and the design thinking behind every detail.

Web portfolio showcasing my profile, work experience, skills, projects (fetched at build time from the GitHub API) and a location card with dynamic stats. It features a **no-reload** language switch, an animated welcome screen (_text scramble_ effect) and a contact section.

### Stack

- **Astro 7** — static site generation (SSG)
- **Tailwind CSS 4** + custom CSS — styling and animations
- **GSAP** + **ScrollTrigger** — animations and the "Load more" project effect
- **GitHub REST API** — projects and stats fetched at build time (with static fallback if the API fails)
- **Netlify** — deployment

### Design choice: minimalist dark bento grid

The site is built on a **bento grid**, inspired by Apple's modular layouts: instead of a traditional list, every card is an independent visual module that tells its own story (profile, terminal, location, skills, projects, contact). This provides **clear visual hierarchy**, makes the content **scannable** at a glance and scales naturally on smaller screens.

On top of that, a **dark minimalist** approach designed to reduce visual noise, ease eye strain and give content absolute center stage:

- Background **#0d0d0d** and accent **#00ff66** (neon green): the high contrast of green over black is what catches the eye first and reinforces a **technical / dev / terminal** identity, consistent with elements like the ASCII clock, the stats terminal and the _scramble_ text effect.
- Almost monochrome palette: everything is gray-on-black, and green is reserved for **focus moments** (SVGs, stats, hover, accents) rather than saturation.
- **Typefaces**: Space Mono (labels and technical data), Teko (condensed, high-impact headings), Inter (readable body).
- Every card with a **24px border radius** and a **mouse-follow spotlight** effect so the minimalism never feels flat.

All together: a clean, high-contrast interface with personality, where content is the star.

### Features

- 🌍 **Bilingual ES/EN** with a no-reload language switch (`history.pushState` + `data-i18n` attributes).
- 📊 **Dynamic stats** (projects & commits) pulled from the GitHub API at build time.
- 🐶 Pet illustration in pure CSS (Mía).
- 📄 Downloadable CV at `/assets/Santiago-Sanchez-CV.pdf`.
- 📱 Responsive.

### Structure

```text
Portafolio/
├── public/
│   └── assets/          # images, icons, CV
├── src/
│   ├── components/
│   │   ├── effect/      # TextScramel
│   │   └── grids/       # bento grid cards
│   ├── layouts/         # Layout.astro
│   ├── locales/         # ES/EN translations
│   ├── pages/
│   │   ├── index.astro          # welcome screen (/)
│   │   └── [lang]/index.astro   # portfolio (/es, /en)
│   └── styles/          # global.css
└── package.json
```

### Commands

| Command                 | Action                                        |
| :---------------------- | :-------------------------------------------- |
| `npm install`           | Installs dependencies                         |
| `npm run dev`           | Dev server at `localhost:4321`                |
| `npm run build`         | Build production site to `./dist/`            |
| `npm run preview`       | Preview the build locally                     |
| `astro check`           | Type-check the project                        |

### Deployment

Automated with **Netlify** (build command: `npm run build`, publish directory: `dist`). Note: if you get GitHub API rate-limit responses (60 req/h unauthenticated), set the `GITHUB_TOKEN` environment variable in Netlify to raise the limit.