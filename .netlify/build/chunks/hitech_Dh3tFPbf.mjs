const hitech = new Proxy({"src":"/_astro/hitech.D8q_zAmu.svg","width":308,"height":77,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/homepage/hitech.svg";
							}
							
							return target[name];
						}
					});

export { hitech as default };
