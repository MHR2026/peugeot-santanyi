# Peugeot Santanyí — web

Web de **Automobils Vidal Santanyí SL**, servicio oficial Peugeot en Santanyí (http://www.peugeot-santanyi.com).

La carpeta `web/` es la web tal como estaba en el servidor: PHP sencillo, en castellano (raíz), alemán (`de/`) e inglés (`en/`).

| Qué | Dónde |
| --- | --- |
| Páginas | `index.php`, `serveis.php`, `ofertas.php` (vehículos de ocasión), `contacto.php`, `cookies.php` |
| Cabecera, lateral y pie | `top.html`, `side.html`, `pie.html` |
| Estilos | `estilos.css`, `css/` |
| Fotos | `images/`, `img/` |
| Panel para editar las ofertas | `admin/` (guarda en `events/events.xml`) |

## Contraseña del panel `admin/`

La contraseña (su hash md5) **no** está en el repositorio, que es público: en `web/admin/index.php`
la variable `$AdminPass` está vacía. En el servidor hay que poner el md5 de una contraseña segura.
