import { getCollectionStaticPaths } from "@/lib/collection-helpers";
import type { APIRoute } from "astro";
import sharp from "sharp";

export const prerender = true;

export const GET: APIRoute<CollectionProps<"pages">> = async ({}) => {
  // Use the original source file path
  const buffer = await sharp("./public/og-image.jpeg").toBuffer();

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
