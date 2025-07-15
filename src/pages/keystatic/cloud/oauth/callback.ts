import { handleRequest } from '@keystatic/astro/internal/keystatic-api.js';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // The handleRequest function from keystatic-api.js expects the request
  // to be relative to its base path, which is /api/keystatic.
  // So, we need to rewrite the URL path for the internal handler.
  const originalUrl = new URL(context.request.url);
  const newPathname = `/api/keystatic/cloud/oauth/callback`; // This is the path keystatic-api.js expects
  const newUrl = new URL(newPathname, originalUrl.origin);
  newUrl.search = originalUrl.search; // Preserve query parameters

  const newRequest = new Request(newUrl.toString(), {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });

  return handleRequest(newRequest);
}