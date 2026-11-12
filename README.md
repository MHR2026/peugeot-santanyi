# Automòbils Vidal Santanyí — web

Web de **Automobils Vidal Santanyi SL**, taller especialista Peugeot-Citroën en Santanyí
(https://www.peugeot-santanyi.com), hecha con [Astro](https://astro.build) + Tailwind CSS.
Sustituye a la web antigua en PHP (está en el historial de git, commit «Importar la web del servidor»).
Es estática: sin base de datos, sin formularios y sin cookies.

## Uso

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web en dist/
```

## Dónde se edita el contenido

| Qué | Dónde |
| --- | --- |
| Datos del taller (dirección, teléfono, móvil y WhatsApp, email, horario, coordenadas) | `company` en `src/i18n/ui.ts` |
| Textos en ES / DE / EN y lista de servicios | `src/i18n/ui.ts` |
| Fotos de la galería | `gallery` en `src/i18n/ui.ts` (archivos en `public/images/`) |
| Aviso legal, privacidad y cookies | `src/content/legal.ts` |
| Redirecciones de las URLs antiguas y bloqueo de `/admin/` | `public/.htaccess` |

## Páginas

- `/es/`, `/de/`, `/en/` — portada con servicios, taller, vehículos de ocasión, horario y contacto.
- `/<idioma>/legal/` — aviso legal, privacidad y cookies.
- Las URLs antiguas (`index.php`, `serveis.php`, `ofertas.php`, `contacto.php`, `cookies.php`, `de/…`, `en/…`) redirigen a las nuevas.
- El mapa de Google solo se carga si el visitante pulsa «Ver el mapa», así la web no necesita aviso de cookies.

## Publicación

Subir el contenido de `dist/` a la raíz de la web en el hosting (incluido el archivo oculto `.htaccess`).
`.github/workflows/deploy.yml` lo hace solo por SFTP en cada cambio de `main` cuando se configuran los secretos
`SFTP_HOST`, `SFTP_USER`, `SFTP_PASSWORD` y `SFTP_PATH` (Settings → Secrets and variables → Actions).
