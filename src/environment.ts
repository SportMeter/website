import { z } from "astro/zod";

export const API_KEY_MAILCHANNELS = z.coerce
  .string()
  .parse(import.meta.env.API_KEY_MAILCHANNELS);
export const DKIM_PRIVATE_KEY = z.coerce
  .string()
  .parse(import.meta.env.DKIM_PRIVATE_KEY);
