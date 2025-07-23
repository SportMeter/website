import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, k as renderSlot, r as renderTemplate, u as unescapeHTML } from './astro_ZLGY7KtM.mjs';
import 'kleur/colors';
import { c as $$Icon, b as $$Link, a as $$Container, g as getCollection, u as unlocalizedUrl, t as translatePath, d as defaultLocale } from './prerender_1IqFCGTC.mjs';
/* empty css                                                            */
/* empty css                                                            */
import { $ as $$WorkPreview } from './WorkPreview_DAiZH-65.mjs';
import { $ as $$Image } from './pages/generic_Bp_eB5_D.mjs';
/* empty css                                                                   */
import { $ as $$Contact } from './Contact_DTfIQim1.mjs';

const promoVideo = "/_astro/promo.RDYaV3Y_.webm";

const $$Astro$6 = createAstro("https://veiligevereniging.nl");
const $$Blob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Blob;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-zxqwhg62> <canvas id="blob"${addAttribute(["touch:pointer-events-none", className], "class:list")} data-astro-cid-zxqwhg62></canvas> <video id="video-blob" autoplay loop muted controls data-astro-cid-zxqwhg62> <source${addAttribute(promoVideo, "src")} data-astro-cid-zxqwhg62>
Your browser does not support the video tag.
</video> <div id="blob-cursor-follower" class="follower" data-astro-cid-zxqwhg62> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play-circle", "size": 100, "data-astro-cid-zxqwhg62": true })} </div> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/Blob.astro", void 0);

const $$Astro$5 = createAstro("https://veiligevereniging.nl");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const defaultButtons = [
    {
      title: "Contact",
      href: "#contact",
      style: "button",
      icon: "iconamoon:arrow-top-right-1-thin"
    }
  ];
  const { title, subtitle, buttons = defaultButtons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="items-center text-sm font-medium justify-center pb-48 lg:px-20 pt-32 lg:pt-44 relative flex min-h-[100svh]" data-astro-cid-anhloy43> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <div class="items-center flex-col w-full m-auto" data-astro-cid-anhloy43> <div class="items-center auto-cols-fr grid-cols-1 lg:grid-cols-2 grid-rows-[auto] grid gap-[3.13rem]" data-astro-cid-anhloy43> <div class="items-start flex-col justify-start flex gap-2 row-start-1" data-astro-cid-anhloy43> <h1 data-hero-reveal class="text-3xl md:text-6xl leading-tight my-3 mx-0" data-astro-cid-anhloy43>${unescapeHTML(title)}</h1> <div class="lg:mt-20" data-astro-cid-anhloy43> <div data-astro-cid-anhloy43> <p data-hero-reveal class=" text-lg lg:text-2xl font-regular mb-3" data-astro-cid-anhloy43>${unescapeHTML(subtitle)}</p> <div class="mt-10 text-white" data-astro-cid-anhloy43> ${buttons.map(
    ({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "id": "contact-landing-button", "data-hero-reveal": true, "href": "#", "style": style, "icon": icon, "data-astro-cid-anhloy43": true }, { "default": ($$result3) => renderTemplate`${title2}` })}`
  )} </div> </div> </div> </div> <div class="justify-self-center col-span-1 row-span-1" data-astro-cid-anhloy43> ${renderComponent($$result2, "Blob", $$Blob, { "class": "xl:pl-32", "data-astro-cid-anhloy43": true })} </div> </div> </div> <div class="items-center bottom-[3.13rem] justify-center left-0 absolute right-0 z-10 flex max-w-[80%] overflow-hidden m-auto text-blue-700" data-astro-cid-anhloy43> <div class="items-center flex" data-astro-cid-anhloy43> <button id="scroll-down-button" class="scroll-down-button items-start justify-center underline flex w-5 h-7 max-w-full border-2 border-black border-solid rounded-xl m-auto" data-astro-cid-anhloy43><div class="bg-black cursor-pointer w-0.5 h-1 mt-1.5" data-astro-cid-anhloy43></div> </button> </div> </div> ` })} </div>  `;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://veiligevereniging.nl");
const $$RecentWork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RecentWork;
  const currentLocale = Astro2.currentLocale;
  const works = await getCollection("works");
  const recentWorks = works.map((work) => {
    const [lang, ...slug] = work.slug.split("/");
    return {
      ...work,
      lang,
      slug: work.slug.startsWith("/") ? work.slug : `/${work.slug}`
    };
  }).filter((page) => page.lang === currentLocale).sort(
    (a, b) => a.data.lastUpdateDate.getTime() - b.data.lastUpdateDate.getTime()
  ).slice(0, 4);
  const { sectionTitle, introSection } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center text-sm font-medium justify-center flex pt-20 pb-8"> <div class="bg-gray-100 rounded-2xl px-4 py-2"> <h2 class="text-lg leading-none font-semibold my-1">${sectionTitle}</h2> </div> </div> <div class="flex justify-center items-center"> <p class="text-2xl leading-9 font-semibold mb-3">${unescapeHTML(introSection)}</p> </div> <div class="text-sm font-medium auto-cols-fr grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] grid gap-[3.13rem]"> ${recentWorks.map((work) => renderTemplate`${renderComponent($$result, "WorkPreview", $$WorkPreview, { "work": work })}`)} </div>`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/RecentWork.astro", void 0);

