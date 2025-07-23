import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_BxnVPXg3.mjs';
import { $ as $$Title } from './prerender_1IqFCGTC.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2],\"inline\":true,\"attributes\":{\"content\":\"Lorem ipsum dolor sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":true,\"attributes\":{\"content\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl nulla, viverra quis dui ac, facilisis auctor ante. Duis fringilla, neque quis pulvinar mattis, lectus urna porttitor mauris, eget tristique turpis tortor quis sapien. Maecenas congue enim ut tortor pulvinar semper. Integer commodo suscipit mauris. In ornare vitae metus dapibus sodales. Mauris quis molestie ante. Praesent nisi elit, ullamcorper at placerat vulputate, accumsan dignissim purus. Proin euismod nulla nulla.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"Lorem ipsum dolor sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{\"ordered\":false,\"marker\":\"-\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"**Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
