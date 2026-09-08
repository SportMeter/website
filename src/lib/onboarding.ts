/**
 * Shared copy and option lists for the onboarding questionnaire ("step 2" of
 * the sign-up flow). Used by the inline wizard on /contact and by the
 * stand-alone /start page that someone reaches through a shared link.
 *
 * Option values are stable, language-independent identifiers: they end up in
 * the Netlify form submission, so the team sees the same value regardless of
 * the visitor's language.
 */

export const ONBOARDING_PATH = "/start";

/** Name of the Netlify form that receives the questionnaire answers. */
export const ONBOARDING_FORM_NAME = "contact-onboarding";

/**
 * Fields of the contact-onboarding form. Netlify only stores fields that are
 * present in a form definition in the deployed HTML, so this list drives the
 * hidden definition form as well as the AJAX payload.
 */
export const ONBOARDING_FIELDS = [
  "source",
  "locale",
  "name",
  "email",
  "club",
  "team_name",
  "age_group",
  "team_size",
  "checkin_frequency",
  "themes",
  "themes_other",
  "first_outcome",
  "first_outcome_other",
  "start",
  "start_date",
] as const;

export const TEAM_SIZE = { min: 3, max: 40 } as const;
export const CHECKIN_FREQUENCY = { min: 1, max: 5 } as const;
export const MAX_THEMES = 3;

interface Option {
  value: string;
  label: string;
}

export interface OnboardingCopy {
  heading: string;
  headingLinked: string;
  intro: string;
  introLinked: string;
  progress: string;
  back: string;
  next: string;
  finish: string;
  sending: string;
  error: string;
  optional: string;
  notYou: string;

  identityTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  clubLabel: string;
  clubPlaceholder: string;

  teamTitle: string;
  teamNameLabel: string;
  teamNamePlaceholder: string;
  ageGroupLabel: string;
  ageGroupPlaceholder: string;
  ageGroups: Option[];

  sizeTitle: string;
  sizeHint: string;
  sizeUnit: string;

  frequencyTitle: string;
  frequencyHint: string;
  frequencyUnit: string;

  themesTitle: string;
  themesHint: string;
  themesNudge: string;
  themesCount: string;
  themes: Option[];
  themesOtherPlaceholder: string;

  outcomeTitle: string;
  outcomeHint: string;
  outcomes: Option[];
  outcomeOtherPlaceholder: string;

  startTitle: string;
  starts: Option[];
  startDateLabel: string;

  doneTitle: string;
  doneMessage: string;
}

const nl: OnboardingCopy = {
  heading: "Laten we je account klaarzetten",
  headingLinked: "Je bent aangemeld voor SportMeter",
  intro:
    "Nog een paar korte vragen. Op basis van je antwoorden zetten we je team en de eerste check-ins alvast klaar.",
  introLinked:
    "Iemand uit je vereniging heeft je aangemeld. Beantwoord een paar korte vragen, dan zetten we je team en de eerste check-ins alvast klaar.",
  progress: "Vraag {current} van {total}",
  back: "Terug",
  next: "Volgende",
  finish: "Afronden",
  sending: "Versturen...",
  error: "Er ging iets mis bij het versturen. Probeer het opnieuw.",
  optional: "optioneel",
  notYou: "Niet jij?",

  identityTitle: "Wie ben je?",
  nameLabel: "Volledige naam",
  namePlaceholder: "Jan de Vries",
  emailLabel: "E-mailadres",
  emailPlaceholder: "mijn@email.com",
  clubLabel: "Vereniging",
  clubPlaceholder: "Naam van je vereniging",

  teamTitle: "Over welk team gaat het?",
  teamNameLabel: "Teamnaam",
  teamNamePlaceholder: "Bijv. JO15-1 of Dames 2",
  ageGroupLabel: "Leeftijdsgroep",
  ageGroupPlaceholder: "Kies een leeftijdsgroep",
  ageGroups: [
    { value: "12-15", label: "12-15 jaar" },
    { value: "16-18", label: "16-18 jaar" },
    { value: "senioren", label: "Senioren" },
    { value: "gemengd", label: "Gemengd" },
  ],

  sizeTitle: "Hoe groot is je team?",
  sizeHint: "Schuif naar het aantal sporters dat je wilt volgen.",
  sizeUnit: "sporters",

  frequencyTitle: "Hoe vaak denk je in te checken bij de groep?",
  frequencyHint: "Aantal check-ins per week. We zetten de eerste check-ins alvast in dit ritme klaar.",
  frequencyUnit: "keer per week",

  themesTitle: "Waar wil je SportMeter vooral voor inzetten?",
  themesHint: "Kies 2 tot 3 thema's die het beste bij jouw team passen.",
  themesNudge: "Tip: met 2 of 3 thema's kunnen we je eerste check-ins beter afstemmen.",
  themesCount: "{count} van {max} gekozen",
  themes: [
    { value: "sportplezier", label: "Sportplezier volgen" },
    { value: "welzijn", label: "Welzijn bewaken" },
    { value: "belasting", label: "Belasting monitoren" },
    { value: "blessures", label: "Blessures helpen voorkomen" },
    { value: "teamontwikkeling", label: "Teamontwikkeling" },
    { value: "signaleren", label: "Eerder signaleren" },
    { value: "gesprekken", label: "Betere gesprekken voeren" },
    { value: "anders", label: "Anders" },
  ],
  themesOtherPlaceholder: "Waar wil je SportMeter nog meer voor inzetten?",

  outcomeTitle: "Wat zou voor jou een goede eerste uitkomst zijn?",
  outcomeHint: "Kies wat het beste past.",
  outcomes: [
    { value: "beter-weten", label: "Beter weten hoe het met sporters gaat" },
    { value: "signalen", label: "Signalen eerder opmerken" },
    { value: "gesprekken", label: "Gerichtere gesprekken voeren" },
    { value: "betrokkenheid", label: "Meer betrokkenheid in het team" },
    { value: "ritme", label: "Een vast check-inritme opbouwen" },
    { value: "anders", label: "Anders" },
  ],
  outcomeOtherPlaceholder: "Wat zou voor jou een goede eerste uitkomst zijn?",

  startTitle: "Wanneer wil je beginnen?",
  starts: [
    { value: "zsm", label: "Zo snel mogelijk" },
    { value: "volgende-week", label: "Volgende week" },
    { value: "twee-weken", label: "Over twee weken" },
    { value: "datum", label: "Kies een datum" },
  ],
  startDateLabel: "Startdatum",

  doneTitle: "Top, we gaan aan de slag!",
  doneMessage:
    "We zetten je team en de eerste check-ins klaar en sturen je een e-mail zodra je kunt beginnen.",
};

