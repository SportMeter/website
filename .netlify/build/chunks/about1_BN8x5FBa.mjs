const about1 = new Proxy({"src":"/_astro/about1.D3UQkeX3.png","width":1820,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/about/about1.png";
							}
							
							return target[name];
						}
					});

export { about1 as default };
