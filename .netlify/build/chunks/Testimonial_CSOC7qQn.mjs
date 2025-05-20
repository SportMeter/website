import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, k as renderSlot, r as renderTemplate, u as unescapeHTML } from './astro_QE_WOLlr.mjs';
import 'kleur/colors';
import { c as $$Icon, d as $$Link, a as $$Container } from './prerender_PuHaZ10s.mjs';
/* empty css                                                            */
/* empty css                                                            */
import { $ as $$Image } from './pages/generic_CUkX2KsD.mjs';

const promoVideo = "/_astro/promo.8ev6z6da.webm";

const $$Astro$3 = createAstro("https://veiligevereniging.nl");
const $$Blob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Blob;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-zxqwhg62> <canvas id="blob"${addAttribute(["touch:pointer-events-none", className], "class:list")} data-astro-cid-zxqwhg62></canvas> <video id="video-blob" autoplay loop muted controls data-astro-cid-zxqwhg62> <source${addAttribute(promoVideo, "src")} data-astro-cid-zxqwhg62>
Your browser does not support the video tag.
</video> <div id="blob-cursor-follower" class="follower" data-astro-cid-zxqwhg62> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play-circle", "size": 100, "data-astro-cid-zxqwhg62": true })} </div> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/Blob.astro", void 0);

