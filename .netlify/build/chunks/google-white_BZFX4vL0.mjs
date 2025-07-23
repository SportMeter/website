const googleWhite = new Proxy({"src":"/_astro/google-white.Jo_8AMLF.png","width":2400,"height":2449,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/google-white.png";
							}
							
							return target[name];
						}
					});

export { googleWhite as default };
