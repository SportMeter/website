import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_Cb_nbFUI.mjs';
import { $ as $$Title, a as $$Container } from './prerender_PuHaZ10s.mjs';
import { $ as $$Contact } from './Contact_Bo5yCqY0.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"Contact": $$Contact,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,15,16],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,14],\"inline\":false,\"attributes\":{\"title\":\"Neem contact op\",\"fields\":[{\"title\":\"Volledige naam\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"E-mail\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefoon\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Gewenste beltijd\",\"placeholder\":\"10:00 tot 16:00 uur\",\"type\":\"text\"},{\"title\":\"Bericht\",\"placeholder\":\"Schrijf hier uw bericht\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Verzenden\",\"type\":\"submit\",\"width\":2}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Contact\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Neem contact op\"},{\"type\":\"attribute\",\"name\":\"fields\",\"value\":[{\"title\":\"Volledige naam\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"E-mail\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefoon\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Gewenste beltijd\",\"placeholder\":\"10:00 tot 16:00 uur\",\"type\":\"text\"},{\"title\":\"Bericht\",\"placeholder\":\"Schrijf hier uw bericht\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Verzenden\",\"type\":\"submit\",\"width\":2}]}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":14}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
