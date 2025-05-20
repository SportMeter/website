import { f as createComponent, w as isHTMLString, r as renderTemplate, p as renderUniqueStylesheet, q as renderScriptElement, u as unescapeHTML, t as createHeadAndContent, i as renderComponent, e as createAstro } from './astro_QE_WOLlr.mjs';
import 'kleur/colors';
import Markdoc$1 from '@markdoc/markdoc';
import Slugger from 'github-slugger';
import { $ as $$Image } from './pages/generic_CUkX2KsD.mjs';

const ComponentNode = createComponent({
  factory(result, { treeNode }) {
    if (treeNode.type === "text") return renderTemplate`${treeNode.content}`;
    const slots = {
      default: () => renderTemplate`${treeNode.children.map(
        (child) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: child })
      )}`
    };
    if (treeNode.type === "component") {
      let styles = "", links = "", scripts = "";
      if (Array.isArray(treeNode.collectedStyles)) {
        styles = treeNode.collectedStyles.map(
          (style) => renderUniqueStylesheet(result, {
            type: "inline",
            content: style
          })
        ).join("");
      }
      if (Array.isArray(treeNode.collectedLinks)) {
        links = treeNode.collectedLinks.map((link) => {
          return renderUniqueStylesheet(result, {
            type: "external",
            src: link[0] === "/" ? link : "/" + link
          });
        }).join("");
      }
      if (Array.isArray(treeNode.collectedScripts)) {
        scripts = treeNode.collectedScripts.map((script) => renderScriptElement(script)).join("");
      }
      const head = unescapeHTML(styles + links + scripts);
      let headAndContent = createHeadAndContent(
        head,
        renderTemplate`${renderComponent(
          result,
          treeNode.component.name,
          treeNode.component,
          treeNode.props,
          slots
        )}`
      );
      result._metadata.propagators.add({
        init() {
          return headAndContent;
        }
      });
      return headAndContent;
    }
    return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
  },
  propagation: "self"
});
async function createTreeNode(node) {
  if (isHTMLString(node)) {
    return { type: "text", content: node };
  } else if (typeof node === "string" || typeof node === "number") {
    return { type: "text", content: String(node) };
  } else if (node === null || typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) {
    return { type: "text", content: "" };
  }
  const children = await Promise.all(node.children.map((child) => createTreeNode(child)));
  if (typeof node.name === "function") {
    const component = node.name;
    const props = node.attributes;
    return {
      type: "component",
      component,
      props,
      children
    };
  } else if (isPropagatedAssetsModule(node.name)) {
    const { collectedStyles, collectedLinks, collectedScripts } = node.name;
    const component = (await node.name.getMod()).default;
    const props = node.attributes;
    return {
      type: "component",
      component,
      collectedStyles,
      collectedLinks,
      collectedScripts,
      props,
      children
    };
  } else {
    return {
      type: "element",
      tag: node.name,
      attributes: node.attributes,
      children
    };
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Renderer;
  //! astro-head-inject
  const { stringifiedAst, config } = Astro2.props;
  const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
  const content = await Markdoc$1.transform(ast, config);
  return renderTemplate`${Array.isArray(content) ? content.map(async (c) => renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(c) })}`) : renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(content) })}`}`;
}, "/Users/mauro/Dev/Ezzie/Website/node_modules/@astrojs/markdoc/components/Renderer.astro", void 0);

class MarkdocError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "MarkdocError";
  constructor(props, ...params) {
    super(...params);
    const { title = "MarkdocError", message, stack, location, hint, frame } = props;
    this.title = title;
    if (message) this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
}
const componentConfigSymbol = Symbol.for("@astrojs/markdoc/component-config");

function getSlug(attributes, children, headingSlugger) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const textContent = attributes.content ?? getTextContent(children);
  let slug = headingSlugger.slug(textContent);
  if (slug.endsWith("-")) slug = slug.slice(0, -1);
  return slug;
}
const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const { level, ...attributes } = node.transformAttributes(config);
    const children = node.transformChildren(config);
    if (!config.ctx?.headingSlugger) {
      throw new MarkdocError({
        message: "Unexpected problem adding heading IDs to Markdoc file. Did you modify the `ctx.headingSlugger` property in your Markdoc config?"
      });
    }
    const slug = getSlug(attributes, children, config.ctx.headingSlugger);
    const render = config.nodes?.heading?.render ?? `h${level}`;
    const tagProps = (
      // For components, pass down `level` as a prop,
      // alongside `__collectHeading` for our `headings` collector.
      // Avoid accidentally rendering `level` as an HTML attribute otherwise!
      typeof render === "string" ? { ...attributes, id: slug } : { ...attributes, id: slug, __collectHeading: true, level }
    );
    return new Markdoc$1.Tag(render, tagProps, children);
  }
};
function setupHeadingConfig() {
  const headingSlugger = new Slugger();
  return {
    ctx: {
      headingSlugger
    },
    nodes: {
      heading
    }
  };
}

