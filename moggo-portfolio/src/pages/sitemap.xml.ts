import { withBase } from '../lib/urls';
import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'work/moggo-dev/'].map((path) => `<url><loc>${new URL(withBase(path), site).href}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
