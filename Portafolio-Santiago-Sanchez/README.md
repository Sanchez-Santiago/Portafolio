# Portafolio Sánchez-Santiago 🚀

Portafolio personal construido con **Astro**, **GSAP** y **Bun**. Presenta un diseño de cuadrícula tipo "Bento Box" moderno y premium con efectos de glassmorphism interactivos y animaciones de alto rendimiento.

## ✨ Características Principales

- **Diseño Bento Grid**: Sistema de cuadrícula dinámico y responsivo para mostrar proyectos, habilidades y experiencia.
- **Scroll de Lujo**: Desplazamiento ultra suave utilizando **Lenis** para una navegación fluida y profesional.
- **Cursor Personalizado**: Un cursor interactivo que reacciona a los elementos de la interfaz, mejorando la inmersión.
- **Efectos de Iluminación**: Spotlight Border Glow en las tarjetas Bento que siguen el cursor del ratón.
- **Animaciones GSAP**: Animaciones de entrada e interacción fluidas y de alto rendimiento utilizando GSAP y ScrollTrigger.
- **Diseño Glassmorphism**: Estética de interfaz moderna mediante filtros de desenfoque de fondo, bordes sutiles y texturas de ruido.
- **Bilingüe (i18n)**: Soporte completo para inglés y español con un selector de idioma personalizado.
- **Astro & Bun**: Aprovechando la velocidad de Astro y la eficiencia del entorno de ejecución Bun.

## 🛠️ Estructura del Proyecto

```text
/
├── public/          # Archivos estáticos (imágenes, iconos, fuentes)
├── src/
│   ├── components/  # Partes reutilizables de la interfaz y unidades Bento
│   ├── layouts/     # Envoltorios globales de página
│   ├── locales/     # Archivos de traducción i18n
│   └── pages/       # Rutas del proyecto ([lang]/index.astro)
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias                         |
| `bun dev`                 | Inicia el servidor de desarrollo local           |
| `bun build`               | Construye el sitio para producción               |
| `bun preview`             | Previsualiza la construcción de producción       |
| `bun astro check`         | Ejecuta comprobaciones de diagnóstico            |

## 🎨 Tecnologías

- **Framework**: [Astro](https://astro.build/)
- **Animación**: [GSAP](https://gsap.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Estilos**: Vanilla CSS / SCSS
- **Iconos**: SVG personalizados y conjuntos de iconos especializados

---
*Creado por Santiago Sánchez*
