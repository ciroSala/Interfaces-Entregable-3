# Análisis del Código y Justificación de Decisiones

## Estructura Semántica

El HTML utiliza elementos semánticos como `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>` y `<footer>`, lo cual mejora la accesibilidad y el SEO.

## Formulario

El formulario (`<form>`) está estructurado con `div` para agrupar las etiquetas (`<label>`) y los campos de entrada (`<input>`, `<textarea>`). Esto facilita la manipulación con CSS y JavaScript.

## Imágenes

Se utiliza un logo de Globant (`<img>`) en el encabezado y el pie de página, lo cual refuerza la identidad de la marca. Además, se emplea un elemento `<picture>` con `<source>` para ofrecer diferentes versiones de la imagen en el `<aside>` según el tamaño de la pantalla, mejorando la experiencia del usuario en dispositivos móviles.

## Menú de Navegación

El menú de navegación (`<nav>`) se oculta en dispositivos móviles y se muestra en pantallas más grandes, lo cual es una práctica común en el diseño web responsive.

## Enlaces

Los enlaces en el `footer`, tales como "Política de Privacidad" y "Términos de Servicio", son importantes para cumplir con los aspectos legales del sitio.

---

## CSS

### Diseño Responsivo

El CSS utiliza media queries (`@media (min-width: 768px)`) para adaptar el diseño a diferentes tamaños de pantalla.  
- En dispositivos móviles, el formulario se muestra en una sola columna.  
- En pantallas más grandes, se divide en dos columnas.

### Colores

- Se define una **paleta de colores personalizada** utilizando variables CSS (`:root`), lo cual facilita futuras modificaciones.
- Los colores elegidos (verde, turquesa, celeste, azul) están inspirados en la **identidad visual de Globant**, ayudando a mantener la coherencia de la marca.
- El **degradado de verde a celeste** (`--color-verde-celeste`) se utiliza en la barra inferior del encabezado, agregando dinamismo al diseño.

### Tipografía

- Se utilizan las fuentes **Roboto** y **Montserrat**, que son legibles y modernas.
- **Montserrat** se aplica a títulos y botones, mientras que **Roboto** se usa para el cuerpo del texto.
- El uso de diferentes pesos y estilos (negrita, itálica) ayuda a crear una **jerarquía visual clara**.

### Diseño del Formulario

- El formulario tiene un diseño claro y organizado, con etiquetas descriptivas y campos bien espaciados.
- Se utiliza `grid-template-areas` para organizar los elementos del formulario, ofreciendo mayor control sobre el diseño en distintos tamaños de pantalla.

### Estilos de los Botones

- Los botones tienen un estilo moderno:
  - Color de fondo verde.
  - Bordes redondeados.
  - Efecto *hover* que cambia el color y escala ligeramente el botón.

### Pie de Página

- Diseño simple y claro.
- Incluye el logo de Globant y enlaces a páginas legales.

### Colores (Resumen)

Transmiten **modernidad, innovación y dinamismo**, en línea con la imagen de una empresa de desarrollo de software como Globant.

### Tipografía (Resumen)

Las fuentes **Roboto** y **Montserrat** fueron elegidas por su legibilidad y profesionalismo, ideal para un sitio web corporativo:
- **Montserrat**: Encabezados y etiquetas importantes.
- **Roboto**: Cuerpo del texto.

---

## JavaScript

### Testing

El script ayuda a realizar las **verificaciones de cada campo input**, asegurando que el usuario pueda enviar el formulario solo con datos válidos.