async function setupConfig(userConfig = {}, options) {
  let defaultConfig = setupHeadingConfig();
  if (userConfig.extends) {
    for (let extension of userConfig.extends) {
      if (extension instanceof Promise) {
        extension = await extension;
      }
      defaultConfig = mergeConfig(defaultConfig, extension);
    }
  }
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function setupConfigSync(userConfig = {}, options) {
  const defaultConfig = setupHeadingConfig();
  let merged = mergeConfig(defaultConfig, userConfig);
  return merged;
}
function mergeConfig(configA, configB) {
  return {
    ...configA,
    ...configB,
    ctx: {
      ...configA.ctx,
      ...configB.ctx
    },
    tags: {
      ...configA.tags,
      ...configB.tags
    },
    nodes: {
      ...configA.nodes,
      ...configB.nodes
    },
    functions: {
      ...configA.functions,
      ...configB.functions
    },
    variables: {
      ...configA.variables,
      ...configB.variables
    },
    partials: {
      ...configA.partials,
      ...configB.partials
    },
    validation: {
      ...configA.validation,
      ...configB.validation
    }
  };
}
function resolveComponentImports(markdocConfig, tagComponentMap, nodeComponentMap) {
  for (const [tag, render] of Object.entries(tagComponentMap)) {
    const config = markdocConfig.tags[tag];
    if (config) config.render = render;
  }
  for (const [node, render] of Object.entries(nodeComponentMap)) {
    const config = markdocConfig.nodes[node];
    if (config) config.render = render;
  }
  return markdocConfig;
}
function getTextContent(childNodes) {
  let text = "";
  for (const node of childNodes) {
    if (typeof node === "string" || typeof node === "number") {
      text += node;
    } else if (typeof node === "object" && Markdoc$1.Tag.isTag(node)) {
      text += getTextContent(node.children);
    }
  }
  return text;
}
const headingLevels = [1, 2, 3, 4, 5, 6];
function collectHeadings(children, collectedHeadings) {
  for (const node of children) {
    if (typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) continue;
    if (node.attributes.__collectHeading === true && typeof node.attributes.level === "number") {
      collectedHeadings.push({
        slug: node.attributes.id,
        depth: node.attributes.level,
        text: getTextContent(node.children)
      });
      continue;
    }
    for (const level of headingLevels) {
      if (node.name === "h" + level) {
        collectedHeadings.push({
          slug: node.attributes.id,
          depth: level,
          text: getTextContent(node.children)
        });
      }
    }
    collectHeadings(node.children, collectedHeadings);
  }
}
function createGetHeadings(stringifiedAst, userConfig, options) {
  return function getHeadings() {
    const config = setupConfigSync(userConfig);
    const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
    const content = Markdoc$1.transform(ast, config);
    let collectedHeadings = [];
    collectHeadings(Array.isArray(content) ? content : [content], collectedHeadings);
    return collectedHeadings;
  };
}
function createContentComponent(Renderer, stringifiedAst, userConfig, options, tagComponentMap, nodeComponentMap) {
  return createComponent({
    async factory(result, props) {
      const withVariables = mergeConfig(userConfig, { variables: props });
      const config = resolveComponentImports(
        await setupConfig(withVariables),
        tagComponentMap,
        nodeComponentMap
      );
      return renderComponent(result, Renderer.name, Renderer, { stringifiedAst, config }, {});
    },
    propagation: "self"
  });
}

function startsWithDotDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  const c3 = path[2];
  return c1 === "." && c2 === "." && c3 === "/";
}
function startsWithDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  return c1 === "." && c2 === "/";
}
function isRelativePath(path) {
  return startsWithDotDotSlash(path) || startsWithDotSlash(path);
}

