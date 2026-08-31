// Per-deployment configuration.
//
// One codebase serves more than one site: the Dutch landing page on
// samenvoorplezier.nl and the Australian one on sportmeter.au. Everything that
// differs between those deployments is read from the environment at BUILD time,
// with the Dutch site as the fallback — so a build without any of these
// variables set behaves exactly as it did before, and the existing Netlify
// project keeps working untouched.
//
// process.env (not import.meta.env) on purpose: this file is imported by
// astro.config.ts, which runs in plain Node before Vite exists.

export type Locale = "en" | "nl";

const KNOWN_LOCALES: Locale[] = ["en", "nl"];

function isKnownLocale(value: string): value is Locale {
	return (KNOWN_LOCALES as string[]).includes(value);
}

// SITE_LOCALES: comma-separated subset of the known locales, e.g. "en".
// Content in a locale that is not listed is not built at all.
function readLocales(): Locale[] {
	const raw = process.env.SITE_LOCALES?.trim();
	if (!raw) return KNOWN_LOCALES;

	const parsed = raw
		.split(",")
		.map((locale) => locale.trim())
		.filter((locale) => locale.length > 0);
	const unknown = parsed.filter((locale) => !isKnownLocale(locale));

	if (unknown.length > 0 || parsed.length === 0) {
		throw new Error(
			`SITE_LOCALES="${raw}" is invalid. Use a comma-separated subset of: ${KNOWN_LOCALES.join(", ")}.`,
		);
	}

	return parsed.filter(isKnownLocale);
}

// SITE_DEFAULT_LOCALE: the locale served without a URL prefix, e.g. "en" puts
// English on / and Dutch on /nl/. Must be one of SITE_LOCALES.
function readDefaultLocale(available: Locale[]): Locale {
	const raw = process.env.SITE_DEFAULT_LOCALE?.trim();

	if (!raw) return available.includes("nl") ? "nl" : available[0];

	if (!isKnownLocale(raw) || !available.includes(raw)) {
		throw new Error(
			`SITE_DEFAULT_LOCALE="${raw}" is not one of this build's locales (${available.join(", ")}).`,
		);
	}

	return raw;
}

export const locales = readLocales();
export const defaultLocale = readDefaultLocale(locales);

export const siteUrl = process.env.SITE_URL ?? "https://samenvoorplezier.nl";
export const siteTitle = process.env.SITE_TITLE ?? "Samen voor plezier";

// Where the login button sends people: the Flutter web app for this market.
export const appUrl = process.env.APP_URL ?? "https://app.sport-meter.nl";
