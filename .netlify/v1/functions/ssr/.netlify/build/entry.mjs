import { renderers } from './renderers.mjs';
import { manifest } from './manifest_HbvGgd5Z.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CtItK7z0.mjs');
const _page1 = () => import('./chunks/keystatic-api_DTe3y4ZH.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_DIljU7ts.mjs');
const _page3 = () => import('./chunks/404_zdK30raI.mjs');
const _page4 = () => import('./chunks/index_BusRcAtT.mjs');
const _page5 = () => import('./chunks/index_hM0X4Kyw.mjs');
const _page6 = () => import('./chunks/keystatic_Bv0NUQ6U.mjs');
const _page7 = () => import('./chunks/index_LDrZUmbu.mjs');
const _page8 = () => import('./chunks/rss_B_xzfpEu.mjs');
const _page9 = () => import('./chunks/index_D_LAZHV8.mjs');
const _page10 = () => import('./chunks/og_cNt7Bpxy.mjs');
const _page11 = () => import('./chunks/index_C13VFyXf.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/en/post/[...slug]/index.astro", _page4],
    ["src/pages/en/work/[...slug]/index.astro", _page5],
    ["src/pages/keystatic.astro", _page6],
    ["src/pages/post/[...slug]/index.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/work/[...slug]/index.astro", _page9],
    ["src/pages/[...slug]/og.png.ts", _page10],
    ["src/pages/[...slug]/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "86c45ae5-9789-437d-b468-bb3b3362ccdc"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
