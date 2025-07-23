import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro_ZLGY7KtM.mjs';
import 'kleur/colors';
import 'clsx';
import { l as loadVideo } from './prerender_1IqFCGTC.mjs';

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Video;
  const { src, class: className } = Astro2.props;
  const videoSrc = await loadVideo(src);
  return renderTemplate`${videoSrc && renderTemplate`${maybeRenderHead()}<video${addAttribute([className, "w-full rounded-lg"], "class:list")}${addAttribute(videoSrc, "src")} autoplay loop muted playsinline controls></video>`}`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/primitives/Video.astro", void 0);

export { $$Video as $ };
