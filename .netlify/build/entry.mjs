import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CzPeKFQk.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_H_EVtlG0.mjs');
const _page1 = () => import('./chunks/keystatic-api_C9kGNx44.mjs');
const _page2 = () => import('./chunks/keystatic-astro-page_R4VYcK0t.mjs');
const _page3 = () => import('./chunks/404_D9QH3ijJ.mjs');
const _page4 = () => import('./chunks/index_oSgye54S.mjs');
const _page5 = () => import('./chunks/index_4lF7Alcz.mjs');
const _page6 = () => import('./chunks/index_dlQ7Ds-f.mjs');
const _page7 = () => import('./chunks/rss_CRT5OX9u.mjs');
const _page8 = () => import('./chunks/index_Bqi-jDui.mjs');
const _page9 = () => import('./chunks/og_DXwBlXgv.mjs');
const _page10 = () => import('./chunks/index_CHHXF50-.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/it/post/[...slug]/index.astro", _page4],
    ["src/pages/it/work/[...slug]/index.astro", _page5],
    ["src/pages/post/[...slug]/index.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/work/[...slug]/index.astro", _page8],
    ["src/pages/[...slug]/og.png.ts", _page9],
    ["src/pages/[...slug]/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a63fa675-324d-43d2-969c-07d80130cb31"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
