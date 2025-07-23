import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_BxnVPXg3.mjs';
import { $ as $$Title, a as $$Container } from './prerender_1IqFCGTC.mjs';
import { $ as $$Contact } from './Contact_DTfIQim1.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"Contact": $$Contact,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,17,18],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,16],\"inline\":false,\"attributes\":{\"introSection\":\"Ready to join?\",\"message\":\"Get in touch\",\"privacyStatement\":\"We only use your contact details to get in touch about the safe association pilots\",\"fields\":[{\"title\":\"Full name\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Phone\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Preferred call time\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Message\",\"placeholder\":\"Write your message here\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Send\",\"type\":\"submit\",\"width\":2}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Contact\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"introSection\",\"value\":\"Ready to join?\"},{\"type\":\"attribute\",\"name\":\"message\",\"value\":\"Get in touch\"},{\"type\":\"attribute\",\"name\":\"privacyStatement\",\"value\":\"We only use your contact details to get in touch about the safe association pilots\"},{\"type\":\"attribute\",\"name\":\"fields\",\"value\":[{\"title\":\"Full name\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Phone\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Preferred call time\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Message\",\"placeholder\":\"Write your message here\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Send\",\"type\":\"submit\",\"width\":2}]}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":16}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
