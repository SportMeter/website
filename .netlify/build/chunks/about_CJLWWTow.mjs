const about = new Proxy({"src":"/_astro/about.BqP53F5N.png","width":2707,"height":2214,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/about/about.png";
							}
							
							return target[name];
						}
					});

export { about as default };
