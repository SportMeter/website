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

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,9,10],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,8],\"inline\":false,\"attributes\":{\"title\":\"Lorem ipsum\",\"subtitle\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, viverra quis dui ac, facilisis auctor ante.\",\"content\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, viverra quis dui ac, facilisis auctor ante. Duis fringilla, neque quis pulvinar mattis, lectus urna porttitor mauris, eget tristique turpis tortor quis sapien. Maecenas congue enim ut tortor pulvinar semper. Integer commodo suscipit mauris. In ornare vitae metus dapibus sodales. Mauris quis molestie ante. Praesent nisi elit, ullamcorper at placerat vulputate, accumsan dignissim purus. Proin euismod nulla nulla.</span>\"},\"children\":[],\"type\":\"tag\",\"tag\":\"About\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Lorem ipsum\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, viverra quis dui ac, facilisis auctor ante.\"},{\"type\":\"attribute\",\"name\":\"content\",\"value\":\"<br/><br/><span class=\\\"text-neutral-400\\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, viverra quis dui ac, facilisis auctor ante. Duis fringilla, neque quis pulvinar mattis, lectus urna porttitor mauris, eget tristique turpis tortor quis sapien. Maecenas congue enim ut tortor pulvinar semper. Integer commodo suscipit mauris. In ornare vitae metus dapibus sodales. Mauris quis molestie ante. Praesent nisi elit, ullamcorper at placerat vulputate, accumsan dignissim purus. Proin euismod nulla nulla.</span>\"}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":8}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