const Markdoc = Markdoc$1;
const nodes = { ...Markdoc.nodes, heading };
function defineMarkdocConfig(config) {
  return config;
}
function component(pathnameOrPkgName, namedExport) {
  return {
    type: isNpmPackageName(pathnameOrPkgName) ? "package" : "local",
    path: pathnameOrPkgName,
    namedExport,
    [componentConfigSymbol]: true
  };
}
function isNpmPackageName(pathname) {
  return !isRelativePath(pathname) && !pathname.startsWith("/");
}

const markdocConfig = defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      // Apply defaults for other options
      render: void 0
      // default 'article'
    },
    heading: {
      attributes: {
        ...nodes.heading.attributes,
        // Use the correct base attributes for a heading
        // Additional custom attributes if needed
        title: { type: String, render: "title" },
        level: { type: Number, render: "level" }
      },
      render: component("./src/components/primitives/Title.astro")
    },
    link: {
      render: "a",
      attributes: {
        href: { type: String },
        target: { type: String, default: "_blank" },
        rel: { type: String, default: "noopener noreferrer" }
      }
    }
  },
  tags: {
    Container: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Container.astro")
    },
    ContainerFluid: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/ContainerFluid.astro")
    },
    Prose: {
      attributes: {
        class: { type: String, render: "class" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Prose.astro")
    },
    Flex: {
      attributes: {
        class: { type: String, render: "class" },
        direction: { type: String, render: "direction" },
        verticalAlign: { type: String, render: "verticalAlign" },
        horizontalAlign: { type: String, render: "horizontalAlign" },
        itemsAlignment: { type: String, render: "itemsAlignment" },
        gap: { type: Number, render: "gap" },
        wrap: { type: Boolean, render: "wrap" }
      },
      children: ["*"],
      render: component("./src/components/primitives/Flex.astro")
    },
    Hero: {
      attributes: {
        title: { type: String, render: "title", required: true },
        subtitle: { type: String, render: "subtitle", required: true },
        buttons: { type: Array, render: "buttons", required: true }
      },
      render: component("./src/components/sections/Hero.astro")
    },
    BlogLatest: {
      attributes: {
        title: { type: String, render: "title", required: true }
      },
      render: component("./src/components/sections/BlogLatest.astro")
    },
    LogoCloud: {
      attributes: {
        title: { type: String, render: "title", required: true },
        logos: { type: Array, render: "logos", required: true }
      },
      render: component("./src/components/sections/LogoCloud.astro")
    },
    Services: {
      attributes: {
        title: { type: String, render: "title", required: true },
        services: { type: Array, render: "services", required: true }
      },
      render: component("./src/components/sections/Services.astro")
    },
    RecentWork: {
      attributes: {
        title: { type: String, render: "title", required: true },
        buttons: { type: Array, render: "buttons", required: true }
      },
      render: component("./src/components/sections/RecentWork.astro")
    },
    Testimonial: {
      attributes: {
        testimonial: { type: String, render: "testimonial", required: true },
        name: { type: String, render: "name", required: true }
      },
      render: component("./src/components/sections/Testimonial.astro")
    },
    Results: {
      attributes: {
        title: { type: String, render: "title", required: true },
        results: { type: Array, render: "results", required: true }
      },
      render: component("./src/components/sections/Results.astro")
    },
    About: {
      attributes: {
        title: { type: String, render: "title", required: true },
        subtitle: { type: String, render: "subtitle", required: true },
        content: { type: String, render: "content", required: true }
      },
      render: component("./src/components/sections/About.astro")
    },
    Works: {
      attributes: {},
      render: component("./src/components/sections/Works.astro")
    },
    News: {
      attributes: {},
      render: component("./src/components/sections/News.astro")
    },
    Contact: {
      attributes: {
        title: { type: String, render: "title", required: true },
        fields: { type: Array, render: "fields", required: true }
      },
      render: component("./src/components/sections/Contact.astro")
    }
  }
});

const assetsConfig = {
  nodes: {
    image: {
      attributes: {
        ...Markdoc$1.nodes.image.attributes,
        __optimizedSrc: { type: "Object" }
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (node.type === "image" && "__optimizedSrc" in node.attributes) {
          const { __optimizedSrc, ...rest } = node.attributes;
          return new Markdoc$1.Tag($$Image, { ...rest, src: __optimizedSrc }, children);
        } else {
          return new Markdoc$1.Tag("img", attributes, children);
        }
      }
    }
  }
};

export { $$Renderer as $, createContentComponent as a, assetsConfig as b, createGetHeadings as c, markdocConfig as m };
