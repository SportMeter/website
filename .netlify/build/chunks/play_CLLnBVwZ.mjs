const play = new Proxy({"src":"/_astro/play.YDuNbX8e.svg","width":250,"height":250,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/play.svg";
							}
							
							return target[name];
						}
					});

export { play as default };
