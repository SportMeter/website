const socialmediaService = new Proxy({"src":"/_astro/socialmedia-service.DzVhx38z.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/homepage/socialmedia-service.png";
							}
							
							return target[name];
						}
					});

export { socialmediaService as default };