const $$Astro$3 = createAstro("https://veiligevereniging.nl");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const { sectionTitle, introSection, services } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/pages/about/about.png": () => import('./about_CJLWWTow.mjs'),"/src/assets/pages/about/about1.png": () => import('./about1_BN8x5FBa.mjs'),"/src/assets/pages/blog/cover.svg": () => import('./cover_CnBinaed.mjs'),"/src/assets/pages/homepage/cactus.svg": () => import('./cactus_-HvLc46b.mjs'),"/src/assets/pages/homepage/clean-teeth.svg": () => import('./clean-teeth_9P2ratEw.mjs'),"/src/assets/pages/homepage/dental-check-up-schedule.svg": () => import('./dental-check-up-schedule_DxP4VO5C.mjs'),"/src/assets/pages/homepage/dental-filling.svg": () => import('./dental-filling_BjJ28pTL.mjs'),"/src/assets/pages/homepage/dental-implant.svg": () => import('./dental-implant_BqtvSApb.mjs'),"/src/assets/pages/homepage/dental.svg": () => import('./dental_D3_peBAx.mjs'),"/src/assets/pages/homepage/google-white.png": () => import('./google-white_BZFX4vL0.mjs'),"/src/assets/pages/homepage/hitech.svg": () => import('./hitech_BZR6iwl-.mjs'),"/src/assets/pages/homepage/icon-number-1.png": () => import('./icon-number-1_CDqAv5lq.mjs'),"/src/assets/pages/homepage/icon-number-2.png": () => import('./icon-number-2_BN6ERn2I.mjs'),"/src/assets/pages/homepage/icon-number-3.png": () => import('./icon-number-3_DQbUS5ye.mjs'),"/src/assets/pages/homepage/marketing-service.png": () => import('./marketing-service_D1Dqm5ut.mjs'),"/src/assets/pages/homepage/orthodontics.svg": () => import('./orthodontics_Dwt8k0bK.mjs'),"/src/assets/pages/homepage/paidmedia-service.png": () => import('./paidmedia-service_BZmmdgiQ.mjs'),"/src/assets/pages/homepage/plaque.svg": () => import('./plaque_D8hASdBO.mjs'),"/src/assets/pages/homepage/play.svg": () => import('./play_CLLnBVwZ.mjs'),"/src/assets/pages/homepage/rise.svg": () => import('./rise_cpaBAunq.mjs'),"/src/assets/pages/homepage/socialmedia-service.png": () => import('./socialmedia-service_UuTPN4O-.mjs'),"/src/assets/pages/homepage/teeth-whitening.svg": () => import('./teeth-whitening__877AJLW.mjs'),"/src/assets/pages/homepage/terra.svg": () => import('./terra_aZo0hAVW.mjs'),"/src/assets/pages/homepage/vision.svg": () => import('./vision_Bxr0OVsT.mjs')

});
  console.log(sectionTitle, introSection);
  return renderTemplate`${maybeRenderHead()}<div class="items-center text-sm font-medium justify-center flex pt-16"> <div class="bg-gray-100 rounded-2xl px-4 py-2"> <h2 class="text-lg leading-none font-semibold my-1">${sectionTitle}</h2> </div> </div> <div class="pt-8" id="services"> <div class="flex justify-center items-center"> <p class="text-2xl leading-9 font-semibold mb-3">${unescapeHTML(introSection)}</p> </div> <div class="mt-16"> <div class="auto-cols-fr grid-cols-1 md:grid-cols-3 grid-rows-[auto] grid gap-10"> ${services.map(({ title, description, icon }) => renderTemplate`<div class="items-stretch flex-col flex h-full max-w-[90%] m-auto col-span-1 row-span-1"> ${renderComponent($$result, "Image", $$Image, { "src": images[icon](), "alt": `Service ${title}`, "class": "align-middle inline-block w-12 h-12 max-w-full" })} <div class="mt-16 text-[1.38rem] leading-7 font-semibold"> <h3 class="mb-3">${title}</h3> </div> <div class="mt-3.5 text-lg"> <p class="mb-3">${description}</p> </div> </div>`)} </div> </div> </div>`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/Services.astro", void 0);

