import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BSPe6oYO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CtItK7z0.mjs');
const _page1 = () => import('./chunks/keystatic-api_DTe3y4ZH.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_DIljU7ts.mjs');
const _page3 = () => import('./chunks/404_QYl-6Udu.mjs');
const _page4 = () => import('./chunks/contact_BGVOGzR3.mjs');
const _page5 = () => import('./chunks/index_DtILw6nh.mjs');
const _page6 = () => import('./chunks/index_BQ5MO4c3.mjs');
const _page7 = () => import('./chunks/keystatic_B4sn8tFX.mjs');
const _page8 = () => import('./chunks/index_bfHVsNio.mjs');
const _page9 = () => import('./chunks/rss_CkRy_T4f.mjs');
const _page10 = () => import('./chunks/index_D_Ca2_FA.mjs');
const _page11 = () => import('./chunks/og_CRkvMTBA.mjs');
const _page12 = () => import('./chunks/index_CBNBHQDZ.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/api/contact.ts", _page4],
    ["src/pages/en/post/[...slug]/index.astro", _page5],
    ["src/pages/en/work/[...slug]/index.astro", _page6],
    ["src/pages/keystatic.astro", _page7],
    ["src/pages/post/[...slug]/index.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/work/[...slug]/index.astro", _page10],
    ["src/pages/[...slug]/og.png.ts", _page11],
    ["src/pages/[...slug]/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6d9081d3-5812-4e0b-b2e1-cb6194ba1bf2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
