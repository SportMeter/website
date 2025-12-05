import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D-XVdslc.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CtItK7z0.mjs');
const _page1 = () => import('./chunks/keystatic-api_DTe3y4ZH.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_DIljU7ts.mjs');
const _page3 = () => import('./chunks/404_Bg6F8pgP.mjs');
const _page4 = () => import('./chunks/index_DyjyRGiZ.mjs');
const _page5 = () => import('./chunks/index_Cck8picx.mjs');
const _page6 = () => import('./chunks/keystatic_CgMIS4g-.mjs');
const _page7 = () => import('./chunks/index_7ORONKAA.mjs');
const _page8 = () => import('./chunks/rss_Bf2WCRxG.mjs');
const _page9 = () => import('./chunks/index_C2x71Q64.mjs');
const _page10 = () => import('./chunks/og_DLgEYjt0.mjs');
const _page11 = () => import('./chunks/index_Ban5CUjt.mjs');
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
    "middlewareSecret": "ec60668c-a7dd-4116-bb67-abe71ede16ea"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