const $$Astro$2 = createAstro("https://veiligevereniging.nl");
const $$BlogPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPreview;
  const currentLocale = Astro2.currentLocale;
  const { post } = Astro2.props;
  const unlocalizedPath = unlocalizedUrl(post.slug);
  const localizedPath = translatePath(
    currentLocale ?? defaultLocale,
    `/post${unlocalizedPath}`
  );
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-65veb55m> ${renderComponent($$result, "Link", $$Link, { "href": localizedPath, "localized": false, "class": "blog-item text-blue-700 relative object-cover underline inline-block w-full max-w-full rounded-2xl group", "data-astro-cid-65veb55m": true }, { "default": ($$result2) => renderTemplate` <div class="play-button text-white items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-10 flex max-w-full opacity-0 group-hover:opacity-100 transition-all duration-300" data-astro-cid-65veb55m> <div class="text-black bg-white/[0.75] items-center backdrop-blur-[5px] cursor-pointer justify-center flex w-full h-full rounded-full" data-astro-cid-65veb55m> ${renderComponent($$result2, "Icon", $$Icon, { "name": "iconamoon:arrow-top-right-1-thin", "class": "align-middle inline-block w-12 h-12 max-w-full", "data-astro-cid-65veb55m": true })} </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.cover, "alt": post.data.title, "class": "cursor-pointer align-middle inline-block w-full max-w-full rounded-2xl object-cover h-64", "data-astro-cid-65veb55m": true })} ` })} <div class="items-start flex-col pt-8 flex" data-astro-cid-65veb55m> <span class="font-semibold pb-1.5 px-6 pt-2 uppercase inline-block border-2 border-black border-solid rounded-3xl" data-astro-cid-65veb55m> ${post.data.category} </span> <a${addAttribute(localizedPath, "href")} class="text-3xl font-semibold mt-5 mb-3" data-astro-cid-65veb55m> ${post.data.title} </a> <div class="mt-5 text-lg" data-astro-cid-65veb55m> <p class="mb-3" data-astro-cid-65veb55m> ${post.data.pubDate.toLocaleDateString("en-US", {
    month: "long",
    // full month name
    day: "numeric",
    // numeric day
    year: "numeric"
    // numeric year
  })} </p> </div> </div> </div> `;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/BlogPreview.astro", void 0);

const bluemarlinsLogo = new Proxy({"src":"/_astro/bluemarlins-logo.wdrT6HnN.png","width":1124,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/bluemarlins-logo.png";
							}
							
							return target[name];
						}
					});

const herculesLogo = new Proxy({"src":"/_astro/hercules-logo.DIUz0v3D.png","width":547,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/hercules-logo.png";
							}
							
							return target[name];
						}
					});

const hrcLogo = new Proxy({"src":"/_astro/hrc-logo.CNK4c6G5.png","width":284,"height":285,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/hrc-logo.png";
							}
							
							return target[name];
						}
					});

const pinokeLogo = new Proxy({"src":"/_astro/pinoke-logo.Cra7AYAY.png","width":872,"height":854,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/pinoke-logo.png";
							}
							
							return target[name];
						}
					});

const skadiLogo = new Proxy({"src":"/_astro/skadi-logo.DgGzzAKG.png","width":305,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/skadi-logo.png";
							}
							
							return target[name];
						}
					});

const sslLogo = new Proxy({"src":"/_astro/ssl-logo.BX-R0xZb.png","width":448,"height":86,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/associations-logo/ssl-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://veiligevereniging.nl");
const $$BlogLatest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLatest;
  const logos = [
    bluemarlinsLogo,
    herculesLogo,
    hrcLogo,
    pinokeLogo,
    skadiLogo,
    sslLogo
  ];
  const currentLocale = Astro2.currentLocale;
  const posts = await getCollection("posts");
  const recentPosts = posts.map((post) => {
    const [lang, ...slug] = post.slug.split("/");
    return {
      ...post,
      lang,
      slug: post.slug.startsWith("/") ? post.slug : `/${post.slug}`
    };
  }).filter((post) => post.lang === currentLocale).sort(
    (a, b) => a.data.lastUpdateDate.getTime() - b.data.lastUpdateDate.getTime()
  ).slice(0, 4);
  const { sectionTitle, introSection } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm font-medium pt-20 pb-32"> <div class="items-center text-sm font-medium justify-center flex pt-20 pb-8"> <div class="bg-gray-100 rounded-2xl px-4 py-2"> <h2 class="text-lg leading-none font-semibold my-1">${sectionTitle}</h2> </div> </div> <div class="mt-3.5 text-lg"> <div class="flex justify-center items-center"> <p class="text-2xl leading-9 font-semibold mb-3">${unescapeHTML(introSection)}</p> </div> </div> <!-- Carousel will be rendered here --> <div id="carousel-container" class="relative w-full overflow-hidden mt-16"> <div id="carousel-track" class="flex items-center gap-9 py-4"> <!-- These are placeholder items. You can replace them with your dynamic data. --> ${logos.map((logo) => renderTemplate`<div class="w-40 h-40 bg-white-300 mx-4 flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo", "class": "w-full h-full object-contain" })} </div>`)} </div> </div> <div class="mt-16"> <div class="gap-x-[1.88rem] auto-cols-fr grid-cols-1 lg:grid-cols-2 grid-rows-[auto] gap-y-10 grid"> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPreview", $$BlogPreview, { "post": post })}`)} </div> </div> </div> `;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/BlogLatest.astro", void 0);

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$ContactLanding = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactLanding;
  const { sectionTitle, introSection, fields, message, privacyStatement } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center text-sm font-medium justify-center flex"> <div class="bg-gray-100 rounded-2xl px-4 py-2"> <h2 class="text-lg leading-none font-semibold my-1">${sectionTitle}</h2> </div> </div> <div id="ContactLanding" class="justify-center flex flex-col m-4"> <div class="items-center text-sm font-medium justify-center flex pt-20"> <h2 class="text-[3.13rem] leading-none font-semibold my-1">${introSection}</h2> </div> ${renderComponent($$result, "Contact", $$Contact, { "message": message, "privacyStatement": privacyStatement, "fields": fields })} </div>`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/ContactLanding.astro", void 0);

export { $$ContactLanding as $, $$BlogLatest as a, $$Services as b, $$RecentWork as c, $$Hero as d };
