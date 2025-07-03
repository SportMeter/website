import { getCollectionStaticPaths } from "@/lib/collection-helpers";
import type { APIRoute } from "astro";
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const prerender = true;

export const GET: APIRoute<CollectionProps<"pages">> = async ({}) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Use the original source file path
  const imagePath = join(__dirname, "../../assets/global/og-image.jpeg");
  const imageBuffer = readFileSync(imagePath);

  const buffer = await sharp(imageBuffer).toBuffer();

  const response = buffer;
  return new Response(response, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export async function getStaticPaths() {
  return await getCollectionStaticPaths("pages");
}
