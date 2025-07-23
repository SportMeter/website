const iconNumber1 = new Proxy({"src":"/_astro/icon-number-1.Cc44Icn6.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/icon-number-1.png";
							}
							
							return target[name];
						}
					});

export { iconNumber1 as default };
