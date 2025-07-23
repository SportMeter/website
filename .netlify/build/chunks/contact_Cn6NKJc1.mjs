const id = "nl/contact.mdoc";
						const collection = "pages";
						const slug = "nl/contact";
						const body = "\n{% Container %}\n\n{% Contact\n  introSection=\"Klaar om mee te doen?\"\n  message=\"Laat je naam en contactgegevens achter, dan kijken we samen hoe we SportMeter bij jullie kunnen inzetten.\"\n  privacyStatement=\"Je contact gegevens gebruiken we alleen om contact op te zoeken over de veilige vereniging pilots\"\n  fields=[\n    {title: \"Volledige naam\", placeholder: \"John Doe\", required: true, type: \"text\"},\n    {title: \"E-mail\", placeholder: \"contact@email.com\", required: true, type: \"email\"},\n    {title: \"Telefoon\", placeholder: \"+1 345-678\", type: \"tel\"},\n    {title: \"Gewenste beltijd\", placeholder: \"10:00 tot 16:00 uur\", type: \"text\"},\n    {title: \"Bericht\", placeholder: \"Schrijf hier uw bericht\", type: \"textarea\", width: 2},\n    {title: \"Verzenden\", type: \"submit\", width: 2}\n  ]\n/%}\n\n{% /Container %}\n";
						const data = {title:"Contact",type:"informational",lastUpdateDate:new Date(1709942400000),hideTitle:false,addPadding:false,seo:{title:"Neem contact op met SportMeter",description:"Vooruitgang begint met plezier!",author:"SportMeter"}};
						const _internal = {
							type: 'content',
							filePath: "/Users/mauro/Dev/Sportmeter/website/src/content/pages/nl/contact.mdoc",
							rawData: "\ntitle: Contact\ntype: informational\nlastUpdateDate: 2024-03-09\nhideTitle: false\naddPadding: false\nseo:\n  title: \"Neem contact op met SportMeter\"\n  description: Vooruitgang begint met plezier!\n  author: SportMeter",
						};

export { _internal, body, collection, data, id, slug };
