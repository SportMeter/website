const cactus = new Proxy({"src":"/_astro/cactus.D_jKg2Ry.svg","width":407,"height":110,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/cactus.svg";
							}
							
							return target[name];
						}
					});

export { cactus as default };
