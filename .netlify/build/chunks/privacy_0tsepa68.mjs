import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_BxnVPXg3.mjs';
import { $ as $$Title, a as $$Container } from './prerender_CSyEM-TN.mjs';
import { $ as $$Privacy } from './Privacy_BnLS0n-a.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"Privacy": $$Privacy,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,6],\"inline\":false,\"attributes\":{\"content\":\"In progress\"},\"children\":[],\"type\":\"tag\",\"tag\":\"Privacy\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"content\",\"value\":\"In progress\"}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":6}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
