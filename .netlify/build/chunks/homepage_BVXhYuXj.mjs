import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_Cb_nbFUI.mjs';
import { $ as $$Testimonial, a as $$Services, b as $$Hero } from './Testimonial_CSOC7qQn.mjs';
import { g as getCollection, d as $$Link, $ as $$Title, a as $$Container } from './prerender_PuHaZ10s.mjs';
import { e as createAstro, f as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from './astro_QE_WOLlr.mjs';
import 'kleur/colors';
import { $ as $$WorkPreview } from './WorkPreview_a6DkbpiG.mjs';
import { $ as $$BlogPreview } from './BlogPreview_BzhKFTGA.mjs';

const $$Astro$1 = createAstro("https://veiligevereniging.nl");
const $$RecentWork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  const { title, buttons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center text-sm font-medium justify-center flex pt-20 pb-16"> <h2 class="text-[3.13rem] leading-none font-semibold my-1">${title}</h2> </div> <div class="text-sm font-medium auto-cols-fr grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] grid gap-[3.13rem]"> ${recentWorks.map((work) => renderTemplate`${renderComponent($$result, "WorkPreview", $$WorkPreview, { "work": work })}`)} </div> <div class="items-center flex-col text-sm font-medium flex text-white pt-16 pb-20"> ${buttons.map(({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": href, "style": style, "icon": icon }, { "default": async ($$result2) => renderTemplate`${title2}` })}`)} </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/RecentWork.astro", void 0);

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$BlogLatest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatest;
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
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm font-medium pt-20 pb-32"> <div class="items-center justify-center flex text-[3.13rem] leading-none font-semibold"> <h2 class="my-1">${title}</h2> </div> <div class="mt-16"> <div class="gap-x-[1.88rem] auto-cols-fr grid-cols-1 lg:grid-cols-3 grid-rows-[auto] gap-y-10 grid"> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPreview", $$BlogPreview, { "post": post })}`)} </div> </div> </div>`;
}, "/Users/mauro/Dev/Ezzie/Website/src/components/sections/BlogLatest.astro", void 0);

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Hero": $$Hero,
"Container": $$Container,
"Services": $$Services,
"RecentWork": $$RecentWork,
"Testimonial": $$Testimonial,
"BlogLatest": $$BlogLatest,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,5],\"inline\":false,\"attributes\":{\"title\":\"Zet uw beleid om in actie met onze modules voor een <b>veilige</b> vereniging.\",\"subtitle\":\"Meer tijd voor coachen, minder administratief werk - zo eenvoudig kan het zijn. <span class=\\\"text-neutral-400\\\">Vraag vrijblijvend een demo aan.</span>\",\"buttons\":[{\"title\":\"Kom in contact\",\"href\":\"/contact\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Hero\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Zet uw beleid om in actie met onze modules voor een <b>veilige</b> vereniging.\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"Meer tijd voor coachen, minder administratief werk - zo eenvoudig kan het zijn. <span class=\\\"text-neutral-400\\\">Vraag vrijblijvend een demo aan.</span>\"},{\"type\":\"attribute\",\"name\":\"buttons\",\"value\":[{\"title\":\"Kom in contact\",\"href\":\"/contact\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7,22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,11],\"inline\":false,\"attributes\":{\"title\":\"Behoud de verbinding tussen sporters en [hun coaches] [de vertrouwenspersoon] [de bestuurder] <span class=\\\"text-neutral-400\\\">Waar vrijwilligers onze modules voor gebruiken:</span>\",\"services\":[{\"title\":\"Speak-Up\",\"description\":\"Door te focussen op een veilig sport-klimaat. Sporters voelen zich gehoord door veilige speak-up check-ins van coaches, bestuurders en vertrouwenspersonen via korte vragen.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"Makkelijke opvolging\",\"description\":\"Door inzicht te krijgen in voortgang en welzijn en welzijn. Spreadsheets de spot uit, door juist te focussen op het gesprek en de opvolging ervan.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"Kennisoverdracht\",\"description\":\"Door continuiteit binnen de vereniging te waargeborgen. Leer van al gebruikte check-ins van bestuurders, vertrouwenspersonen en coaches binnen op buiten jouw sport\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Services\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Behoud de verbinding tussen sporters en [hun coaches] [de vertrouwenspersoon] [de bestuurder] <span class=\\\"text-neutral-400\\\">Waar vrijwilligers onze modules voor gebruiken:</span>\"},{\"type\":\"attribute\",\"name\":\"services\",\"value\":[{\"title\":\"Speak-Up\",\"description\":\"Door te focussen op een veilig sport-klimaat. Sporters voelen zich gehoord door veilige speak-up check-ins van coaches, bestuurders en vertrouwenspersonen via korte vragen.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"Makkelijke opvolging\",\"description\":\"Door inzicht te krijgen in voortgang en welzijn en welzijn. Spreadsheets de spot uit, door juist te focussen op het gesprek en de opvolging ervan.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"Kennisoverdracht\",\"description\":\"Door continuiteit binnen de vereniging te waargeborgen. Leer van al gebruikte check-ins van bestuurders, vertrouwenspersonen en coaches binnen op buiten jouw sport\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,15],\"inline\":false,\"attributes\":{\"title\":\"Recent Werk\",\"buttons\":[{\"title\":\"Bekijk al ons werk\",\"href\":\"/works\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"RecentWork\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Recent Werk\"},{\"type\":\"attribute\",\"name\":\"buttons\",\"value\":[{\"title\":\"Bekijk al ons werk\",\"href\":\"/works\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":15}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[16,19],\"inline\":false,\"attributes\":{\"testimonial\":\"[Your Company] heeft een fantastische website voor ons gemaakt die al ons verkeer heeft omgezet in nieuwe leads. Hun werk heeft onze business enorm doen groeien!\",\"name\":\"Jane Doe\"},\"children\":[],\"type\":\"tag\",\"tag\":\"Testimonial\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"testimonial\",\"value\":\"[Your Company] heeft een fantastische website voor ons gemaakt die al ons verkeer heeft omgezet in nieuwe leads. Hun werk heeft onze business enorm doen groeien!\"},{\"type\":\"attribute\",\"name\":\"name\",\"value\":\"Jane Doe\"}],\"slots\":{},\"location\":{\"start\":{\"line\":16},\"end\":{\"line\":19}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[20,21],\"inline\":false,\"attributes\":{\"title\":\"Van het Blog\"},\"children\":[],\"type\":\"tag\",\"tag\":\"BlogLatest\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Van het Blog\"}],\"slots\":{},\"location\":{\"start\":{\"line\":20},\"end\":{\"line\":21}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
