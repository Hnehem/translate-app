export const AVAILABLE_LANGS = [
    {
      lang: "Bielarusian",
      iso: "be",
    },
    {
      lang: "Catalan",
      iso: "ca",
    },
    {
      lang: "Chinese",
      iso: "zh",
    },
    {
      lang: "Croatian",
      iso: "hr",
    },
    {
      lang: "German",
      iso: "de",
    },
    {
      lang: "Greek",
      iso: "el",
    },
    {
      lang: "Hindi",
      iso: "hi",
    },
    {
      lang: "Italian",
      iso: "it",
    },
    {
      lang: "Japanese",
      iso: "ja",
    },
    {
      lang: "Korean",
      iso: "ko",
    },
    {
      lang: "Norwegian",
      iso: "no",
    },
    {
      lang: "Persian",
      iso: "fa",
    },
    {
      lang: "Portuguese",
      iso: "pt",
    },
    {
      lang: "Russian",
      iso: "ru",
    },
    {
      lang: "Spanish",
      iso: "es",
    },
    {
      lang: "Swedish",
      iso: "sv",
    },
    {
      lang: "Turkish",
      iso: "tr",
    },
    {
      lang: "Ukranian",
      iso: "uk",
    },
    {
      lang: "Vietnamese",
      iso: "vi",
    },
  ];

  export function isLangAvailable(lang) {
    return AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(lang));
  }