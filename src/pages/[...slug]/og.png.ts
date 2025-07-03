import { getCollectionStaticPaths } from "@/lib/collection-helpers";
import ogImage from "../../assets/global/og-image.jpeg";
import type { APIRoute } from "astro";
import sharp from "sharp";

export const prerender = true;

export const GET: APIRoute<CollectionProps<"pages">> = async ({}) => {
  const buffer = await sharp(ogImage.src).toBuffer();

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
