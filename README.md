## Notarios — Documentación del proyecto

Este proyecto es una SPA (Single Page Application) en React, construida con Vite y desplegable en Vercel. Su objetivo es mostrar la información de notarios del Estado de México, consumiendo un archivo de datos local (JSON) y enrutando por ID en la URL.

### Stack y dependencias
- React 19 + React DOM
- React Router DOM 7 (enrutado por segmento `/:id` con `basename`)
- styled-components 6 (estilos encapsulados y animaciones)
- Vite 7 (desarrollo y build)
- ESLint 9 (config básica)

### Scripts
- `npm run dev` — servidor de desarrollo en Vite
- `npm run build` — build de producción
- `npm run preview` — previsualización local del build
- `npm run lint` — linting del proyecto

### Enrutamiento y basepath
- El Router se inicializa con `basename="/notarios"` (ver `src/App.jsx`).
- La configuración de Vite define `base: '/notarios/'` (ver `vite.config.js`).
- Esto permite servir la app desde la ruta `/notarios` (por ejemplo en un dominio raíz o un subpath), manteniendo URLs como `/notarios/1`.
- Vercel está configurado con `rewrites` para redirigir todo a `index.html` (SPA) en `vercel.json`.
- Para Apache, existe un `htaccess` simple que reescribe a `index.html`.

### Flujo de la aplicación
1. La página muestra un Splash inicial (logo) durante ~3s (`src/assets/components/Splash.jsx`).
2. El enrutado principal vive en `src/App.jsx`:
   - Ruta `/:id` renderiza la vista del notario correspondiente.
   - Ruta `/` muestra un mensaje con una indicación de ejemplo (`/1`).
3. `AppContent` usa `useParams` para obtener el `id`, lo busca en `src/data/datos.json` y, si existe, muestra:
   - Título con el número de notaría
   - Tarjeta (`Card`) con nombre, cargo y ubicación
   - Botones a tarjeta de contacto, ubicación (Maps) y nombramiento
   - Logos en el pie
4. Si no encuentra el `id`, muestra “Notaría no encontrada”.

### Datos
- Fuente: `src/data/datos.json` — arreglo de objetos con campos:
  - `id` (número)
  - `nombre` (string)
  - `cargo` (string)
  - `ubicación` (string, con acento en la clave tal cual: `ubicación`)
  - `tarjeta` (URL)
  - `maps` (URL, puede ser cadena vacía en algunos registros)
  - `nombramiento` (URL)

Importante: en el código se accede a `notaria.ubicación` con acento. Si se desea estandarizar, habría que refactorizar la clave en el JSON y en el código; actualmente funciona tal cual.

### Componentes principales (src/assets/components)
- `Splash` — Pantalla de presentación con animaciones de entrada/salida.
- `Container` — Contenedor con layout central y un efecto de audio on-click (reproduce `/notarios/audio.mp3` la primera vez que se hace click en su área).
- `Title` — Título estilizado con animación.
- `Card` — Tarjeta con nombre, cargo y ubicación.
- `Button` — Botón estilizado como `<a>` con animaciones; usado para abrir enlaces externos.
- `LogosInferiores` — Muestra dos imágenes (ruta relativa `./logo1.png` y `./splash.png`).

### Assets y estáticos
- `index.html` incluye un video de fondo fijado (poster `/notarios/fondo.png` y fuente `/notarios/fondo.webm`).
- El favicon usa `/splash.png`.
- Las rutas de assets asumen que la app vive bajo `/notarios/` (consistente con `base` y `basename`).

### Estilos globales
- `src/App.css` define estilos básicos para el `#root` y algunos keyframes y utilidades de ejemplo.
- La mayoría de los estilos se aplican con styled-components con animaciones simples (`keyframes`).

### Desarrollo local
1. Node 18+ recomendado.
2. Instala dependencias: `npm install`.
3. Inicia el servidor: `npm run dev`.
4. Abre la app en el puerto indicado por Vite (por defecto suele ser `http://localhost:5173/notarios/`).
5. Prueba rutas como `/notarios/1`.

### Build y despliegue
- Genera el build: `npm run build` (crea la carpeta `dist/`).
- Previsualiza: `npm run preview`.
- Para Vercel: el `rewrite` garantiza que rutas como `/notarios/123` resuelvan a `index.html` para SPA.

### Casos especiales y consideraciones
- Si `maps` es una cadena vacía en el JSON, el botón de Ubicación igualmente se renderiza; puede considerarse condicionar su renderizado para evitar enlaces vacíos.
- Si el `id` no existe en `datos.json`, se muestra “Notaría no encontrada”.
- El audio en `Container` se reproduce solo la primera vez que se hace click (controlado con refs); verifica que el archivo exista en `/public/notarios/audio.mp3` o en el path esperado según el hosting.
- Los recursos referenciados (e.g., `fondo.webm`, `fondo.png`, `logo1.png`, `splash.png`) deben estar disponibles en las rutas esperadas. Si se mueven a `public/`, ajustar rutas en consecuencia.

### Próximas mejoras sugeridas (opcionales)
- Validar enlaces y ocultar botones cuando no haya URL válida.
- Añadir una ruta 404 dedicada y un selector/buscador de notaría en `/`.
- Accesibilidad: roles/labels en botones y navegación por teclado.
- SEO básico (metadatos por ruta, títulos dinámicos y Open Graph si aplica).
- PWA (manifest, service worker) si se desea uso offline/borde.

---

Con esta guía rápida queda documentada la arquitectura y funcionamiento actual. Si quieres, puedo proponer un plan de tareas priorizadas (por ejemplo, condicionar botones sin URL, estandarizar la clave `ubicación`, mejorar la página de inicio y agregar pruebas básicas).
