import { useContext } from "react";
import { AppContext } from "../../state/translate_app_context";
import { fetchTranslation } from "../../utils/fetch_translation";

export default function Icon({ name, route, title, input = false}) {
  const {
    inputLang,
    outputLang,
    translatedText,
    inputedText,
    updateLang,
    updateTranslationInfo,
  } = useContext(AppContext);

  let text = input ? inputedText : translatedText;
  let language = input ? inputLang : outputLang;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  
  async function clickHandler() {
    if (name === "copy") {
      navigator.clipboard.writeText(text).then(() => {
        alert("Text copied to the clipboar!");
      });
    } else if (name === "hear") {
      speechSynthesis.speak(utterance);
    } else if (name === "switch") {
      updateLang(outputLang, "input");
      updateLang(inputLang, "output");

      updateTranslationInfo(translatedText);

      let translation = await handleTranslation(translatedText);
      updateTranslationInfo(translation, true);
    }
  }

  async function handleTranslation(text) {
    let encodedText = encodeURIComponent(translatedText);
    encodedText = encodedText.replace(/%3F/g, "?");

    let translation = await fetchTranslation(text, outputLang, inputLang);
    return translation;
  }

  return (
    <div name={name} className="icon">
      <img title={title} src={route} alt="icon" onClick={clickHandler} />
    </div>
  );
}
