import { type ContentEntryMap, getCollection } from "astro:content";
import { type Locale, defaultLocale, locales } from "site.config";

function isEnabledLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export async function getCollectionStaticPaths<
  CollectionName extends keyof ContentEntryMap
>(
  collectionName: CollectionName,
  locale?: Locale
): Promise<PathParams<CollectionName>[]> {
  const collection = await getCollection(collectionName);

  const visibleItems = collection.filter((item) => {
    if (item.data.hidden) return false;
    // Content lives in src/content/<collection>/<lang>/. A build that does not
    // ship a locale (SITE_LOCALES) must not emit routes for it.
    return isEnabledLocale(item.slug.split("/")[0]);
  });

  const paths = visibleItems.map((item) => {
    const [lang, ...slug] = item.slug.split("/");
    let localizedSlug = slug;

    if (collectionName === "pages") {
      // For pages handle homepage slug
      localizedSlug = slug[0] === "homepage" || slug[0] === "index" ? [] : slug;

      // For pages, add language prefix for non-default locales
      if (lang !== defaultLocale && !locale) {
        localizedSlug = [lang, ...localizedSlug];
      }
    }
    // For works and posts, don't add language prefix to slug - Astro i18n handles it

    return {
      params: {
        lang,
        slug: localizedSlug.join("/") || undefined,
      },
      props: {
        data: item,
      },
    };
  });

  let pathsRes = paths;
  if (locale) {
    pathsRes = paths.filter((path) => path.params.lang === locale);
  }

  return pathsRes;
}

/**
 * For routes that sit in an explicit /<locale>/ directory (src/pages/en/...,
 * src/pages/nl/...).
 *
 * Such a route must stay empty when that locale is this build's default locale,
 * because the unprefixed route already serves it — otherwise the same post
 * would exist on both / and /<locale>/. It must also stay empty when the locale
 * is not part of this build at all.
 */
export async function getPrefixedCollectionStaticPaths<
  CollectionName extends keyof ContentEntryMap
>(
  collectionName: CollectionName,
  locale: Locale
): Promise<PathParams<CollectionName>[]> {
  if (locale === defaultLocale || !isEnabledLocale(locale)) return [];

  return getCollectionStaticPaths(collectionName, locale);
}
