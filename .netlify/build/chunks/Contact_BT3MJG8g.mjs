import { e as createAstro, f as createComponent, i as renderComponent, k as renderSlot, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './astro_ZLGY7KtM.mjs';
import 'kleur/colors';
import { b as $$Link } from './prerender_CSyEM-TN.mjs';

const $$Astro$1 = createAstro("https://veiligevereniging.nl");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { ...props } = Astro2.props;
  const computedProps = {
    ...props,
    tag: "button",
    style: "button"
  };
  return renderTemplate`${renderComponent($$result, "Link", $$Link, { ...computedProps }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/primitives/Button.astro", void 0);

const $$Astro = createAstro("https://veiligevereniging.nl");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  function getFieldName(title) {
    const fieldMap = {
      "Volledige naam": "name",
      "Full name": "name",
      "E-mail": "email",
      "Email": "email",
      "Telefoon": "phone",
      "Phone": "phone",
      "Gewenste beltijd": "preferredCallTime",
      "Preferred call time": "preferredCallTime",
      "Bericht": "message",
      "Message": "message"
    };
    return fieldMap[title] || title.toLowerCase().replace(/\s+/g, "");
  }
  const { introSection, message, privacyStatement, fields } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center gap-x-[6.25rem] pb-40 auto-cols-fr justify-center flex"> <div class="col-span-1 row-span-1 w-full max-w-3xl"> <div class="items-center text-sm font-medium justify-center flex"> <h2 class="text-[3.13rem] leading-none font-semibold my-1">${introSection}</h2> </div> <h4 class=" mb-1 mt-10"> ${message} </h4> <div class="mt-8"> <div class="mt-0 mx-0 mb-3.5"> <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="items-center auto-cols-fr grid-cols-1 sm:grid-cols-2 grid-rows-[auto] grid gap-8"> <!-- Hidden honeypot field for spam protection --> <input type="hidden" name="bot-field"> <!-- Hidden field to identify the form --> <input type="hidden" name="form-name" value="contact"> ${fields?.map((field) => {
    if (field.type === "submit") {
      return renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "submit", "class:list": [field.width == 2 && "sm:col-span-2"] }, { "default": ($$result2) => renderTemplate`${field.title}` })}`;
    } else if (field.type === "textarea") {
      return renderTemplate`<div${addAttribute(["text-base", field.width == 2 && "sm:col-span-2"], "class:list")}> <p class="text-black font-semibold max-w-full mb-3"> ${field.title} </p> <textarea${addAttribute(getFieldName(field.title), "name")}${addAttribute(field.required, "required")}${addAttribute(field.placeholder, "placeholder")} class="text-zinc-800 cursor-text py-4 w-full border-2 border-black border-solid rounded-md m-0"></textarea> </div>`;
    } else {
      return renderTemplate`<div${addAttribute(["text-base", field.width == 2 && "sm:col-span-2"], "class:list")}> <p class="text-black font-semibold max-w-full mb-3"> ${field.title} </p> <input${addAttribute(field.type, "type")}${addAttribute(getFieldName(field.title), "name")}${addAttribute(field.required, "required")}${addAttribute(field.placeholder, "placeholder")} class="text-zinc-800 cursor-text py-4 w-full h-14 min-h-[3.50rem] border-2 border-black border-solid rounded-md m-0"> </div>`;
    }
  })} </form> <a class="text-sm italic">* ${privacyStatement}</a> </div> </div> </div> </div>`;
}, "/Users/mauro/Dev/Sportmeter/website/src/components/sections/Contact.astro", void 0);

export { $$Contact as $ };
