const id = "en/contact.mdoc";
						const collection = "pages";
						const slug = "en/contact";
						const body = "\n{% Container %}\n\n{% Contact\n  introSection=\"Ready to join?\"\n  message=\"Get in touch\"\n  privacyStatement=\"We only use your contact details to get in touch about the safe association pilots\"\n  fields=[\n    {title: \"Full name\", placeholder: \"John Doe\", required: true, type: \"text\"},\n    {title: \"Email\", placeholder: \"contact@email.com\", required: true, type: \"email\"},\n    {title: \"Phone\", placeholder: \"+1 345-678\", type: \"tel\"},\n    {title: \"Preferred call time\", placeholder: \"10:00 AM to 4:00 PM\", type: \"text\"},\n    {title: \"Message\", placeholder: \"Write your message here\", type: \"textarea\", width: 2},\n    {title: \"Send\", type: \"submit\", width: 2}\n  ]\n/%}\n\n{% /Container %}\n";
						const data = {title:"Contact",type:"informational",lastUpdateDate:new Date(1709942400000),hideTitle:false,addPadding:false,seo:{title:"Contact Sportmeter",description:"Vooruitgang begint met plezier!",author:"SportMeter"}};
						const _internal = {
							type: 'content',
							filePath: "/Users/mauro/Dev/Sportmeter/website/src/content/pages/en/contact.mdoc",
							rawData: "\ntitle: Contact\ntype: informational\nlastUpdateDate: 2024-03-09\nhideTitle: false\naddPadding: false\nseo:\n  title: \"Contact Sportmeter\"\n  description: Vooruitgang begint met plezier!\n  author: SportMeter",
						};

export { _internal, body, collection, data, id, slug };
