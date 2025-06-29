import { e as createAstro, f as createComponent, m as maybeRenderHead, i as renderComponent, u as unescapeHTML, r as renderTemplate } from './astro_QE_WOLlr.mjs';
import 'kleur/colors';
import { $ as $$Image } from './pages/generic_CUkX2KsD.mjs';
import about from './about_BVM6akxm.mjs';

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { title, subtitle, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center flex-col text-sm font-medium relative w-full pb-40"> <div class="relative w-full h-[50em] overflow-hidden"> <div class="items-center bottom-0 justify-center left-0 absolute top-0 flex w-full h-full overflow-hidden rounded-3xl"> <div class="items-center bottom-0 flex-col justify-center left-0 absolute top-0 flex w-full"> ${renderComponent($$result, "Image", $$Image, { "src": about, "alt": "About", "class": "bottom-0 left-0 object-cover absolute top-0 align-middle inline-block w-full h-full max-w-full" })} </div> </div> </div> <div class="mt-16 font-semibold"> <div class="auto-cols-fr grid-cols-1 lg:grid-cols-[.6fr_1fr] grid-rows-[auto] grid gap-[1.88rem]"> <div class="col-span-1 row-span-1 text-[2.50rem] leading-none"> <div class="items-center flex"><div>${title}</div></div> </div> <div class="col-span-1 row-span-1 text-3xl"> <p class="mb-3">${unescapeHTML(subtitle)}</p> <p>${unescapeHTML(content)}</p> </div> </div> </div> </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/About.astro", void 0);

export { $$About as $ };
