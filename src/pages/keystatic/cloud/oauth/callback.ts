import { all } from '@keystatic/astro/internal/keystatic-api.js';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return all(context.request);
}

export async function POST(context: APIContext) {
  return all(context.request);
}