const en: OnboardingCopy = {
  heading: "Let's set up your account",
  headingLinked: "You've been signed up for SportMeter",
  intro:
    "A few quick questions. Based on your answers we'll set up your team and the first check-ins ahead of time.",
  introLinked:
    "Someone from your club signed you up. Answer a few quick questions and we'll set up your team and the first check-ins ahead of time.",
  progress: "Question {current} of {total}",
  back: "Back",
  next: "Next",
  finish: "Finish",
  sending: "Sending...",
  error: "Something went wrong while sending. Please try again.",
  optional: "optional",
  notYou: "Not you?",

  identityTitle: "Who are you?",
  nameLabel: "Full name",
  namePlaceholder: "John Smith",
  emailLabel: "Email address",
  emailPlaceholder: "my@email.com",
  clubLabel: "Club",
  clubPlaceholder: "Name of your club",

  teamTitle: "Which team is this for?",
  teamNameLabel: "Team name",
  teamNamePlaceholder: "E.g. U15 or Women's 2nds",
  ageGroupLabel: "Age group",
  ageGroupPlaceholder: "Choose an age group",
  ageGroups: [
    { value: "12-15", label: "12-15 years" },
    { value: "16-18", label: "16-18 years" },
    { value: "senioren", label: "Seniors" },
    { value: "gemengd", label: "Mixed" },
  ],

  sizeTitle: "How big is your team?",
  sizeHint: "Slide to the number of athletes you want to follow.",
  sizeUnit: "athletes",

  frequencyTitle: "How often do you expect to check in with the group?",
  frequencyHint: "Check-ins per week. We'll set up the first check-ins in this rhythm.",
  frequencyUnit: "times a week",

  themesTitle: "What do you mainly want to use SportMeter for?",
  themesHint: "Pick 2 to 3 themes that fit your team best.",
  themesNudge: "Tip: with 2 or 3 themes we can tailor your first check-ins better.",
  themesCount: "{count} of {max} chosen",
  themes: [
    { value: "sportplezier", label: "Follow sport fun" },
    { value: "welzijn", label: "Keep an eye on wellbeing" },
    { value: "belasting", label: "Monitor load" },
    { value: "blessures", label: "Help prevent injuries" },
    { value: "teamontwikkeling", label: "Team development" },
    { value: "signaleren", label: "Spot signals earlier" },
    { value: "gesprekken", label: "Have better conversations" },
    { value: "anders", label: "Other" },
  ],
  themesOtherPlaceholder: "What else do you want to use SportMeter for?",

  outcomeTitle: "What would be a good first outcome for you?",
  outcomeHint: "Pick the one that fits best.",
  outcomes: [
    { value: "beter-weten", label: "Knowing better how my athletes are doing" },
    { value: "signalen", label: "Noticing signals earlier" },
    { value: "gesprekken", label: "Having more focused conversations" },
    { value: "betrokkenheid", label: "More engagement in the team" },
    { value: "ritme", label: "Building a steady check-in rhythm" },
    { value: "anders", label: "Other" },
  ],
  outcomeOtherPlaceholder: "What would be a good first outcome for you?",

  startTitle: "When do you want to start?",
  starts: [
    { value: "zsm", label: "As soon as possible" },
    { value: "volgende-week", label: "Next week" },
    { value: "twee-weken", label: "In two weeks" },
    { value: "datum", label: "Pick a date" },
  ],
  startDateLabel: "Start date",

  doneTitle: "Great, let's get going!",
  doneMessage: "We'll set up your team and the first check-ins and email you as soon as you can start.",
};

export function getOnboardingCopy(locale: string | undefined): OnboardingCopy {
  return locale === "en" ? en : nl;
}
