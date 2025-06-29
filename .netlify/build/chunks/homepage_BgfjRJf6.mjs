import { c as createGetHeadings, a as createContentComponent, $ as $$Renderer, m as markdocConfig, b as assetsConfig } from './runtime-assets-config_Cb_nbFUI.mjs';
import { $ as $$Testimonial, a as $$Services, b as $$Hero } from './Testimonial_CSOC7qQn.mjs';
import { $ as $$Title, a as $$Container } from './prerender_PuHaZ10s.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Hero": $$Hero,
"Container": $$Container,
"Services": $$Services,
"Testimonial": $$Testimonial,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,5],\"inline\":false,\"attributes\":{\"title\":\"We bring your most <b>majestic</b> visions to <b>life.</b>\",\"subtitle\":\"We specialize in solutions that bring results to your business. <span class=\\\"text-neutral-400\\\">Contact us for a free consultation.</span>\",\"buttons\":[{\"title\":\"Contact us\",\"href\":\"/contact\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Hero\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"We bring your most <b>majestic</b> visions to <b>life.</b>\"},{\"type\":\"attribute\",\"name\":\"subtitle\",\"value\":\"We specialize in solutions that bring results to your business. <span class=\\\"text-neutral-400\\\">Contact us for a free consultation.</span>\"},{\"type\":\"attribute\",\"name\":\"buttons\",\"value\":[{\"title\":\"Contact us\",\"href\":\"/contact\",\"style\":\"button\",\"icon\":\"iconamoon:arrow-top-right-1-thin\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7,16,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,11],\"inline\":false,\"attributes\":{\"title\":\"We leverage our extensive design and technology expertise to <span class=\\\"text-neutral-400\\\">create leading brands and exceptional digital experiences.</span>\",\"services\":[{\"title\":\"Branding\",\"description\":\"We connect brand and UX, creating consistent digital identities across channels with strategic guidance to ensure seamless and cohesive brand representation.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"Digital solutions\",\"description\":\"We create memorable enterprise and consumer products, ensuring exceptional user experiences and providing comprehensive design systems for easy iteration.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"Paid Media\",\"description\":\"We craft impactful advertising campaigns, ensuring exceptional reach and engagement, and providing comprehensive strategies for seamless execution.\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Services\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"We leverage our extensive design and technology expertise to <span class=\\\"text-neutral-400\\\">create leading brands and exceptional digital experiences.</span>\"},{\"type\":\"attribute\",\"name\":\"services\",\"value\":[{\"title\":\"Branding\",\"description\":\"We connect brand and UX, creating consistent digital identities across channels with strategic guidance to ensure seamless and cohesive brand representation.\",\"icon\":\"/src/assets/pages/homepage/marketing-service.png\"},{\"title\":\"Digital solutions\",\"description\":\"We create memorable enterprise and consumer products, ensuring exceptional user experiences and providing comprehensive design systems for easy iteration.\",\"icon\":\"/src/assets/pages/homepage/socialmedia-service.png\"},{\"title\":\"Paid Media\",\"description\":\"We craft impactful advertising campaigns, ensuring exceptional reach and engagement, and providing comprehensive strategies for seamless execution.\",\"icon\":\"/src/assets/pages/homepage/paidmedia-service.png\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,15],\"inline\":false,\"attributes\":{\"testimonial\":\"[Company] built us an amazing website that turned all our traffic into new leads. Their work has boosted our business immensely!\",\"name\":\"Jane Doe\"},\"children\":[],\"type\":\"tag\",\"tag\":\"Testimonial\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"testimonial\",\"value\":\"[Company] built us an amazing website that turned all our traffic into new leads. Their work has boosted our business immensely!\"},{\"type\":\"attribute\",\"name\":\"name\",\"value\":\"Jane Doe\"}],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":15}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
