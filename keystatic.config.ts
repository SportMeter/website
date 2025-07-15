// keystatic.config.ts
import {
  collection,
  component,
  config,
  fields,
  singleton,
} from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";
import IconList from "./.keystatic/icon-list.json";
import {
  ContactIcon,
  ContactMapIcon,
  ContainerFluidIcon,
  ContainerIcon,
  FeatureListIcon,
  FlexboxIcon,
  GeneralIcon,
  HeroIcon,
  HighlightsIcon,
  ImageAsideIcon,
  PopularServicesIcon,
  PostListIcon,
  ProseIcon,
  TestimonialIcon,
  TitleImageIcon,
} from "./.keystatic/keystatic-icons";
import { BrandMarkComponent } from "./.keystatic/mark";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "sportmeter/website",
  },
  ui: {
    brand: {
      name: "Sportmeter",
      mark: BrandMarkComponent,
    },
  },
  singletons: {
    header: singleton({
      label: "Navigation",
      path: "src/content/global/header",
      format: { data: "json" },
      schema: {
        logo: fields.object({
          imagePath: fields.image({
            label: "Logo",
            directory: "src/assets/global",
            publicPath: "/src/assets/global/",
            validation: {
              isRequired: false,
            },
          }),
          title: fields.text({ label: "Title" }),
        }),
        pages: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            link: fields.text({ label: "Url" }),
          }),
          // Labelling options
          {
            label: "Pages",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        actions: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            link: fields.text({ label: "Url" }),
            style: fields.select({
              label: "Style",
              options: [
                { label: "Filled", value: "button" },
                { label: "Outlined", value: "outline" },
              ],
              defaultValue: "button",
            }),
          }),
          // Labelling options
          {
            label: "Actions",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        contacts: fields.object(
          {
            phone: fields.text({ label: "Phone" }),
            mail: fields.text({ label: "Email" }),
            address: fields.text({ label: "Address" }),
          },
          {
            label: "Contacts",
          }
        ),
        socials: fields.array(
          fields.object({
            icon: fields.text({ label: "Icon" }),
            link: fields.text({ label: "Url" }),
          }),
          {
            itemLabel: (props) => props.fields.link.value,
            label: "Social",
          }
        ),
      },
    }),
    widget: singleton({
      label: "Whatsapp widget",
      path: "src/content/global/widget",
      format: { data: "json" },
      schema: {
        enabled: fields.checkbox({ label: "Inschakelen" }),
        icon: fields.select({
          label: "Pictogram",
          options: IconList,
          defaultValue: "whatsapp",
        }),
        link: fields.url({ label: "Link" }),
      },
    }),
    footer: singleton({
      label: "Footer",
      path: "src/content/global/footer",
      format: { data: "json" },
      schema: {
        title: fields.text({ label: "Title" }),
        subtitle: fields.text({ label: "Subtitle" }),
        copyright: fields.text({ label: "Copyright" }),
        contacts: fields.object(
          {
            phone: fields.text({ label: "Phone" }),
            mail: fields.text({ label: "Email" }),
            socials: fields.array(
              fields.object({
                title: fields.text({ label: "Title" }),
                link: fields.text({ label: "Url" }),
                icon: fields.text({ label: "Icon" }),
              }),
              {
                label: "Social",
                itemLabel: (props) =>
                  props.fields.title.value ?? "Stel een titel in",
              }
            ),
          },
          {
            label: "Contacts",
          }
        ),
      },
    }),
  },
  collections: {
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/nl/*",
      entryLayout: "content",
      columns: ["title", "lastUpdateDate"],
      previewUrl: "/{slug}",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Paginatitel",
            validation: {
              isRequired: true,
            },
          },
          // Optional slug label overrides
          slug: {
            label: "SEO-friendly slug",
            description:
              "Slug om te gebruiken voor de pagina, let op, het wordt afgeraden om deze te wijzigen na publicatie.",
          },
        }),
        subtitle: fields.text({
          label: "Subtitle",
          multiline: true,
        }),
        cover: fields.image({
          label: "Cover Image",
          directory: "src/assets/pages",
          publicPath: "@/assets/pages/",
        }),
        type: fields.select({
          label: "Pagina type",
          options: [
            {
              label: "Informatief",
              value: "informational",
            },
            {
              label: "Dienst",
              value: "service",
            },
            {
              label: "Contact/ondersteuning",
              value: "support",
            },
            {
              label: "Blog",
              value: "blog",
            },
            {
              label: "Algemene voorwaarden",
              value: "terms",
            },
          ],
          defaultValue: "informational",
        }),
        lastUpdateDate: fields.date({
          label: "Last Update Date",
          description: "Datum van laatste update van de pagina",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        hideTitle: fields.checkbox({
          label: "Titel verbergen",
          defaultValue: false,
        }),
        addPadding: fields.checkbox({
          label: "Padding toevoegen",
          defaultValue: true,
        }),
        seo: fields.object(
          {
            title: fields.text({
              label: "SEO-titel",
              validation: {
                isRequired: true,
                length: {
                  // min: 10,
                },
              },
            }),
            description: fields.text({
              label: "SEO-beschrijving",
              multiline: true,
              validation: {
                isRequired: true,
                length: {
                  // min: 50,
                },
              },
            }),
            author: fields.relationship({
              label: "Author",
              description: "Auteur van de pagina",
              collection: "authors",
              validation: {
                isRequired: true,
              },
            }),
          },
          {
            label: "SEO",
            description: "SEO-opties voor de pagina",
          }
        ),
        content: fields.markdoc({
          label: "Content",
          options: {
            heading: [2, 3, 4, 5, 6],
            image: {
              directory: "src/assets/pages",
              publicPath: "/src/assets/pages/",
            },
          },
          components: {
            Container: wrapper({
              label: "Container",
              icon: ContainerIcon({ ariaHidden: true }),
              description:
                "Container die je in staat stelt om marge toe te voegen aan de rechter- en linkerkant",
              schema: {
                class: fields.text({
                  label: "Aangepaste klassen",
                }),
              },
            }),
            ContainerFluid: wrapper({
              label: "Brede container",
              icon: ContainerFluidIcon({ ariaHidden: true }),
              description:
                "Container die je in staat stelt om marge te hebben aan de rechter- en linkerkant",
              schema: {
                class: fields.text({
                  label: "Aangepaste klassen",
                }),
              },
            }),
            Prose: wrapper({
              label: "Proza",
              icon: ProseIcon({ ariaHidden: true }),
              description:
                "Tekstcontainer, ideaal voor blogs of informatieve inhoud",
              schema: {
                class: fields.text({
                  label: "Aangepaste klassen",
                }),
              },
            }),
            Flex: wrapper({
              label: "Flexbox",
              icon: FlexboxIcon({ ariaHidden: true }),
              description: "Flexibele container",
              schema: {
                class: fields.text({
                  label: "Aangepaste klassen",
                  description: "Voeg aangepaste klassen toe aan de container",
                }),
                direction: fields.select({
                  label: "Richting",
                  description: "Kies de richting van de container",
                  options: [
                    { label: "Van links naar rechts", value: "ltr" },
                    { label: "Van rechts naar links", value: "rtl" },
                    { label: "Van boven naar beneden", value: "ttb" },
                    { label: "Van beneden naar boven", value: "btt" },
                  ],
                  defaultValue: "ltr",
                }),
                verticalAlign: fields.select({
                  label: "Verticale uitlijning",
                  description:
                    "Kies de verticale uitlijning van de container",
                  options: [
                    { label: "Bovenaan", value: "top" },
                    { label: "In het midden", value: "middle" },
                    { label: "Onderaan", value: "bottom" },
                    { label: "Uitrekken", value: "stretch" },
                    { label: "Verspreid", value: "spaceBetween" },
                    { label: "Ruimte eromheen", value: "spaceAround" },
                  ],
                  defaultValue: "top",
                }),
                horizontalAlign: fields.select({
                  label: "Horizontale uitlijning",
                  description:
                    "Kies de horizontale uitlijning van de container",
                  options: [
                    { label: "Links", value: "left" },
                    { label: "In het midden", value: "center" },
                    { label: "Rechts", value: "right" },
                    { label: "Verspreid", value: "spaceBetween" },
                    { label: "Ruimte eromheen", value: "spaceAround" },
                    { label: "Gelijkmatig verdeeld", value: "spaceEvenly" },
                  ],
                  defaultValue: "left",
                }),
                itemsAlignment: fields.select({
                  label: "Uitlijning van objecten",
                  description:
                    "Kies de uitlijning van objecten binnen de container",
                  options: [
                    { label: "Aan het begin", value: "start" },
                    { label: "In het midden", value: "center" },
                    { label: "Aan het einde", value: "end" },
                    { label: "Uitrekken", value: "stretch" },
                    { label: "Op de basislijn van de tekst", value: "baseline" },
                  ],
                  defaultValue: "start",
                }),
                gap: fields.number({
                  label: "Tussenruimte",
                  description: "Kies de ruimte tussen objecten",
                  defaultValue: 0,
                }),
                wrap: fields.checkbox({
                  label: "Regel omslaan",
                  description:
                    "Kies of de tekst naar een nieuwe regel moet gaan wanneer er geen ruimte meer is in de container",
                  defaultValue: false,
                }),
              },
            }),
            Hero: block({
              label: "Hero",
              description: "Hero-sectie van de homepage",
              icon: HeroIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                subtitle: fields.text({
                  label: "Subtitle",
                  validation: {
                    isRequired: true,
                  },
                }),
                buttons: fields.array(
                  fields.object({
                    title: fields.text({ label: "Title" }),
                    href: fields.text({ label: "Url" }),
                    style: fields.select({
                      label: "Style",
                      options: [
                        { label: "Filled", value: "button" },
                        { label: "Outlined", value: "outline" },
                      ],
                      defaultValue: "button",
                    }),
                    icon: fields.text({ label: "Pictogram" }),
                  }),
                  // Labelling options
                  {
                    label: "Actions",
                    itemLabel: (props) => props.fields.title.value,
                  }
                ),
              },
            }),
            LogoCloud: block({
              label: "LogoCloud",
              description: "LogoCloud",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                logos: fields.array(
                  fields.image({
                    label: "Logo",
                    directory: "src/assets/pages",
                    publicPath: "/src/assets/pages/",
                  }),
                  {
                    label: "Logo's",
                  }
                ),
              },
            }),
            Services: block({
              label: "Services",
              description: "Services",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                services: fields.array(
                  fields.object({
                    title: fields.text({ label: "Title" }),
                    description: fields.text({
                      label: "Description",
                      multiline: true,
                    }),
                    icon: fields.image({
                      label: "Pictogram",
                      directory: "src/assets/pages",
                      publicPath: "/src/assets/pages/",
                    }),
                  }),
                  // Labelling options
                  {
                    label: "Diensten",
                    itemLabel: (props) => props.fields.title.value,
                  }
                ),
              },
            }),
            VideoEffect: block({
              label: "VideoEffect",
              description: "VideoEffect",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {},
            }),
            RecentWork: block({
              label: "RecentWork",
              description: "RecentWork",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                buttons: fields.array(
                  fields.object({
                    title: fields.text({ label: "Title" }),
                    href: fields.text({ label: "Url" }),
                    style: fields.select({
                      label: "Style",
                      options: [
                        { label: "Filled", value: "button" },
                        { label: "Outlined", value: "outline" },
                      ],
                      defaultValue: "button",
                    }),
                    icon: fields.text({ label: "Pictogram" }),
                  }),
                  // Labelling options
                  {
                    label: "Actions",
                    itemLabel: (props) => props.fields.title.value,
                  }
                ),
              },
            }),
            Testimonial: block({
              label: "Testimonial",
              description: "Testimonial",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                testimonial: fields.text({
                  label: "Testimonial",
                  multiline: true,
                  validation: {
                    isRequired: true,
                  },
                }),
                name: fields.text({
                  label: "Name",
                  validation: {
                    isRequired: true,
                  },
                }),
              },
            }),
            Results: block({
              label: "Results",
              description: "Results",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                results: fields.array(
                  fields.object({
                    label: fields.text({ label: "Label" }),
                    value: fields.text({ label: "Value" }),
                  }),
                  // Labelling options
                  {
                    label: "Resultaten",
                    itemLabel: (props) => props.fields.label.value,
                  }
                ),
              },
            }),
            BlogLatest: block({
              label: "BlogLatest",
              description: "BlogLatest",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
              },
            }),
            About: block({
              label: "About",
              description: "About section",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                subtitle: fields.text({
                  label: "Subtitle",
                  validation: {
                    isRequired: true,
                  },
                }),
                content: fields.text({
                  label: "Content",
                  multiline: true,
                  validation: {
                    isRequired: true,
                  },
                }),
              },
            }),
            Works: block({
              label: "Works",
              description: "Works section",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {},
            }),
            News: block({
              label: "News",
              description: "News section",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {},
            }),
            Contact: block({
              label: "Contact",
              description: "Contact form section",
              icon: ContactIcon({ ariaHidden: true }),
              schema: {
                title: fields.text({
                  label: "Title",
                  validation: {
                    isRequired: true,
                  },
                }),
                fields: fields.array(
                  fields.object({
                    label: fields.text({ label: "Label" }),
                    placeholder: fields.text({ label: "Placeholder" }),
                    width: fields.number({ label: "Width" }),
                    type: fields.select({
                      label: "Type",
                      options: [
                        { label: "Text", value: "text" },
                        { label: "Email", value: "email" },
                        { label: "Textarea", value: "textarea" },
                      ],
                      defaultValue: "text",
                    }),
                    required: fields.checkbox({ label: "Required" }),
                  }),
                  {
                    label: "Fields",
                    itemLabel: (props) => props.fields.label.value,
                  }
                ),
              },
            }),
          },
        }),
      },
    }),
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/nl/*",
      entryLayout: "content",
      columns: ["title", "lastUpdateDate"],
      previewUrl: "/post/{slug}",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Titel van het bericht",
            validation: {
              isRequired: true,
            },
          },
          // Optional slug label overrides
          slug: {
            label: "SEO-friendly slug",
            description:
              "Slug om te gebruiken voor het bericht, let op, het wordt afgeraden om deze te wijzigen na publicatie.",
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: {
            isRequired: true,
          },
        }),
        category: fields.text({ label: "Category" }),
        author: fields.relationship({
          label: "Author",
          description: "Auteur van het artikel",
          collection: "authors",
          validation: {
            isRequired: true,
          },
        }),
        cover: fields.image({
          label: "Cover Image",
          directory: "src/assets/posts",
          publicPath: "@/assets/posts/",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        pubDate: fields.date({
          label: "Publication Date",
          description: "Publicatiedatum van het artikel",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        lastUpdateDate: fields.date({
          label: "Last Update Date",
          description: "Datum van laatste update van het artikel",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        hidden: fields.checkbox({
          label: "Verborgen",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            heading: [2, 3, 4, 5, 6],
            image: {
              directory: "src/assets/posts",
              publicPath: "/src/assets/posts/",
            },
          },
          components: {},
        }),
      },
    }),
    works: collection({
      label: "Works",
      slugField: "title",
      path: "src/content/works/nl/*",
      entryLayout: "content",
      columns: ["title", "lastUpdateDate"],
      previewUrl: "/works/{slug}",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Titel van het werk",
            validation: {
              isRequired: true,
            },
          },
          // Optional slug label overrides
          slug: {
            label: "SEO-friendly slug",
            description:
              "Slug om te gebruiken voor het werk, let op, het wordt afgeraden om deze te wijzigen na publicatie.",
          },
        }),
        link: fields.text({
          label: "Link",
          validation: {
            isRequired: true,
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: {
            isRequired: true,
          },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        cover: fields.image({
          label: "Cover Image",
          directory: "src/assets/works",
          publicPath: "@/assets/works/",
        }),
        headerCover: fields.image({
          label: "Header Cover Image",
          directory: "src/assets/works",
          publicPath: "@/assets/works/",
        }),
        pubDate: fields.date({
          label: "Publication Date",
          description: "Publicatiedatum van het artikel",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        lastUpdateDate: fields.date({
          label: "Last Update Date",
          description: "Datum van laatste update van het artikel",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            heading: [2, 3, 4, 5, 6],
            image: {
              directory: "src/assets/works",
              publicPath: "@/assets/works/",
            },
          },
          components: {
            Video: block({
              label: "Video",
              description: "Embed a video",
              icon: GeneralIcon({ ariaHidden: true }),
              schema: {
                src: fields.file({
                  label: "Video file",
                  directory: "src/assets/works",
                  publicPath: "@/assets/works/",
                  validation: {
                    isRequired: true,
                  },
                }),
                class: fields.text({
                  label: "Custom classes",
                }),
              },
            }),
          },
        }),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      columns: ["name"],
      previewUrl: "/author/{slug}",
      format: { contentField: "content" },
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "Author's full name",
            validation: {
              isRequired: true,
            },
          },
          // Optional slug label overrides
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this entry",
          },
        }),
        avatar: fields.image({
          label: "Profielfoto",
          directory: "src/assets/authors",
          publicPath: "@/assets/authors/",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/authors",
            publicPath: "/src/assets/authors/",
          },
        }),
      },
    }),
  },
});