const $$Astro$2 = createAstro("https://veiligevereniging.nl");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const defaultButtons = [
    {
      title: "Contattaci",
      href: "/contact",
      style: "button",
      icon: "iconamoon:arrow-top-right-1-thin"
    }
  ];
  const { title, subtitle, buttons = defaultButtons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="items-center text-sm font-medium justify-center pb-48 lg:px-20 pt-32 lg:pt-44 relative flex min-h-[100svh]" data-astro-cid-anhloy43> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <div class="items-center flex-col w-full m-auto" data-astro-cid-anhloy43> <div class="items-center auto-cols-fr grid-cols-1 lg:grid-cols-2 grid-rows-[auto] grid gap-[3.13rem]" data-astro-cid-anhloy43> <div class="items-start flex-col justify-start flex gap-2 row-start-1" data-astro-cid-anhloy43> <h1 data-hero-reveal class="text-4xl md:text-7xl leading-tight my-3 mx-0" data-astro-cid-anhloy43>${unescapeHTML(title)}</h1> <div class="lg:mt-20" data-astro-cid-anhloy43> <div data-astro-cid-anhloy43> <p data-hero-reveal class="text-3xl font-semibold mb-3" data-astro-cid-anhloy43>${unescapeHTML(subtitle)}</p> <div class="mt-10 text-white" data-astro-cid-anhloy43> ${buttons.map(
    ({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "data-hero-reveal": true, "href": href, "style": style, "icon": icon, "data-astro-cid-anhloy43": true }, { "default": ($$result3) => renderTemplate`${title2}` })}`
  )} </div> </div> </div> </div> <div class="justify-self-center col-span-1 row-span-1" data-astro-cid-anhloy43> ${renderComponent($$result2, "Blob", $$Blob, { "class": "xl:pl-32", "data-astro-cid-anhloy43": true })} </div> </div> </div> <div class="items-center bottom-[3.13rem] justify-center left-0 absolute right-0 z-10 flex max-w-[80%] overflow-hidden m-auto text-blue-700" data-astro-cid-anhloy43> <div class="items-center flex" data-astro-cid-anhloy43> <button id="scroll-down-button" class="scroll-down-button items-start justify-center underline flex w-5 h-7 max-w-full border-2 border-black border-solid rounded-xl m-auto" data-astro-cid-anhloy43><div class="bg-black cursor-pointer w-0.5 h-1 mt-1.5" data-astro-cid-anhloy43></div> </button> </div> </div> ` })} </div>  `;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://veiligevereniging.nl");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  const { title, services } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/pages/about/about.png": () => import('./about_BVM6akxm.mjs'),"/src/assets/pages/blog/cover.svg": () => import('./cover_C30YyqNq.mjs'),"/src/assets/pages/homepage/cactus.svg": () => import('./cactus_Le4fzXeO.mjs'),"/src/assets/pages/homepage/clean-teeth.svg": () => import('./clean-teeth_B0y307xk.mjs'),"/src/assets/pages/homepage/dental-check-up-schedule.svg": () => import('./dental-check-up-schedule_DQ7svSOt.mjs'),"/src/assets/pages/homepage/dental-filling.svg": () => import('./dental-filling_DvXL_H7D.mjs'),"/src/assets/pages/homepage/dental-implant.svg": () => import('./dental-implant_8tAlNpm_.mjs'),"/src/assets/pages/homepage/dental.svg": () => import('./dental_DL3Aob9c.mjs'),"/src/assets/pages/homepage/google-white.png": () => Promise.resolve().then(() => googleWhite$1),"/src/assets/pages/homepage/hitech.svg": () => import('./hitech_Dh3tFPbf.mjs'),"/src/assets/pages/homepage/marketing-service.png": () => import('./marketing-service_B2Uuf9R4.mjs'),"/src/assets/pages/homepage/orthodontics.svg": () => import('./orthodontics_DSeHp6Qz.mjs'),"/src/assets/pages/homepage/paidmedia-service.png": () => import('./paidmedia-service_DiGBfLz4.mjs'),"/src/assets/pages/homepage/plaque.svg": () => import('./plaque_d1r-QpwJ.mjs'),"/src/assets/pages/homepage/play.svg": () => import('./play_BPf1fqag.mjs'),"/src/assets/pages/homepage/rise.svg": () => import('./rise_CFP4GhYQ.mjs'),"/src/assets/pages/homepage/socialmedia-service.png": () => import('./socialmedia-service_BjVwH3mk.mjs'),"/src/assets/pages/homepage/teeth-whitening.svg": () => import('./teeth-whitening_pQjVUzaF.mjs'),"/src/assets/pages/homepage/terra.svg": () => import('./terra_pToZtJ8T.mjs'),"/src/assets/pages/homepage/vision.svg": () => import('./vision_BKFZMILn.mjs')

});
  return renderTemplate`${maybeRenderHead()}<div class="pt-36" id="services"> <p class="text-[2.13rem] leading-9 font-semibold lg:max-w-[64%] mb-3">${unescapeHTML(title)}</p> <div class="mt-16"> <div class="auto-cols-fr grid-cols-1 md:grid-cols-3 grid-rows-[auto] grid gap-10"> ${services.map(({ title: title2, description, icon }) => renderTemplate`<div class="items-stretch flex-col flex h-full max-w-[90%] m-auto col-span-1 row-span-1"> ${renderComponent($$result, "Image", $$Image, { "src": images[icon](), "alt": `Service ${title2}`, "class": "align-middle inline-block w-12 h-12 max-w-full" })} <div class="mt-16 text-[1.38rem] leading-7 font-semibold"> <h3 class="mb-3">${title2}</h3> </div> <div class="mt-3.5 text-lg"> <p class="mb-3">${description}</p> </div> </div>`)} </div> </div> </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/Services.astro", void 0);

const googleWhite = new Proxy({"src":"/_astro/google-white.Jo_8AMLF.png","width":2400,"height":2449,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/homepage/google-white.png";
							}
							
							return target[name];
						}
					});

const googleWhite$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: googleWhite
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { testimonial, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm font-medium pt-20 pb-14"> <div class="bg-black flex-grow py-20 px-16 rounded-3xl"> <div class="items-center flex-col justify-center text-center flex"> ${renderComponent($$result, "Image", $$Image, { "src": googleWhite, "alt": "Google logo", "class": "object-contain align-middle inline-block w-full h-10 max-w-[8.13rem] mb-8" })} <h2 class="text-white text-[2.13rem] leading-9 lg:max-w-[60%] mb-1">
"${testimonial}"
</h2> <div class="bg-white/[0.9] w-12 h-0 my-8 m-auto mx-auto"></div> <h3 class="text-white text-lg">${name}</h3> </div> </div> </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/Testimonial.astro", void 0);

export { $$Testimonial as $, $$Services as a, $$Hero as b };
