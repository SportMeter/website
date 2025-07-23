import { e as createAstro, f as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro_ZLGY7KtM.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center flex-col text-sm font-medium relative w-full pb-40"> <div class="items-center bottom-0 justify-center left-0 absolute top-0 flex w-full h-full overflow-hidden rounded-3xl"></div> <div class="font-semibold"> <div class="auto-cols-fr grid-cols-1 lg:grid-cols-[.6fr_1fr] grid-rows-[auto] grid gap-[1.88rem]"> <div class="col-span-1 row-span-1 text-[2.50rem] leading-none"> <div class="items-center flex"><div>Privacy Statment</div></div> </div> <div class="col-span-1 row-span-1 text-3xl"> <p>${unescapeHTML(content)}</p> </div> </div> </div> </div>`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/Privacy.astro", void 0);

export { $$Privacy as $ };
