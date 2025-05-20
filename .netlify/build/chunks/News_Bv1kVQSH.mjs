import { e as createAstro, f as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from './astro_QE_WOLlr.mjs';
import 'kleur/colors';
import { g as getCollection } from './prerender_PuHaZ10s.mjs';
import { $ as $$BlogPreview } from './BlogPreview_BzhKFTGA.mjs';

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$News;
  const currentLocale = Astro2.currentLocale;
  const posts = await getCollection("posts");
  const allPosts = posts.map((post) => {
    const [lang, ...slug] = post.slug.split("/");
    return {
      ...post,
      lang,
      slug: post.slug.startsWith("/") ? post.slug : `/${post.slug}`
    };
  }).filter((post) => post.lang === currentLocale && !post.data.hidden).sort(
    (a, b) => a.data.lastUpdateDate.getTime() - b.data.lastUpdateDate.getTime()
  );
  return renderTemplate`${maybeRenderHead()}<div class="gap-x-[1.88rem] text-sm font-medium auto-cols-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[auto] gap-y-10 grid pb-40"> ${allPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPreview", $$BlogPreview, { "post": post })}`)} </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/News.astro", void 0);

export { $$News as $ };
