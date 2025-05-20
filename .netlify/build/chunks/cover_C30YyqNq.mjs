const cover = new Proxy({"src":"/_astro/cover.CpMCnsuV.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/blog/cover.svg";
							}
							
							return target[name];
						}
					});

export { cover as default };
