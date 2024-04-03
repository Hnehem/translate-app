export async function fetchTranslation(text, language, outputLang) {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=${language}|${outputLang}`
  );
  const data = await response.json();

  return data.responseData.translatedText;
}