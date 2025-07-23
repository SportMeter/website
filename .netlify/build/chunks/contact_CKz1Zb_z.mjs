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

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[1,2,17,18],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,16],\"inline\":false,\"attributes\":{\"introSection\":\"Klaar om mee te doen?\",\"message\":\"Laat je naam en contactgegevens achter, dan kijken we samen hoe we SportMeter bij jullie kunnen inzetten.\",\"privacyStatement\":\"Je contact gegevens gebruiken we alleen om contact op te zoeken over de veilige vereniging pilots\",\"fields\":[{\"title\":\"Volledige naam\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"E-mail\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefoon\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Gewenste beltijd\",\"placeholder\":\"10:00 tot 16:00 uur\",\"type\":\"text\"},{\"title\":\"Bericht\",\"placeholder\":\"Schrijf hier uw bericht\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Verzenden\",\"type\":\"submit\",\"width\":2}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Contact\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"introSection\",\"value\":\"Klaar om mee te doen?\"},{\"type\":\"attribute\",\"name\":\"message\",\"value\":\"Laat je naam en contactgegevens achter, dan kijken we samen hoe we SportMeter bij jullie kunnen inzetten.\"},{\"type\":\"attribute\",\"name\":\"privacyStatement\",\"value\":\"Je contact gegevens gebruiken we alleen om contact op te zoeken over de veilige vereniging pilots\"},{\"type\":\"attribute\",\"name\":\"fields\",\"value\":[{\"title\":\"Volledige naam\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"E-mail\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefoon\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Gewenste beltijd\",\"placeholder\":\"10:00 tot 16:00 uur\",\"type\":\"text\"},{\"title\":\"Bericht\",\"placeholder\":\"Schrijf hier uw bericht\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Verzenden\",\"type\":\"submit\",\"width\":2}]}],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":16}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":1},\"end\":{\"line\":2}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
