const terra = new Proxy({"src":"/_astro/terra.B5vdeVVe.svg","width":409,"height":125,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/terra.svg";
							}
							
							return target[name];
						}
					});

export { terra as default };
