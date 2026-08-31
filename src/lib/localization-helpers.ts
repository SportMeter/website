import contacts from "@/content/global/contacts.json";
import footerEn from "@/content/global/en/footer.json";
import headerEn from "@/content/global/en/header.json";
import seoEn from "@/content/global/en/seo.json";
import footerNl from "@/content/global/nl/footer.json";
import headerNl from "@/content/global/nl/header.json";
import seoNl from "@/content/global/nl/seo.json";
import style from "@/content/global/style.json";
import widget from "@/content/global/widget.json";
import { appUrl, defaultLocale, locales } from "site.config";

const settings: Record<string, LocalizedSettings> = {
	nl: {
		header: headerNl,
		footer: footerNl,
		contacts: contacts,
		seo: seoNl,
		style: style,
		widget: widget,
	},
	en: {
		header: headerEn,
		footer: footerEn,
		contacts: contacts,
		seo: seoEn,
		style: style,
		widget: widget,
	},
};

export function getLocalizedSettings(locale?: string): LocalizedSettings {
	return settings[locale ?? defaultLocale] ?? settings[defaultLocale];
}

export function isLocalizedUrl(url: string): boolean {
	const urlParts = url.split("/");
	const firstPart = urlParts[1];
	return locales.includes(firstPart);
}

export function unlocalizedUrl(url: string): string {
	if (isLocalizedUrl(url)) {
		const urlParts = url.split("/").filter((part) => part !== "");
		// Remove the locale part
		urlParts.shift();
		// Rejoin the parts and ensure a leading slash
		const unlocalizedPath = `/${urlParts.join("/")}`;
		return unlocalizedPath === "//" ? "/" : unlocalizedPath;
	}
	return url;
}

export function translatePath(l: string, path: string) {
	return l === defaultLocale ? path : `/${l}${path}`;
}

/**
 * Header/footer action links come from the CMS, but the app they point at
 * differs per market: app.sport-meter.nl for the Dutch site,
 * app.sportmeter.au for the Australian one. Editors therefore write the
 * placeholder %APP_URL% (optionally followed by a path) and the build fills in
 * APP_URL for this deployment.
 */
export const APP_URL_PLACEHOLDER = "%APP_URL%";

export function resolveActionLink(link: string): string {
	if (!link) return link;

	return link.startsWith(APP_URL_PLACEHOLDER)
		? appUrl + link.slice(APP_URL_PLACEHOLDER.length)
		: link;
}
