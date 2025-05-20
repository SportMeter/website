const id = "en/contact.mdoc";
						const collection = "pages";
						const slug = "en/contact";
						const body = "\n{% Container %}\n\n{% Contact\n  title=\"Get in touch\"\n  fields=[\n    {title: \"Full Name\", placeholder: \"John Doe\", required: true, type: \"text\"},\n    {title: \"Email\", placeholder: \"contact@email.com\", required: true, type: \"email\"},\n    {title: \"Phone\", placeholder: \"+1 345-678\", type: \"tel\"},\n    {title: \"Schedule to receive call\", placeholder: \"10:00 AM to 4:00 PM\", type: \"text\"},\n    {title: \"Message\", placeholder: \"Type your message here\", type: \"textarea\", width: 2},\n    {title: \"Contact us\", type: \"submit\", width: 2}\n  ]\n/%}\n\n{% /Container %}\n";
						const data = {title:"Contact us",type:"informational",lastUpdateDate:new Date(1709942400000),hideTitle:false,seo:{title:"Contact Us: Get in Touch for Innovative Web Solutions",description:"Reach out to [Company] Studio for expert web design and SEO services. Connect with us to discuss your project and explore cutting-edge web solutions.",author:"Your company"}};
						const _internal = {
							type: 'content',
							filePath: "/Users/mauro/Dev/Ezzie/Website/src/content/pages/en/contact.mdoc",
							rawData: "\ntitle: Contact us\ntype: informational\nlastUpdateDate: 2024-03-09\nhideTitle: false\nseo:\n  title: \"Contact Us: Get in Touch for Innovative Web Solutions\"\n  description: \"Reach out to [Company] Studio for expert web design and SEO services. Connect with us to discuss your project and explore cutting-edge web solutions.\"\n  author: Your company",
						};

export { _internal, body, collection, data, id, slug };
