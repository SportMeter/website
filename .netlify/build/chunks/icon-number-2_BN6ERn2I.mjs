const iconNumber2 = new Proxy({"src":"/_astro/icon-number-2.XZmMVZSw.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mauro/Dev/Sportmeter/website/src/assets/pages/homepage/icon-number-2.png";
							}
							
							return target[name];
						}
					});

export { iconNumber2 as default };
