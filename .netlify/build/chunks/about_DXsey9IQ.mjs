import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_Cb_nbFUI.mjs';
import { $ as $$Title, a as $$Container } from './prerender_PuHaZ10s.mjs';
import { $ as $$About } from './About_DT1niKVK.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"About": $$About,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{\"title\":\"Over ons\",\"subtitle\":\"Bij Company bieden we web design, advertentie, marketing en SEO-diensten op maat van uw behoeften. Ons doel is om lokale bedrijven te helpen floreren met duurzame oplossingen die leads genereren en groei bevorderen.\",\"content\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Wij geloven in unieke en creatieve oplossingen en zijn toegewijd aan uitmuntendheid en integriteit. Door visueel verbluffende websites te creëren, strategische reclamecampagnes te ontwikkelen en effectieve SEO-technieken te implementeren, zorgen we ervoor dat uw bedrijf opvalt en duurzame groei bereikt. Ons team is toegewijd aan het leveren van diensten van het hoogste niveau die uw merk verheffen en uw bereik vergroten. Ga met ons mee op een reis om uw digitale aanwezigheid te transformeren en blijvend succes te behalen. Ervaar het verschil van Company en zie uw bedrijf groeien zoals nooit tevoren.</span>\"},\"children\":[],\"type\":\"tag\",\"tag\":\"About\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Over ons\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"Bij Company bieden we web design, advertentie, marketing en SEO-diensten op maat van uw behoeften. Ons doel is om lokale bedrijven te helpen floreren met duurzame oplossingen die leads genereren en groei bevorderen.\"},{\"type\":\"attribute\",\"name\":\"content\",\"value\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Wij geloven in unieke en creatieve oplossingen en zijn toegewijd aan uitmuntendheid en integriteit. Door visueel verbluffende websites te creëren, strategische reclamecampagnes te ontwikkelen en effectieve SEO-technieken te implementeren, zorgen we ervoor dat uw bedrijf opvalt en duurzame groei bereikt. Ons team is toegewijd aan het leveren van diensten van het hoogste niveau die uw merk verheffen en uw bereik vergroten. Ga met ons mee op een reis om uw digitale aanwezigheid te transformeren en blijvend succes te behalen. Ervaar het verschil van Company en zie uw bedrijf groeien zoals nooit tevoren.</span>\"}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
