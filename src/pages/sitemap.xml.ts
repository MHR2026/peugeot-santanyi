import { languages } from '../i18n/ui';

const site = 'http://www.peugeot-santanyi.com';

export function GET() {
  const urls = Object.keys(languages).flatMap((l) => [`${site}/${l}/`, `${site}/${l}/legal/`]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
