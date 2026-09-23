import type { APIRoute } from 'astro';
import { withBase } from '../lib/urls';
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('sitemap.xml'), site).href}\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );
