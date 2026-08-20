# Portfolio Terminal Pro

App de seguimiento de portafolio (CEDEARs, acciones locales, cripto y liquidez) —
PWA instalable, 100% client-side, datos guardados en `localStorage` del navegador.

## Qué se hizo en este pase

- **Rediseño completo con Bootstrap 5** (CDN, sin build step): tipografía nueva
  (Space Grotesk para números + Plus Jakarta Sans para texto), tarjetas y modales
  con más aire, sombras y glassmorphism sutil, botones con tamaño táctil (44px)
  pensados para iPad, y las 4 paletas de tema originales (Obsidian, Emerald,
  Sunset, Slate) ahora también alimentan las variables de Bootstrap.
- **PWA lista para instalar**: `manifest.json` + `service-worker.js` + set
  completo de íconos. Se puede "Agregar a inicio" desde Safari en el iPad y
  abre en modo standalone (sin barra de Safari), con ícono propio.
- **Offline básico**: el service worker cachea el shell de la app, así abre
  aunque no haya internet (los precios en vivo sí necesitan conexión).
- **El motor de la app no se tocó**: toda la lógica de negocio (cálculo de
  tenencias, importador de Excel, base de CEDEARs, gráficos, export/import de
  JSON y CSV) es exactamente el mismo código que ya tenías, verificado línea
  por línea contra el original.

## Cómo deployar en GitHub Pages

1. Creá un repo nuevo en GitHub (puede ser privado o público).
2. Subí estos archivos a la raíz del repo (o a una carpeta, ej. `/docs`):
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - carpeta `icons/` completa
3. En el repo: **Settings → Pages → Source** → elegí la rama (`main`) y la
   carpeta (`/root` o `/docs` según dónde subiste los archivos) → **Save**.
4. GitHub te va a dar una URL tipo `https://tu-usuario.github.io/tu-repo/`.
   Puede tardar 1-2 minutos en estar disponible la primera vez.

> **Importante**: el `manifest.json` usa rutas relativas (`./icons/...`), así
> que funciona tanto si el sitio queda en la raíz del dominio como si queda en
> una subcarpeta (`usuario.github.io/repo/`), que es el caso típico de GitHub
> Pages.

## Cómo instalarla en el iPad

1. Abrí la URL de GitHub Pages en **Safari** (tiene que ser Safari, no Chrome,
   para que el ícono de "Agregar a inicio" funcione bien en iOS).
2. Tocá el ícono de compartir (el cuadrado con la flecha hacia arriba).
3. Elegí **"Agregar a la pantalla de inicio"**.
4. Confirmá el nombre ("Portfolio") y listo — te queda un ícono como una app
   nativa, que abre a pantalla completa sin la barra de Safari.

## Datos: localStorage + backup JSON

- Todo se guarda en el `localStorage` del navegador (por dispositivo). Si
  borrás datos de navegación de Safari, se pierde.
- Para tener respaldo o pasar datos entre dispositivos: **⚙ Configuración →
  💾 Respaldo JSON** para exportar, y **📥 Importar JSON** para restaurar.
- También hay export a CSV para abrir en Excel/Sheets.

## Notas técnicas

- Sin build step: es un único `index.html` + `manifest.json` +
  `service-worker.js` + `icons/`. Se puede editar directamente.
- Vendor libraries vía CDN: Chart.js, SheetJS (xlsx), Bootstrap 5.3.
- Si en algún momento cambiás mucho el HTML, acordate de subir el
  `CACHE_VERSION` en `service-worker.js` (ej. `portfolio-v2`) para que el
  Service Worker no sirva una versión vieja cacheada.