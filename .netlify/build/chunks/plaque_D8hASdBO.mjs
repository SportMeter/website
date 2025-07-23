const plaque = new Proxy({"src":"/_astro/plaque.CZJFxiHW.svg","width":128,"height":128,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/plaque.svg";
							}
							
							return target[name];
						}
					});

export { plaque as default };
