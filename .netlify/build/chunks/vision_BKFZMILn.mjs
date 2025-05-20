const vision = new Proxy({"src":"/_astro/vision.Cm3kP3kk.svg","width":333,"height":78,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/homepage/vision.svg";
							}
							
							return target[name];
						}
					});

export { vision as default };
