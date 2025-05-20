const teethWhitening = new Proxy({"src":"/_astro/teeth-whitening.3SxMHWM4.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Ezzie/Website/src/assets/pages/homepage/teeth-whitening.svg";
							}
							
							return target[name];
						}
					});

export { teethWhitening as default };
