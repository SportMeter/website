export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_CSyEM-TN.mjs').then(n => n.e);

export { page };
