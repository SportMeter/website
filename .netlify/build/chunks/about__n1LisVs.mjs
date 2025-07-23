import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_BxnVPXg3.mjs';
import { $ as $$Title, a as $$Container } from './prerender_1IqFCGTC.mjs';
import { $ as $$About } from './About_CIkh2sV9.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"About": $$About,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,7],\"inline\":false,\"attributes\":{\"title\":\"Waarom geven wij kleur aan onze partnerverenigingen?\",\"subtitle\":\"Onze missie is om onze sportgemeenschap te inspireren en te koesteren – door begeleiders professioneel te laten groeien en alle sporters de gelegenheid te bieden ervan te genieten.\",\"content\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Met meer dan 20 jaar topsportervaring verdeeld over ons team, hebben we mogen genieten van de kennis en inspiratie van geweldige coaches binnen onder andere voetbal, handbal, hockey, zwemmen en nog veel meer sporten. Dankzij die ervaring begrijpen we de hedendaagse uitdagingen van coaches steeds beter – van prestatiedruk tot het bouwen aan betrokkenheid en teamgevoel.</span> <br> Wij geloven in een sportklimaat waar plezier de drijvende kracht is achter persoonlijke en gezamenlijke groei. Door sporters, vrijwilligers en bestuurders een omgeving te geven waar ze zich veilig, gewaardeerd en geïnspireerd voelen om het beste uit zichzelf en de vereniging te halen.\"},\"children\":[],\"type\":\"tag\",\"tag\":\"About\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Waarom geven wij kleur aan onze partnerverenigingen?\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"Onze missie is om onze sportgemeenschap te inspireren en te koesteren – door begeleiders professioneel te laten groeien en alle sporters de gelegenheid te bieden ervan te genieten.\"},{\"type\":\"attribute\",\"name\":\"content\",\"value\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Met meer dan 20 jaar topsportervaring verdeeld over ons team, hebben we mogen genieten van de kennis en inspiratie van geweldige coaches binnen onder andere voetbal, handbal, hockey, zwemmen en nog veel meer sporten. Dankzij die ervaring begrijpen we de hedendaagse uitdagingen van coaches steeds beter – van prestatiedruk tot het bouwen aan betrokkenheid en teamgevoel.</span> <br> Wij geloven in een sportklimaat waar plezier de drijvende kracht is achter persoonlijke en gezamenlijke groei. Door sporters, vrijwilligers en bestuurders een omgeving te geven waar ze zich veilig, gewaardeerd en geïnspireerd voelen om het beste uit zichzelf en de vereniging te halen.\"}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":7}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
