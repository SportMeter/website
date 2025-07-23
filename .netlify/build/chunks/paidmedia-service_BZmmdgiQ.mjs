const paidmediaService = new Proxy({"src":"/_astro/paidmedia-service.DMHLmxRd.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/paidmedia-service.png";
							}
							
							return target[name];
						}
					});

export { paidmediaService as default };
